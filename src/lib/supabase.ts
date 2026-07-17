import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  // Hanya log peringatan di console saat development, agar build tidak crash sebelum diset
  console.warn(
    'Peringatan: NEXT_PUBLIC_SUPABASE_URL atau NEXT_PUBLIC_SUPABASE_ANON_KEY belum didefinisikan di environment variables.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
