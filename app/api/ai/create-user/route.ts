import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { userId, email } = await req.json()

    if (!userId || !email) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 })
    }

    // Check of profiel al bestaat
    const { data: existing } = await supabase
      .from("profiles")
      .select("id")
      .eq("id", userId)
      .single()

    if (existing) {
      return NextResponse.json({ message: "User already exists" })
    }

    // Nieuwe user aanmaken met 15 credits
    const { error } = await supabase.from("profiles").insert({
      id: userId,
      email,
      plan: "free",
      credits: 15,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: "User created with 15 credits" })
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}