"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase-client"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Registratie gestart")

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    })

    console.log("DATA:", data)
    console.log("ERROR:", error)

    if (error) {
      setMessage("Er is een fout opgetreden: " + error.message)
      return
    }

    setMessage(
      "Registratie succesvol! Controleer je e-mail om je account te bevestigen."
    )

    setTimeout(() => {
      router.push("/login")
    }, 3000)
  }

  return (
    <div style={{ padding: "40px" }}>
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

        <button type="submit">Account aanmaken</button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", color: "white" }}>
          {message}
        </p>
      )}
    </div>
  )
}