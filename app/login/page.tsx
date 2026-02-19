"use client"
export const dynamic = "force-dynamic"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getSupabaseClient } from "@/lib/supabase-client"

export default function LoginPage() {
  const router = useRouter()
  const supabase = getSupabaseClient()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage("Inloggen mislukt: " + error.message)
      setLoading(false)
      return
    }

    setMessage("Succesvol ingelogd")
    setLoading(false)

    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Inloggen</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mailadres"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Bezig..." : "Inloggen"}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 20 }}>
          {message}
        </p>
      )}
    </div>
  )
}