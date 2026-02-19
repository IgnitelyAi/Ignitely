"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase-client"

export default function RegisterPage() {
  const router = useRouter()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!supabase) {
      setMessage("Supabase niet beschikbaar")
      return
    }

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
      setMessage(error.message)
      setLoading(false)
      return
    }

    // 🔥 DIRECT NAAR PAKKETTEN
    router.push("/packages")
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Account aanmaken</h1>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Voornaam"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br /><br />

        <input
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

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  )
}