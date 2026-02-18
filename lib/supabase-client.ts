import { createClient } from "@supabase/supabase-js"

let supabase: ReturnType<typeof createClient> | null = null

export function getSupabase() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }

  return supabase
}