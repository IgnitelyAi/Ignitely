import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  const { userId, email, selectedPackage } = await req.json()

  let startCredits = 0
  let unlimited = false

  if (selectedPackage === "free") startCredits = 15
  if (selectedPackage === "starter") startCredits = 150
  if (selectedPackage === "pro") unlimited = true

  const { error } = await supabase.from("users").insert({
    id: userId,
    email,
    selected_package: selectedPackage,
    credits: startCredits,
    is_unlimited: unlimited
  })

  if (error) {
    console.error(error)
    return new Response("Insert failed", { status: 400 })
  }

  return new Response("User created", { status: 200 })
}