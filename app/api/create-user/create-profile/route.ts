import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      userId,
      email,
      firstName,
      lastName,
      phone,
      birthDate,
      address,
      postalCode,
      city,
      country,
    } = body

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase.from("profiles").insert({
      id: userId,
      email,
      first_name: firstName,
      last_name: lastName,
      phone,
      birth_date: birthDate,
      address,
      postal_code: postalCode,
      city,
      country,
    })

    if (error) {
      console.error(error)
      return new Response(
        JSON.stringify({ error: "Profile insert failed" }),
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