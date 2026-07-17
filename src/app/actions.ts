'use server';

import { supabase } from '@/lib/supabase';

// Interface Data Member
export interface MemberInput {
  name: string;
  nim: string;
  jurusan: string;
  fakultas: string;
  kampus: string;
}

// Interface Data Order
export interface OrderInput {
  member_nim: string;
  service_type: 'antar-jemput' | 'jastip';
  pickup_lat: number;
  pickup_lng: number;
  dest_lat: number;
  dest_lng: number;
  distance: number;
  jastip_duration?: number;
  total_fare: number;
}

/**
 * Server Action: Mendaftarkan member mahasiswa baru ke Supabase PostgreSQL
 */
export async function registerMemberAction(data: MemberInput) {
  try {
    if (!data.name || !data.nim || !data.jurusan || !data.fakultas || !data.kampus) {
      return { success: false, error: 'Semua kolom form pendaftaran wajib diisi.' };
    }

    // Melakukan insertion / upsert jika NIM sudah terdaftar (agar mahasiswa bisa memperbarui jurusannya)
    const { error } = await supabase
      .from('members')
      .upsert(
        {
          name: data.name,
          nim: data.nim,
          jurusan: data.jurusan,
          fakultas: data.fakultas,
          kampus: data.kampus,
        },
        { onConflict: 'nim' }
      );

    if (error) {
      console.error('Supabase Error (upsert member):', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Server Action Error (registerMemberAction):', err);
    return { success: false, error: err.message || 'Terjadi kesalahan sistem.' };
  }
}

/**
 * Server Action: Menyimpan log pesanan layanan ke database Supabase
 */
export async function createOrderAction(data: OrderInput) {
  try {
    const { error } = await supabase
      .from('orders')
      .insert({
        member_nim: data.member_nim || null, // Hubungkan ke member jika ada
        service_type: data.service_type,
        pickup_lat: data.pickup_lat,
        pickup_lng: data.pickup_lng,
        dest_lat: data.dest_lat,
        dest_lng: data.dest_lng,
        distance: data.distance,
        jastip_duration: data.jastip_duration || 0,
        total_fare: data.total_fare,
        status: 'pending',
      });

    if (error) {
      console.error('Supabase Error (insert order):', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Server Action Error (createOrderAction):', err);
    return { success: false, error: err.message || 'Terjadi kesalahan saat mencatat pesanan.' };
  }
}
