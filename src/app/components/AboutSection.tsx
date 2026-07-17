'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-text">
            <div className="badge-premium gold-badge">
              <i className="fa-solid fa-info-circle"></i> Tentang Kami
            </div>
            <h2>MINTA.<span className="accent">PERGI</span></h2>
            <p>
              <strong>MINTA.PERGI</strong> (sebelumnya dikenal sebagai Minta Anter) adalah platform layanan antar jemput dan jasa titip yang dirancang khusus untuk memenuhi kebutuhan mobilitas mahasiswa di Kota Tasikmalaya. Berawal dari kebutuhan akan transportasi yang mudah diakses, aman, dan terjangkau, kami hadir sebagai solusi yang menghubungkan mahasiswa dengan mitra driver terpercaya melalui teknologi berbasis web.
            </p>
            <p>
              Kami memahami bahwa aktivitas perkuliahan sering kali menuntut mobilitas yang tinggi, mulai dari perjalanan ke kampus, kos, stasiun, terminal, hingga kebutuhan mendadak seperti membeli makanan, obat, atau perlengkapan kuliah. Oleh karena itu, MINTA.PERGI menyediakan layanan yang praktis dengan proses pemesanan yang sederhana, estimasi tarif yang transparan, serta komunikasi yang cepat melalui WhatsApp.
            </p>
          </div>
          
          <div className="vision-mission glass-panel">
            <h3>Visi & Misi</h3>
            <div className="vision-box">
              <span className="sub-label accent">VISI</span>
              <p>Menjadi platform layanan mobilitas mahasiswa yang terpercaya, inovatif, dan terjangkau di Tasikmalaya, serta mendukung aktivitas akademik melalui solusi transportasi dan jasa titip yang aman dan efisien.</p>
            </div>
            
            <div className="mission-box">
              <span className="sub-label accent">MISI</span>
              <ul>
                <li>
                  <i className="fa-solid fa-chevron-right text-gold" style={{ marginRight: '8px' }}></i> 
                  Menyediakan layanan antar jemput dan jasa titip yang cepat, aman, dan mudah diakses.
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right text-gold" style={{ marginRight: '8px' }}></i> 
                  Memberikan tarif yang transparan dan ramah di kantong mahasiswa.
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right text-gold" style={{ marginRight: '8px' }}></i> 
                  Membangun kemitraan dengan driver yang profesional, bertanggung jawab, dan berintegritas.
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right text-gold" style={{ marginRight: '8px' }}></i> 
                  Memanfaatkan teknologi digital untuk meningkatkan kualitas pelayanan dan kemudahan pemesanan.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
