'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { createOrderAction } from '@/app/actions';

// Import MapClient dynamically with SSR disabled to prevent hydration errors
const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '480px',
      backgroundColor: '#161616',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#d4af37',
      fontFamily: 'var(--font-heading)'
    }}>
      <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: '10px' }}></i> Loading Peta Interaktif...
    </div>
  )
});

interface MapCalculatorProps {
  selectedService: 'antar-jemput' | 'jastip' | null;
}

const UNSILI_COORDS = { lat: -7.3503, lng: 108.2241 };
const STASIUN_TASIK_COORDS = { lat: -7.3275, lng: 108.2208 };
const TERMINAL_INDIHIANG_COORDS = { lat: -7.3056, lng: 108.1969 };

export default function MapCalculator({ selectedService }: MapCalculatorProps) {
  const [pickup, setPickup] = useState(UNSILI_COORDS);
  const [destination, setDestination] = useState(STASIUN_TASIK_COORDS);
  const [markerMode, setMarkerMode] = useState<'pickup' | 'destination'>('pickup');
  const [jastipDuration, setJastipDuration] = useState<number>(25);
  
  const [pricing, setPricing] = useState({
    distance: '0.0',
    distanceCost: 0,
    timeCost: 0,
    total: 5000,
  });

  // Haversine distance formula with Tasikmalaya winding road factor (1.3)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dist = R * c;
    return dist * 1.3;
  };

  // Recalculate price when locations or parameters change
  useEffect(() => {
    const distance = calculateDistance(pickup.lat, pickup.lng, destination.lat, destination.lng);
    
    // UNSILI radius checks
    const distPickupToUnsili = calculateDistance(pickup.lat, pickup.lng, UNSILI_COORDS.lat, UNSILI_COORDS.lng);
    const distDestToUnsili = calculateDistance(destination.lat, destination.lng, UNSILI_COORDS.lat, UNSILI_COORDS.lng);
    const isAroundUnsili = distPickupToUnsili <= 1.5 && distDestToUnsili <= 1.5;
    
    let baseFare = 5000;
    let distanceCost = 0;
    let timeCost = 0;
    
    if (isAroundUnsili) {
      baseFare = 5000;
      distanceCost = 0;
    } else {
      baseFare = 5000;
      const extraKm = Math.max(0, distance - 1.5);
      distanceCost = Math.ceil(extraKm) * 3000;
    }
    
    if (selectedService === 'jastip') {
      timeCost = Math.floor(jastipDuration / 25) * 1000;
    }
    
    setPricing({
      distance: distance.toFixed(1),
      distanceCost,
      timeCost,
      total: baseFare + distanceCost + timeCost,
    });
  }, [pickup, destination, jastipDuration, selectedService]);

  if (!selectedService) return null;

  // Handle quick selections
  const handleQuickSelect = (loc: 'unsili' | 'stasiun' | 'terminal') => {
    let coords = UNSILI_COORDS;
    if (loc === 'stasiun') coords = STASIUN_TASIK_COORDS;
    if (loc === 'terminal') coords = TERMINAL_INDIHIANG_COORDS;

    if (markerMode === 'pickup') {
      setPickup(coords);
    } else {
      setDestination(coords);
    }
  };

  // Handle order submission and WhatsApp redirect
  const handleOrderWhatsApp = async () => {
    // 1. Ambil data member terdaftar dari localStorage
    const memberName = localStorage.getItem('minta_pergi_name') || 'Tamu / Belum Daftar';
    const memberNim = localStorage.getItem('minta_pergi_nim') || '';
    const memberKampus = localStorage.getItem('minta_pergi_kampus') || 'Tasikmalaya';

    // 2. Simpan log order ke Supabase PostgreSQL via Server Action
    const orderResult = await createOrderAction({
      member_nim: memberNim,
      service_type: selectedService,
      pickup_lat: pickup.lat,
      pickup_lng: pickup.lng,
      dest_lat: destination.lat,
      dest_lng: destination.lng,
      distance: parseFloat(pricing.distance),
      jastip_duration: selectedService === 'jastip' ? jastipDuration : 0,
      total_fare: pricing.total,
    });

    if (!orderResult.success) {
      console.error('Gagal merekam log order ke database Supabase:', orderResult.error);
      // Tetap lanjutkan pemesanan via WA agar user tidak terganggu
    }

    // 3. Bangun template pesan WhatsApp
    const serviceName = selectedService === 'jastip' ? 'JASA TITIP / SURUH' : 'ANTAR JEMPUT';
    const pickupMapLink = `https://www.google.com/maps/search/?api=1&query=${pickup.lat},${pickup.lng}`;
    const destMapLink = `https://www.google.com/maps/search/?api=1&query=${destination.lat},${destination.lng}`;

    let message = `*ORDER MINTA.PERGI - ${serviceName}*\n`;
    message += `----------------------------------------\n`;
    message += `*Pemesan:* ${memberName} (${memberKampus})\n`;
    message += `*Titik Jemput/Ambil:* ${pickupMapLink}\n`;
    message += `*Titik Tujuan/Antar:* ${destMapLink}\n`;
    message += `*Estimasi Jarak:* ${pricing.distance} km\n`;

    if (selectedService === 'jastip') {
      message += `*Estimasi Waktu Tunggu:* ${jastipDuration} Menit\n`;
      message += `*Daftar Belanja:* (Ketik barang belanjaan Anda di sini)\n`;
    }

    message += `----------------------------------------\n`;
    message += `*Rincian Biaya:*\n`;
    message += `- Tarif Dasar (UNSILI): Rp 5.000\n`;
    if (pricing.distanceCost > 0) {
      message += `- Biaya Jarak Tambahan: Rp ${pricing.distanceCost.toLocaleString('id-ID')}\n`;
    }
    if (selectedService === 'jastip' && pricing.timeCost > 0) {
      message += `- Biaya Waktu Tunggu: Rp ${pricing.timeCost.toLocaleString('id-ID')}\n`;
    }
    message += `*Total Estimasi:* *Rp ${pricing.total.toLocaleString('id-ID')}*\n`;
    message += `----------------------------------------\n`;
    message += `Mohon segera dicarikan Driver terdekat. Terima kasih!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="calculator-area" className="calculator-panel glass-panel">
      <div className="calc-grid">
        
        {/* Form panel */}
        <div className="calc-form-panel">
          <div className="calc-header">
            <span className="service-badge gold-badge">
              {selectedService === 'jastip' ? 'Jasa Titip / Suruh' : 'Antar Jemput'}
            </span>
            <h3>Detail Pemesanan & Estimasi</h3>
            <p className="service-description">
              {selectedService === 'jastip'
                ? 'Butuh belanja makanan di kantin favorit, tebus obat di apotek, ambil berkas, atau titip barang ke teman? Layanan Jasa Titip Minta.Pergi siap mempermudah urusan Anda. Tarif transparan dengan tambahan Rp 1.000 per 25 menit untuk kompensasi waktu tunggu/belanja driver kami.'
                : 'Layanan Antar Jemput dari Minta.Pergi hadir untuk memudahkan mobilitas mahasiswa di wilayah Tasikmalaya. Pengguna dapat memesan perjalanan dari lokasi penjemputan menuju tujuan dengan proses yang cepat, mudah, dan tarif yang transparan.'}
            </p>
          </div>

          <div className="form-group-location">
            <label>
              <i className="fa-solid fa-location-dot"></i> Tentukan Titik pada Peta
            </label>
            <div className="location-selectors">
              <button
                className={`btn btn-outline btn-sm ${markerMode === 'pickup' ? 'active' : ''}`}
                onClick={() => setMarkerMode('pickup')}
              >
                <i className="fa-solid fa-user-pin"></i> Tentukan Titik Jemput
              </button>
              <button
                className={`btn btn-outline btn-sm ${markerMode === 'destination' ? 'active' : ''}`}
                onClick={() => setMarkerMode('destination')}
              >
                <i className="fa-solid fa-flag-checkered"></i> Tentukan Titik Tujuan
              </button>
            </div>

            <div className="quick-locations">
              <span>Pilihan Cepat:</span>
              <button className="quick-loc-btn" onClick={() => handleQuickSelect('unsili')}>
                Kampus UNSILI
              </button>
              <button className="quick-loc-btn" onClick={() => handleQuickSelect('stasiun')}>
                Stasiun Tasikmalaya
              </button>
              <button className="quick-loc-btn" onClick={() => handleQuickSelect('terminal')}>
                Terminal Indihiang
              </button>
            </div>
          </div>

          {/* Wait Time (Only for Jastip) */}
          {selectedService === 'jastip' && (
            <div className="form-group">
              <label htmlFor="jastip-duration">
                <i className="fa-solid fa-clock"></i> Estimasi Waktu Belanja/Tunggu
              </label>
              <div className="slider-container">
                <input
                  type="range"
                  id="jastip-duration"
                  min="0"
                  max="180"
                  step="5"
                  value={jastipDuration}
                  onChange={(e) => setJastipDuration(parseInt(e.target.value))}
                />
                <span className="slider-value">{jastipDuration} Menit</span>
              </div>
              <small className="help-text">
                Setiap 25 menit tambahan dikenakan Rp 1.000 (tarif dasar mencakup 25 menit pertama).
              </small>
            </div>
          )}

          {/* Coordinates Displays */}
          <div className="coords-display">
            <div className="coord-box">
              <span className="label">Jemput/Ambil:</span>
              <span className="value">{pickup.lat.toFixed(5)}, {pickup.lng.toFixed(5)}</span>
            </div>
            <div className="coord-box">
              <span className="label">Tujuan/Antar:</span>
              <span className="value">{destination.lat.toFixed(5)}, {destination.lng.toFixed(5)}</span>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="price-breakdown">
            <div className="breakdown-row">
              <span>Tarif Dasar (Radius UNSILI)</span>
              <span className="gold-text">Rp 5.000</span>
            </div>
            <div className="breakdown-row">
              <span>Jarak Tambahan ({pricing.distance} km)</span>
              <span className="gold-text">Rp {pricing.distanceCost.toLocaleString('id-ID')}</span>
            </div>
            {selectedService === 'jastip' && (
              <div className="breakdown-row">
                <span>Biaya Waktu Tambahan</span>
                <span className="gold-text">Rp {pricing.timeCost.toLocaleString('id-ID')}</span>
              </div>
            )}
            <div className="divider"></div>
            <div className="breakdown-row total-row">
              <span>Total Estimasi Biaya</span>
              <span className="total-price">Rp {pricing.total.toLocaleString('id-ID')}</span>
            </div>
          </div>

          {/* Submit */}
          <button className="btn btn-gold btn-block btn-lg" onClick={handleOrderWhatsApp}>
            <i className="fa-brands fa-whatsapp"></i> Pesan Sekarang via WhatsApp
          </button>
        </div>

        {/* Map Panel */}
        <div className="calc-map-panel">
          <MapClient
            pickup={pickup}
            destination={destination}
            onPickupChange={(lat, lng) => setPickup({ lat, lng })}
            onDestinationChange={(lat, lng) => setDestination({ lat, lng })}
            markerMode={markerMode}
          />
          <div className="map-overlay-instructions">
            <p>
              <i className="fa-solid fa-circle-info"></i> Klik peta untuk menaruh pin penjemputan/tujuan.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
