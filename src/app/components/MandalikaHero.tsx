'use client';

import React from 'react';

export default function MandalikaHero() {
  const acronymItems = [
    { letter: 'M', desc: 'elayani', isGold: true },
    { letter: 'A', desc: 'ntar-Jemput' },
    { letter: 'N', desc: 'yaman' },
    { letter: 'D', desc: 'igital' },
    { letter: 'A', desc: 'man', isGold: true },
    { letter: 'L', desc: 'ebih' },
    { letter: 'I', desc: 'ovatif' },
    { letter: 'K', desc: 'husus' },
    { letter: 'A', desc: 'nda.', isGold: true },
  ];

  return (
    <section id="dashboard" className="hero-section">
      <div className="hero-bg-overlay"></div>
      <div className="hero-gridcontainer container">
        <div className="hero-content">
          <div className="badge-premium">
            <i className="fa-solid fa-graduation-cap"></i> Khusus Mahasiswa Tasikmalaya
          </div>
          <h1 className="hero-title">
            <span className="title-sub">SOLUSI MOBILITAS MAHASISWA</span>
            MINTA.<span className="accent">PERGI</span>
          </h1>
          <p className="hero-description">
            Layanan antar jemput dan jasa titip/suruh paling praktis, aman, dan transparan di Kota Tasikmalaya. Tarif bersahabat dengan kantong mahasiswa.
          </p>
          <div className="hero-ctas">
            <a href="#layanan" className="btn btn-gold btn-lg">
              <i className="fa-solid fa-motorcycle"></i> Mulai Pesan
            </a>
            <a href="#mekanisme" className="btn btn-outline btn-lg">
              <i className="fa-solid fa-circle-info"></i> Pelajari Mekanisme
            </a>
          </div>
        </div>

        {/* MANDALIKA Dashboard Slogan */}
        <div className="mandalika-card glass-panel animate-pulse-slow">
          <h3 className="mandalika-title">
            Dashboard <span className="accent">MANDALIKA</span>
          </h3>
          <div className="mandalika-acronym">
            {acronymItems.map((item, idx) => (
              <div key={idx} className="mandalika-letter-item">
                <span className={`letter ${item.isGold ? 'font-gold' : ''}`}>
                  {item.letter}
                </span>
                <span className="desc">{item.desc}</span>
              </div>
            ))}
          </div>
          <div className="mandalika-footer">
            <p className="tagline">#TasikmalayaMakinPraktis</p>
          </div>
        </div>
      </div>

      <div className="scroll-down-indicator">
        <a href="#layanan">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
