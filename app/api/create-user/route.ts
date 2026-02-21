import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request) {
  try {
    const { userId, selectedPackage } = await req.json()

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    let credits = 0
    let unlimited = false

    if (selectedPackage === "free") {
      credits = 15
    }

    if (selectedPackage === "starter") {
      credits = 150
    }

    if (selectedPackage === "pro") {
      unlimited = true
    }

    const { error } = await supabase.from("users").insert({
      id: userId,
      selected_package: selectedPackage,
      credits,
      is_unlimited: unlimited,
    })

    if (error) {
      console.error(error)
      return new Response(
        JSON.stringify({ error: "User insert failed" }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    )

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    )
  }
}