import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY as string;

// console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Key:', supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Key is missing');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
