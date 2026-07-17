# Panduan Deploy MINTA.PERGI ke Vercel & Supabase

Dokumentasi ini menjelaskan langkah demi langkah untuk mem-deploy aplikasi **MINTA.PERGI (Next.js & Supabase)** ke production secara gratis menggunakan **Vercel** dan **Supabase**.

---

## Langkah 1: Persiapan Akun & Database di Supabase

1. Buka [Supabase](https://supabase.com) dan masuk atau daftarkan akun baru secara gratis.
2. Klik tombol **New Project** di dashboard Supabase.
3. Masukkan rincian proyek:
   - **Name**: `MINTA.PERGI`
   - **Database Password**: Buat kata sandi yang kuat (simpan baik-baik).
   - **Region**: Pilih region terdekat (misalnya `Singapore` atau `Southeast Asia`).
   - **Pricing Plan**: Pilih **Free Plan**.
4. Klik **Create New Project** dan tunggu proses provisioning database selesai (sekitar 1-2 menit).
5. Setelah proyek siap, buka menu **SQL Editor** pada sidebar kiri (ikon lembaran kode SQL).
6. Klik **New Query** dan salin seluruh isi skema dari berkas **[schema.sql](schema.sql)**.
7. Tempel (*paste*) kode tersebut di editor, lalu klik tombol **Run** di kanan bawah.
8. Pastikan status eksekusi sukses. Tabel `members` dan `orders` kini telah terbuat di database PostgreSQL Anda.

---

## Langkah 2: Mengambil Kredensial API Supabase

1. Pada dashboard Supabase proyek Anda, klik ikon gerigi **Project Settings** di bagian bawah sidebar kiri.
2. Klik menu **API**.
3. Cari bagian **Project API Keys**:
   - Salin nilai **URL** (ini adalah URL API Supabase Anda).
   - Salin nilai **anon / public** key (ini adalah token anonim publik Anda).
4. Simpan kredensial ini untuk diatur pada Langkah 3 & 4.

---

## Langkah 3: Pengujian Lokal (Opsional)

Jika Anda ingin menjalankan aplikasi di komputer lokal:
1. Buat berkas baru bernama `.env.local` di folder akar proyek `minta-pergi-next`.
2. Salin isi dari `.env.local.example` dan masukkan kredensial yang Anda dapatkan dari Langkah 2:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key-here
   ```
3. Jalankan terminal di folder tersebut, lalu instal dependensi dan jalankan server pengembangan:
   ```bash
   npm install
   npm run dev
   ```
4. Buka `http://localhost:3000` di browser untuk menguji.

---

## Langkah 4: Publikasi ke GitHub

1. Buat sebuah repositori baru (bisa bersifat privat maupun publik) di akun [GitHub](https://github.com) Anda.
2. Lakukan inisialisasi Git di direktori proyek lokal `minta-pergi-next` dan lakukan push ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MINTA.PERGI Next.js & Supabase"
   git branch -M main
   git remote add origin https://github.com/username/nama-repo.git
   git push -u origin main
   ```
   *(Pastikan berkas `.env.local` tidak ikut terunggah dengan memastikan `.gitignore` mengecualikannya).*

---

## Langkah 5: Deploy Aplikasi ke Vercel

1. Buka [Vercel](https://vercel.com) dan buat akun/login menggunakan akun GitHub Anda.
2. Klik tombol **Add New...** lalu pilih **Project**.
3. Vercel akan menampilkan daftar repositori GitHub Anda. Klik tombol **Import** pada repositori `minta-pergi-next` Anda.
4. Di bagian **Configure Project**:
   - **Framework Preset**: Pilih **Next.js** (Vercel biasanya mendeteksi ini secara otomatis).
   - **Root Directory**: Biarkan `./` (atau sesuaikan jika berada di subfolder).
   - Buka bagian **Environment Variables** dan tambahkan dua variabel berikut dari Langkah 2:
     - **Key**: `NEXT_PUBLIC_SUPABASE_URL` | **Value**: *(Tempel URL API Supabase)*
     - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Value**: *(Tempel Anon Key Supabase)*
5. Klik tombol **Deploy** di bagian bawah.
6. Tunggu proses build selesai (sekitar 1-2 menit).
7. Selamat! Aplikasi web **MINTA.PERGI** Anda kini online dan memiliki domain publik (misalnya `minta-pergi.vercel.app`) yang siap diakses siapa saja.

---

## Cara Pembaruan di Masa Depan
Setelah di-deploy, setiap kali Anda melakukan perubahan kode di komputer lokal, Anda hanya perlu melakukan push perubahan tersebut ke GitHub:
```bash
git add .
git commit -m "update: perbaikan minor"
git push
```
Vercel akan mendeteksi commit baru di branch `main` Anda dan secara otomatis melakukan build ulang serta merilis pembaruan tersebut secara instan tanpa downtime!
