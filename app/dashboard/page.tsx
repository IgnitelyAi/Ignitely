"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [credits, setCredits] = useState<number | null>(null)
  const [packageName, setPackageName] = useState("")
  const [isUnlimited, setIsUnlimited] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUserData = async () => {
      const { data: authData } = await supabase.auth.getUser()

      if (!authData.user) {
        router.push("/login")
        return
      }

      setUser(authData.user)

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", authData.user.id)
        .single()

      if (error || !data) {
        router.push("/choose-plan")
        return
      }

      setCredits(data.credits)
      setPackageName(data.selected_package)
      setIsUnlimited(data.is_unlimited)
      setLoading(false)
    }

    loadUserData()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Email: {user?.email}</p>
      <p>Package: {packageName}</p>

      {isUnlimited ? (
        <p>Credits: Unlimited 🚀</p>
      ) : (
        <p>Credits: {credits}</p>
      )}
    </div>
  )
}