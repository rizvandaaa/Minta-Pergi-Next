'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="/assets/logo.jpg" alt="MINTA.PERGI Logo" className="logo-img" />
            <span className="logo-text">MINTA.<span className="accent">PERGI</span></span>
          </a>
          <p>Menghubungkan mahasiswa Tasikmalaya dengan mobilitas aman, nyaman, dan ramah kantong.</p>
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#layanan">Layanan</a></li>
            <li><a href="#mekanisme">Mekanisme</a></li>
            <li><a href="#gabung-grup">Gabung Grup</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Legal & Kontak</h4>
          <ul>
            <li><a href="#mekanisme">Aturan Komunitas</a></li>
            <li><a href="#tentang-kami">Tentang Kami</a></li>
            <li><a href="mailto:info@mintapergi.com">Hubungi Admin</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <p>&copy; 2026 MINTA.PERGI Tasikmalaya. All Rights Reserved. Dibuat khusus untuk Mahasiswa/i Tasikmalaya.</p>
        </div>
      </div>
    </footer>
  );
}
