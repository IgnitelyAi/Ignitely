"use client"

import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ChoosePlan() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (!data.user) router.push("/login")
      else setUser(data.user)
    }

    getUser()
  }, [])

  const selectPlan = async (plan: string) => {
    await fetch("/api/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        selectedPackage: plan,
      }),
    })

    router.push("/dashboard")
  }

  return (
    <div>
      <h1>Choose Your Plan</h1>

      <button onClick={() => selectPlan("free")}>
        Free (15 credits)
      </button>

      <button onClick={() => selectPlan("starter")}>
        Starter (150 credits)
      </button>

      <button onClick={() => selectPlan("pro")}>
        Pro (Unlimited)
      </button>
    </div>
  )
}