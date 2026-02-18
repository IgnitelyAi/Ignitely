import { createClient } from "@supabase/supabase-js"

export function getSupabase() {
  if (typeof window === "undefined") {
    throw new Error("Supabase mag alleen in de browser gebruikt worden.")
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  return createClient(supabaseUrl, supabaseAnonKey)
}