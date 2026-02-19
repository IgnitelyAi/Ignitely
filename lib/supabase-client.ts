import { createClient } from "@supabase/supabase-js"

export function getSupabaseClient() {
  if (typeof window === "undefined") {
    throw new Error("Supabase client can only be used in the browser")
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

  return createClient(supabaseUrl, supabaseAnonKey)
}