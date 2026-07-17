'use client';

import React, { useState } from 'react';

export default function GuidebookReader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="mekanisme" className="mechanism-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Mekanisme <span className="accent">Pemesanan</span></h2>
          <div className="title-bar"></div>
          <p className="section-subtitle">Cara mudah memesan layanan MINTA.PERGI dalam 4 langkah praktis.</p>
        </div>
        
        <div className="mechanism-steps">
          <div className="step-card glass-panel">
            <div className="step-number">1</div>
            <h4>Daftar Member</h4>
            <p>Isi formulir pendaftaran member di website dengan data akademis Anda.</p>
          </div>
          <div className="step-card glass-panel">
            <div className="step-number">2</div>
            <h4>Masuk Grup</h4>
            <p>Setelah mendaftar, Anda akan diarahkan untuk masuk ke Grup WhatsApp resmi MINTA.PERGI.</p>
          </div>
          <div className="step-card glass-panel">
            <div className="step-number">3</div>
            <h4>Baca Guidebook</h4>
            <p>Buka guidebook resmi yang tersedia untuk memahami tata cara order & aturan keselamatan.</p>
          </div>
          <div className="step-card glass-panel">
            <div className="step-number">4</div>
            <h4>Order Layanan</h4>
            <p>Gunakan kalkulator tarif di web ini, lalu kirim pesanan Anda langsung ke grup WhatsApp driver.</p>
          </div>
        </div>
        
        {/* Interactive Guidebook Reader */}
        <div className="guidebook-container glass-panel">
          <div className="guidebook-header">
            <h3><i className="fa-solid fa-book-open"></i> Guidebook Resmi MINTA.PERGI</h3>
            <button 
              className="btn btn-outline btn-sm" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'Tutup Panduan' : 'Buka Panduan'} {isOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
            </button>
          </div>
          
          <div className={`guidebook-content ${isOpen ? '' : 'hidden'}`}>
            <div className="guide-section">
              <h5>1. Apa itu MINTA.PERGI?</h5>
              <p>MINTA.PERGI adalah platform layanan transportasi antar-jemput dan jasa titip belanja/suruh yang dikembangkan khusus oleh dan untuk mahasiswa di Kota Tasikmalaya. Layanan kami beroperasi terutama di sekitar Universitas Siliwangi untuk mempermudah mobilitas harian rekan-rekan mahasiswa dengan harga yang terjangkau.</p>
            </div>
            <div className="guide-section">
              <h5>2. Cara Pemesanan Antar-Jemput (Anjem)</h5>
              <ul>
                <li>Gunakan fitur peta di bagian <strong>Layanan</strong> website ini.</li>
                <li>Tentukan titik jemput dan titik tujuan Anda.</li>
                <li>Sistem akan mengestimasi jarak dan tarif secara transparan.</li>
                <li>Klik tombol "Pesan Sekarang via WhatsApp". Anda akan diarahkan mengirim format pesan otomatis yang berisi koordinat dan rincian tarif ke grup WhatsApp Driver.</li>
                <li>Mitra driver terdekat akan mengambil pesanan Anda dan segera menjemput Anda.</li>
              </ul>
            </div>
            <div className="guide-section">
              <h5>3. Cara Pemesanan Jasa Titip (Jastip) / Suruh</h5>
              <ul>
                <li>Pilih layanan Jastip di website.</li>
                <li>Tentukan titik lokasi pembelian barang (toko/warung) dan titik pengantaran (kos/kampus) pada peta.</li>
                <li>Tentukan estimasi waktu tunggu/belanja menggunakan slider.</li>
                <li>Sistem akan otomatis menghitung tarif berdasarkan jarak dan durasi waktu belanja (Rp 1.000 per 25 menit tambahan).</li>
                <li>Klik tombol "Pesan Sekarang via WhatsApp", masukkan daftar barang yang ingin dibeli, lalu kirim pesan otomatis tersebut ke grup WhatsApp.</li>
              </ul>
            </div>
            <div className="guide-section">
              <h5>4. Aturan Keselamatan & Kenyamanan</h5>
              <ul>
                <li>Setiap penumpang wajib menggunakan helm yang disediakan oleh mitra driver.</li>
                <li>Pembayaran dapat dilakukan secara tunai (cash) atau transfer e-wallet (Dana/Gopay/ShopeePay) langsung ke driver setelah perjalanan selesai.</li>
                <li>Hormati sesama mahasiswa dan driver demi menjaga kenyamanan bersama di komunitas MINTA.PERGI.</li>
              </ul>
            </div>
            <div className="guidebook-footer text-center" style={{ textAlign: 'center' }}>
              <a href="/guidebook.md" download className="btn btn-gold btn-sm">
                <i className="fa-solid fa-download"></i> Unduh File Guidebook.md
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
