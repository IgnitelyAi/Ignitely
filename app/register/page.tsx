"use client"
export const dynamic = "force-dynamic"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getSupabaseClient } from "@/lib/supabase-client"

export default function RegisterPage() {
  const router = useRouter()
  const supabase = getSupabaseClient()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    if (error) {
      setMessage("Registratie mislukt: " + error.message)
      setLoading(false)
      return
    }

    setMessage("Account succesvol aangemaakt. Controleer uw e-mail.")
    setLoading(false)

    setTimeout(() => {
      router.push("/login")
    }, 2000)
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Account aanmaken</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Voornaam"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Achternaam"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br /><br />

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
          {loading ? "Bezig..." : "Account aanmaken"}
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