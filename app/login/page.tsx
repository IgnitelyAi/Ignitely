"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createBrowserClient } from "@supabase/ssr"

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="wrapper">
      <div className="backgroundLogo" />

      <div className="card">
        <h1>
          Welkom terug bij <span>Ignitely</span>
        </h1>

        <p>Log in om verder te gaan met je websiteproject.</p>

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="E-mailadres" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" name="password" placeholder="Wachtwoord" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button disabled={loading}>{loading ? "Inloggen..." : "Inloggen"}</button>
        </form>

        <div style={{marginTop:16, textAlign:'center', color:'rgba(255,255,255,0.75)'}}>
          Nog geen account? <a href="/register" className="text-blue-300">Maak er één aan</a>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle,#1e1b4b,#0a0a0f 70%);
          position: relative;
        }

        .backgroundLogo {
          position: fixed;
          inset: 0;
          background: url('/logo.png') center no-repeat;
          background-size: 900px;
          opacity: 0.04;
        }

        .card {
          width: 100%;
          max-width: 520px;
          padding: 60px;
          border-radius: 30px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          color: white;
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
        }

        h1 { text-align:center; font-size:28px }
        h1 span { background: linear-gradient(90deg,#7c3aed,#2563eb); -webkit-background-clip:text; -webkit-text-fill-color:transparent }
        p { text-align:center; opacity:0.8; margin-bottom:24px }

        form { display:flex; flex-direction:column; gap:14px }
        input { padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color:white }
        input:focus { outline:none; box-shadow:0 6px 20px rgba(37,99,235,0.12) }

        button { padding:14px; border-radius:12px; border:none; font-weight:700; background:linear-gradient(90deg,#7c3aed,#2563eb); color:white; cursor:pointer }
        button:disabled { opacity:0.7 }
      `}</style>
    </div>
  )
}