"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function RegisterPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthDate: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // 1️⃣ Create auth user
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    const user = data.user
    if (!user) {
      setError("User creation failed")
      setLoading(false)
      return
    }

    // 2️⃣ Save profile
    const profileRes = await fetch("/api/create-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        birthDate: form.birthDate,
        address: form.address,
        postalCode: form.postalCode,
        city: form.city,
        country: form.country,
      }),
    })

    if (!profileRes.ok) {
      setError("Error saving profile")
      setLoading(false)
      return
    }

    // 3️⃣ Go to choose plan
    router.push("/choose-plan")
  }

  return (
    <div>
      <h1>Create Your IgniteIy Account</h1>

      <form onSubmit={handleRegister}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="birthDate" type="date" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="postalCode" placeholder="Postal Code" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />
        <input name="country" placeholder="Country" onChange={handleChange} required />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  )
}