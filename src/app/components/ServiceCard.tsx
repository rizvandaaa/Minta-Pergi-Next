'use client';

import React from 'react';

interface ServiceCardProps {
  selectedService: 'antar-jemput' | 'jastip' | null;
  onSelectService: (service: 'antar-jemput' | 'jastip') => void;
}

export default function ServiceCard({ selectedService, onSelectService }: ServiceCardProps) {
  return (
    <section id="layanan" className="services-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Pilih <span className="accent">Layanan Kami</span></h2>
          <div className="title-bar"></div>
          <p className="section-subtitle">Pilih layanan yang Anda butuhkan, hitung tarif secara transparan dengan peta interaktif kami.</p>
        </div>
        
        <div className="services-grid">
          {/* Card 1: Antar Jemput */}
          <div 
            className={`service-card glass-panel ${selectedService === 'antar-jemput' ? 'active' : ''}`} 
            id="card-antar-jemput" 
            onClick={() => onSelectService('antar-jemput')}
          >
            <div className="card-icon">
              <i className="fa-solid fa-motorcycle"></i>
            </div>
            <h3>Antar Jemput</h3>
            <p>Layanan transportasi motor cepat dari titik penjemputan ke tujuan Anda di wilayah Tasikmalaya.</p>
            <span className="card-btn">Pilih Layanan <i className="fa-solid fa-arrow-right"></i></span>
          </div>
          
          {/* Card 2: Jasa Titip / Suruh */}
          <div 
            className={`service-card glass-panel ${selectedService === 'jastip' ? 'active' : ''}`} 
            id="card-jastip" 
            onClick={() => onSelectService('jastip')}
          >
            <div className="card-icon">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <h3>Jasa Titip / Suruh</h3>
            <p>Butuh beli makanan, obat, ambil barang, atau titip belanjaan? Biar kami yang urus semuanya.</p>
            <span className="card-btn">Pilih Layanan <i className="fa-solid fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </section>
  );
}
