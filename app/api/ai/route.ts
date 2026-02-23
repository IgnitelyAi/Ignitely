import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: "No userId" }, { status: 400 })
    }

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("credits")
      .eq("id", userId)
      .single()

    if (error || !profile) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    if (profile.credits <= 0) {
      return NextResponse.json({ error: "No credits left" }, { status: 403 })
    }

    await supabase
      .from("profiles")
      .update({ credits: profile.credits - 1 })
      .eq("id", userId)

    return NextResponse.json({
      message: "1 credit used",
      creditsLeft: profile.credits - 1,
    })
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}