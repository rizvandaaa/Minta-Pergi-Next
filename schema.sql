-- ==========================================================================
-- DDL SCHEMA FOR MINTA.PERGI
-- Import berkas SQL ini ke SQL Editor di dashboard Supabase Anda.
-- ==========================================================================

-- 1. Tabel Registrasi Member (Mahasiswa)
CREATE TABLE IF NOT EXISTS public.members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    nim VARCHAR(50) UNIQUE NOT NULL,
    jurusan VARCHAR(100) NOT NULL,
    fakultas VARCHAR(100) NOT NULL,
    kampus VARCHAR(150) NOT NULL DEFAULT 'Universitas Siliwangi',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Indeks pencarian cepat untuk NIM
CREATE INDEX IF NOT EXISTS idx_members_nim ON public.members(nim);

-- 2. Tabel Log Pesanan (Order History)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    member_nim VARCHAR(50) REFERENCES public.members(nim) ON DELETE SET NULL,
    service_type VARCHAR(50) NOT NULL, -- 'antar-jemput' atau 'jastip'
    pickup_lat NUMERIC(9, 6) NOT NULL,
    pickup_lng NUMERIC(9, 6) NOT NULL,
    dest_lat NUMERIC(9, 6) NOT NULL,
    dest_lng NUMERIC(9, 6) NOT NULL,
    distance NUMERIC(5, 2) NOT NULL, -- Jarak estimasi dalam km
    jastip_duration INTEGER DEFAULT 0, -- Estimasi waktu tunggu jastip dalam menit
    total_fare NUMERIC(10, 2) NOT NULL, -- Total tarif dalam Rupiah
    status VARCHAR(50) DEFAULT 'pending' NOT NULL, -- 'pending', 'completed', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Indeks pencarian cepat untuk memantau data order berdasarkan NIM member
CREATE INDEX IF NOT EXISTS idx_orders_member_nim ON public.orders(member_nim);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at);

-- Komentar dokumentasi kolom
COMMENT ON COLUMN public.members.nim IS 'NIM Mahasiswa yang mendaftar. Harus unik.';
COMMENT ON COLUMN public.orders.service_type IS 'Jenis layanan: antar-jemput atau jastip.';
COMMENT ON COLUMN public.orders.distance IS 'Jarak rute perjalanan dalam kilometer.';
COMMENT ON COLUMN public.orders.jastip_duration IS 'Biaya kompensasi waktu tambahan untuk jasa titip (menit).';
COMMENT ON COLUMN public.orders.total_fare IS 'Total biaya perjalanan/jastip yang dibayarkan ke driver.';
