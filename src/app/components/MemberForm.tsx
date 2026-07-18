'use client';

import React from 'react';

export default function MemberForm() {
  return (
    <section id="gabung-grup" className="join-group-section section-padding">
      <div className="container">
        <div className="join-grid">
          
          {/* Left Details */}
          <div className="join-info">
            <div className="badge-premium gold-badge">
              <i className="fa-solid fa-users"></i> Bergabung dengan Komunitas
            </div>
            <h2>
              Gabung Grup <span className="accent">WhatsApp MINTA.PERGI</span>
            </h2>
            <p>
              Dapatkan akses langsung ke ratusan mitra driver yang siap melayani Anda kapan saja. Dengan masuk ke grup, Anda bisa memesan jasa antar jemput dan jastip dengan respon super cepat dari driver yang standby di sekitar kampus.
            </p>
            <div className="benefit-list">
              <div className="benefit-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Respon pemesanan kurang dari 5 menit</span>
              </div>
              <div className="benefit-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Komunitas aman karena sesama mahasiswa Tasikmalaya</span>
              </div>
              <div className="benefit-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Promo khusus member grup secara berkala</span>
              </div>
            </div>
          </div>

          {/* Right Registration Card */}
          <div className="join-form-card glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3>Pendaftaran Customer Baru</h3>
            <p>Silakan isi formulir pendaftaran customer resmi kami melalui Google Form untuk menikmati seluruh layanan MINTA.PERGI.</p>
            
            <div style={{ margin: '24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <i className="fa-solid fa-file-lines" style={{ color: 'var(--accent-gold)', width: '20px', textAlign: 'center' }}></i>
                <span>Isi data akademis (Nama, NIM, Prodi, Kampus)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-gold)', width: '20px', textAlign: 'center' }}></i>
                <span>Gratis pendaftaran tanpa biaya admin</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <i className="fa-solid fa-motorcycle" style={{ color: 'var(--accent-gold)', width: '20px', textAlign: 'center' }}></i>
                <span>Akses penuh layanan Antar Jemput & Jastip</span>
              </div>
            </div>

            <a 
              href="https://forms.gle/TKuWvMFkdztGsNt37" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold btn-block btn-lg"
              style={{ marginTop: '10px' }}
            >
              <i className="fa-solid fa-file-signature"></i> Isi Formulir Customer (Google Form)
            </a>
            
            <a 
              href="https://chat.whatsapp.com/GrupMintaPergiTasik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-block btn-lg"
              style={{ marginTop: '12px' }}
            >
              <i className="fa-brands fa-whatsapp"></i> Masuk Grup WhatsApp Resmi
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
