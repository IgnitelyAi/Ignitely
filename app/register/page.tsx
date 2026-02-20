"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function RegisterPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedPackage, setSelectedPackage] = useState("free")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage("")

    // 1️⃣ Maak auth user aan
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setErrorMessage(error.message)
      setLoading(false)
      return
    }

    if (!data.user) {
      setErrorMessage("User creation failed")
      setLoading(false)
      return
    }

    // 2️⃣ Maak user profiel via server route
    const res = await fetch("/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: data.user.id,
        email: data.user.email,
        selectedPackage
      })
    })

    if (!res.ok) {
      setErrorMessage("Error creating user profile")
      setLoading(false)
      return
    }

    setLoading(false)
    router.push("/ai-agent")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          🚀 Create Your Ignitely Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
          >
            <option value="free">Free (15 credits)</option>
            <option value="starter">Starter (150 credits)</option>
            <option value="pro">Pro (Unlimited)</option>
          </select>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  )
}