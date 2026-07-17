'use client';

import React, { useState, useEffect } from 'react';
import { registerMemberAction } from '@/app/actions';

export default function MemberForm() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [fakultas, setFakultas] = useState('');
  const [kampus, setKampus] = useState('Universitas Siliwangi');
  const [isRegistered, setIsRegistered] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('minta_pergi_name');
    const savedNim = localStorage.getItem('minta_pergi_nim');
    const savedJurusan = localStorage.getItem('minta_pergi_jurusan');
    const savedFakultas = localStorage.getItem('minta_pergi_fakultas');
    const savedKampus = localStorage.getItem('minta_pergi_kampus');

    if (savedName && savedNim) {
      setName(savedName);
      setNim(savedNim);
      setJurusan(savedJurusan || '');
      setFakultas(savedFakultas || '');
      setKampus(savedKampus || 'Universitas Siliwangi');
      setIsRegistered(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const result = await registerMemberAction({
      name,
      nim,
      jurusan,
      fakultas,
      kampus,
    });

    setIsSubmitting(false);

    if (result.success) {
      // Save details to LocalStorage
      localStorage.setItem('minta_pergi_name', name);
      localStorage.setItem('minta_pergi_nim', nim);
      localStorage.setItem('minta_pergi_jurusan', jurusan);
      localStorage.setItem('minta_pergi_fakultas', fakultas);
      localStorage.setItem('minta_pergi_kampus', kampus);
      setIsRegistered(true);

      setStatusMessage({
        type: 'success',
        text: 'Pendaftaran member berhasil disimpan ke database Supabase! Mengalihkan ke WhatsApp Group...',
      });

      // Redirect to WhatsApp Group link after a short delay
      setTimeout(() => {
        window.open('https://chat.whatsapp.com/GrupMintaPergiTasik', '_blank');
      }, 1500);
    } else {
      setStatusMessage({
        type: 'error',
        text: `Error: ${result.error || 'Gagal menyimpan ke database.'}`,
      });
    }
  };

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

          {/* Right Registration Form */}
          <div className="join-form-card glass-panel">
            <h3>{isRegistered ? 'Update Data Member' : 'Registrasi Member Baru'}</h3>
            <p>Silakan isi data akademis Anda untuk mendapatkan akses ke grup WhatsApp kami.</p>

            {statusMessage && (
              <div
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  marginBottom: '16px',
                  fontSize: '0.85rem',
                  backgroundColor: statusMessage.type === 'success' ? 'rgba(46, 204, 113, 0.15)' : 'rgba(231, 76, 60, 0.15)',
                  border: statusMessage.type === 'success' ? '1px solid #2ecc71' : '1px solid #e74c3c',
                  color: statusMessage.type === 'success' ? '#2ecc71' : '#e74c3c',
                }}
              >
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="member-name">
                    <i className="fa-solid fa-user"></i> Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="member-name"
                    required
                    placeholder="Contoh: Muhammad Rafli"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="member-nim">
                    <i className="fa-solid fa-id-card"></i> NIM
                  </label>
                  <input
                    type="text"
                    id="member-nim"
                    required
                    placeholder="Contoh: 217006001"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="member-jurusan">
                    <i className="fa-solid fa-book"></i> Jurusan / Prodi
                  </label>
                  <input
                    type="text"
                    id="member-jurusan"
                    required
                    placeholder="Contoh: Informatika"
                    value={jurusan}
                    onChange={(e) => setJurusan(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="member-fakultas">
                    <i className="fa-solid fa-building"></i> Fakultas
                  </label>
                  <input
                    type="text"
                    id="member-fakultas"
                    required
                    placeholder="Contoh: Teknik"
                    value={fakultas}
                    onChange={(e) => setFakultas(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="member-kampus">
                  <i className="fa-solid fa-school"></i> Nama Kampus
                </label>
                <input
                  type="text"
                  id="member-kampus"
                  required
                  placeholder="Contoh: Universitas Siliwangi"
                  value={kampus}
                  onChange={(e) => setKampus(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-gold btn-block btn-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Menyimpan...
                  </>
                ) : isRegistered ? (
                  <>
                    Update Data & Masuk Grup <i className="fa-solid fa-arrows-rotate"></i>
                  </>
                ) : (
                  <>
                    Daftar & Masuk Grup <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
