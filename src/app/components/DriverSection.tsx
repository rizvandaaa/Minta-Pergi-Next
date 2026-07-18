'use client';

import React from 'react';

export default function DriverSection() {
  return (
    <section id="mitra-driver" className="driver-section section-padding">
      <div className="container text-center">
        <div className="driver-container glass-panel">
          <div className="driver-icon animate-bounce-slow">
            <i className="fa-solid fa-motorcycle"></i>
          </div>
          <h2>Cari Penghasilan Tambahan? <span className="accent">Gabung Mitra Driver!</span></h2>
          <p className="driver-subtitle">
            Punya motor matic sendiri? Ingin menambah uang jajan di sela-sela waktu kuliah? Bergabunglah menjadi bagian dari Mitra Driver MINTA.PERGI dan nikmati waktu kerja yang super fleksibel di sekitar kampus Tasikmalaya.
          </p>
          
          <div className="driver-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-desc">Pendapatan Milik Anda</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Fleksibel</span>
              <span className="stat-desc">Atur Jam Kerja Sendiri</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Koneksi</span>
              <span className="stat-desc">Sesama Mahasiswa</span>
            </div>
          </div>
          
          <div className="driver-action">
            {/* Google Form link for Driver recruitment */}
            <a 
              href="https://forms.gle/xxgTemTtTffu5cRYA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-gold btn-lg"
            >
              <i className="fa-solid fa-file-signature"></i> Isi Formulir Pendaftaran Mitra
            </a>
            <p className="form-note">*Link akan mengarah ke Formulir Pendaftaran Google Form resmi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
