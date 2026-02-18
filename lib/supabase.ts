import { createClient } from "@supabase/supabase-js";

export function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables missing");
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}