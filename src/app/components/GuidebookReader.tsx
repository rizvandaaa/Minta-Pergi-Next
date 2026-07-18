'use client';

import React, { useState } from 'react';

export default function GuidebookReader() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            <p>Isi formulir pendaftaran customer di Google Form resmi kami.</p>
          </div>
          <div className="step-card glass-panel">
            <div className="step-number">2</div>
            <h4>Masuk Grup</h4>
            <p>Setelah mendaftar, Anda akan diarahkan untuk masuk ke Grup WhatsApp resmi MINTA.PERGI.</p>
          </div>
          <div className="step-card glass-panel">
            <div className="step-number">3</div>
            <h4>Baca Booklet</h4>
            <p>Buka booklet resmi di bawah ini untuk memahami tata cara order & aturan keselamatan.</p>
          </div>
          <div className="step-card glass-panel">
            <div className="step-number">4</div>
            <h4>Order Layanan</h4>
            <p>Kirim detail pesanan Anda (Anjem/Jastip) langsung ke grup WhatsApp driver.</p>
          </div>
        </div>
        
        {/* Interactive Booklet Reader */}
        <div className="guidebook-container glass-panel" style={{ padding: '36px', maxWidth: '800px', margin: '50px auto 0' }}>
          <div className="guidebook-header" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '24px' }}>
            <h3><i className="fa-solid fa-book-open" style={{ color: 'var(--accent-gold)' }}></i> Booklet Resmi MINTA.PERGI</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Halaman {currentPage} dari {totalPages}
            </span>
          </div>
          
          {/* Booklet Pages Content */}
          <div className="booklet-pages-content" style={{ minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            {/* Page 1: Cover */}
            {currentPage === 1 && (
              <div className="booklet-page animate-fadeIn text-center" style={{ textAlign: 'center', padding: '20px 0' }}>
                <h4 style={{ fontSize: '1.2rem', letterSpacing: '3px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Jasa Layanan
                </h4>
                <h2 style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-light)', marginBottom: '30px', letterSpacing: '1px' }}>
                  MINTA.<span className="accent">PERGI</span>
                </h2>
                
                <div style={{ maxWidth: '280px', margin: '0 auto 30px', border: '2px solid var(--accent-gold)', borderRadius: '12px', padding: '16px', backgroundColor: 'rgba(212, 175, 55, 0.05)', boxShadow: 'var(--gold-glow)' }}>
                  <img src="/assets/logo.png" alt="Minta.Pergi Logo" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </div>
                
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--accent-gold)', marginBottom: '16px' }}>
                  ANTAR - JEMPUT
                </h3>
                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-light)', fontWeight: 500 }}>
                  "MAGER? KAMI YANG JALAN."
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0' }}>
                  Layanan antar jemput dan jasa titip khusus mahasiswa di UNSIL Tasikmalaya dan sekitarnya.
                </p>
              </div>
            )}

            {/* Page 2: Layanan */}
            {currentPage === 2 && (
              <div className="booklet-page animate-fadeIn">
                <h3 className="accent" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  LAYANAN MINTA.PERGI
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.7' }}>
                  <strong>MalesPergi</strong> adalah layanan berbasis mahasiswa yang membantu berbagai kebutuhan sehari-hari mahasiswa, mulai dari antar jemput, jasa titip makanan, pengambilan barang, hingga kebutuhan mendadak lainnya.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Layanan ini dijalankan oleh mahasiswa dan ditujukan khusus untuk mahasiswa sehingga lebih dekat, terjangkau, dan sesuai dengan kebutuhan kampus.
                </p>
                
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '14px' }}>
                  Apa Saja Yang Bisa Dibantu?
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem' }}>🚗</span>
                    <div>
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-gold)' }}>Antar Jemput</h5>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ke kampus, kos, tempat makan, atau lokasi lainnya.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem' }}>🍔</span>
                    <div>
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-gold)' }}>Jasa Titip Makanan & Minuman</h5>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Titip beli makanan saat sibuk, hujan, atau sedang tidak bisa keluar.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem' }}>📦</span>
                    <div>
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-gold)' }}>Pengambilan Barang</h5>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Paket, dokumen, atau barang lainnya.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem' }}>🛒</span>
                    <div>
                      <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-gold)' }}>Titip Belanja</h5>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kebutuhan sehari-hari, alat tulis, obat, dan lain-lain.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page 3: Sasaran & Keunggulan */}
            {currentPage === 3 && (
              <div className="booklet-page animate-fadeIn">
                <h3 className="accent" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  SIAPA YANG BISA MENGGUNAKAN?
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '30px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '10px' }}>
                      <i className="fa-solid fa-graduation-cap"></i> Customer
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      Seluruh mahasiswa aktif di:
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: 'var(--text-light)', paddingLeft: '16px', marginTop: '6px' }}>
                      <li>UNSIL (Universitas Siliwangi)</li>
                      <li>UNPER (Universitas Perjuangan)</li>
                      <li>Poltekkes Tasikmalaya</li>
                      <li>Kampus lain yang nantinya bergabung</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '10px' }}>
                      <i className="fa-solid fa-id-card"></i> Mitra Driver
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                      Mahasiswa aktif yang:
                    </p>
                    <ul style={{ fontSize: '0.85rem', color: 'var(--text-light)', paddingLeft: '16px', marginTop: '6px' }}>
                      <li>Memiliki KTM aktif</li>
                      <li>Memiliki kendaraan pribadi</li>
                      <li>Bersedia menerima pesanan dengan baik</li>
                    </ul>
                  </div>
                </div>
                
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '12px' }}>
                  Kenapa Harus MalesPergi?
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent-gold)' }}></i>
                    <span><strong>Aman:</strong> Mahasiswa melayani mahasiswa.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <i className="fa-solid fa-hand-holding-dollar" style={{ color: 'var(--accent-gold)' }}></i>
                    <span><strong>Terjangkau:</strong> Tarif ramah kantong mahasiswa.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <i className="fa-solid fa-bolt" style={{ color: 'var(--accent-gold)' }}></i>
                    <span><strong>Praktis:</strong> Tidak perlu keluar dari kos/aktivitas.</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <i className="fa-solid fa-clock" style={{ color: 'var(--accent-gold)' }}></i>
                    <span><strong>Fleksibel:</strong> Digunakan untuk berbagai kebutuhan.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Page 4: Tarif */}
            {currentPage === 4 && (
              <div className="booklet-page animate-fadeIn">
                <h3 className="accent" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  TARIF LAYANAN
                </h3>
                
                <div style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.95) 100%)', border: '1.5px solid var(--accent-gold)', borderRadius: '12px', padding: '24px', textAlign: 'center', marginBottom: '24px', boxShadow: 'var(--gold-glow)' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '16px', fontWeight: 600 }}>
                    Estimasi Rincian Tarif
                  </h4>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Area Kampus (Radius Dekat)</span>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>Rp 5.000 – Rp 7.000</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Di Luar Area Kampus</span>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>+ Rp 2.000 / km</span>
                  </div>
                  
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '16px', fontStyle: 'italic' }}>
                    * Tarif dapat disesuaikan kembali berdasarkan jenis layanan dan jarak tempuh sebenarnya.
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', padding: '14px', borderRadius: '8px' }}>
                  <i className="fa-solid fa-circle-info" style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}></i>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-gold)', margin: 0 }}>
                    Tarif dasar kami sangat murah karena dihitung langsung dari mahasiswa untuk mahasiswa, tanpa adanya potongan komisi besar seperti ojek online komersial.
                  </p>
                </div>
              </div>
            )}

            {/* Page 5: Cara Kerja */}
            {currentPage === 5 && (
              <div className="booklet-page animate-fadeIn">
                <h3 className="accent" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  CARA KERJA (ALUR ORDER)
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', flexShrink: 0 }}>1</div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-light)' }}>Customer Mengirim Permintaan</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Customer dapat langsung mengirimkan kebutuhan pesanannya di grup WhatsApp Resmi.</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontStyle: 'italic', marginTop: '4px' }}>
                        Contoh: "Jastip Mixue ke Fakultas Pertanian" atau "Butuh antar dari Kos XYZ ke UNSIL jam 13.00."
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', flexShrink: 0 }}>2</div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-light)' }}>Mitra Driver Melihat Permintaan</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Seluruh driver aktif yang siaga di sekitar wilayah kampus akan memonitor pesan masuk secara real-time.</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', flexShrink: 0 }}>3</div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-light)' }}>Konfirmasi Driver Secara Pribadi (PC)</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Driver terdekat yang siap akan langsung menghubungi (private chat) nomor customer untuk konfirmasi pesanan, titik temu, tarif, dan jam penjemputan.</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', flexShrink: 0 }}>4</div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-light)' }}>Pelaksanaan & Pembayaran</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Driver menyelesaikan perjalanan/titipan. Pembayaran dibayarkan tunai atau transfer e-wallet (Dana/Gopay/ShopeePay) ke driver bersangkutan.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page 6: Mitra Opportunity */}
            {currentPage === 6 && (
              <div className="booklet-page animate-fadeIn">
                <h3 className="accent" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                  KESEMPATAN MENJADI MITRA
                </h3>
                
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '10px' }}>
                  Keuntungan Bergabung:
                </h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <i className="fa-solid fa-check" style={{ color: 'green' }}></i>
                    <span>Menambah uang saku kuliah</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <i className="fa-solid fa-check" style={{ color: 'green' }}></i>
                    <span>Jam kerja 100% fleksibel</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <i className="fa-solid fa-check" style={{ color: 'green' }}></i>
                    <span>Atur orderan sendiri</span>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <i className="fa-solid fa-check" style={{ color: 'green' }}></i>
                    <span>Membantu sesama mahasiswa</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--border-color)', borderRadius: '8px', padding: '14px', marginBottom: '16px' }}>
                  <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '4px' }}>
                    Status Platform:
                  </h5>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Saat ini Minta.Pergi (MalesPergi) masih berada di tahap pengembangan awal. Kritik, saran, masukan dari calon pengguna dan calon mitra sangat berharga bagi kami.
                  </p>
                </div>
                
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                  <p>
                    <strong>Hubungi Admin via Chat:</strong>
                  </p>
                  <a 
                    href="https://wa.me/6281312292782" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 700, marginTop: '4px', fontSize: '0.95rem' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i> 081312292782 (Rizvanda Akbar M.)
                  </a>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
              <button 
                className="btn btn-outline btn-sm" 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
                style={{ opacity: currentPage === 1 ? 0.4 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
              >
                <i className="fa-solid fa-chevron-left"></i> Sebelumnya
              </button>
              
              <a 
                href="/booklet.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold btn-sm" 
                style={{ fontSize: '0.8rem', padding: '8px 14px' }}
              >
                <i className="fa-solid fa-download"></i> Unduh PDF
              </a>
              
              <button 
                className="btn btn-outline btn-sm" 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
                style={{ opacity: currentPage === totalPages ? 0.4 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
              >
                Selanjutnya <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
