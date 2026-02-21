"use client"

import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ChoosePlan() {
  const router = useRouter()

  const handleSelectPlan = async (plan: string) => {
    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (!user) return

    // 🔥 HIER WORDT HET PLAN OPGESLAGEN
    await fetch("/api/set-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: user.id,
        plan
      })
    })

    router.push("/ai-agent")
  }

  return (
    <div>
      <h1>Kies je pakket</h1>

      <button onClick={() => handleSelectPlan("free")}>
        Free (15 credits)
      </button>

      <button onClick={() => handleSelectPlan("starter")}>
        Starter (150 credits)
      </button>

      <button onClick={() => handleSelectPlan("pro")}>
        Pro (Unlimited)
      </button>
    </div>
  )
}