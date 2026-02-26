"use client"
import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Register() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedPkg, setSelectedPkg] = useState('starter')

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.target)

    const base = process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    const redirectTo = base.startsWith('http') ? `${base}/login` : `https://${base}/login`

    const { error } = await supabase.auth.signUp({
      email: form.get("email") as string,
      password: form.get("password") as string,
      options: {
        emailRedirectTo: redirectTo
      }
    })

    setLoading(false)

    if (!error) {
      setSuccess(true)
    } else {
      alert(error.message)
    }
  }

  if (success) {
    return (
      <div className="successWrapper">
        <div className="successCard">
          <h1>🎉 Account aangemaakt — kies een pakket</h1>
          <p>Bedankt! Kies een pakket om direct met de AI-websitebuilder te starten.</p>

          <div className="packages" style={{marginTop:20}}>
            <label className="pkg">
              <input type="radio" name="pkg" value="starter" checked={selectedPkg==='starter'} onChange={()=>setSelectedPkg('starter')} /> Starter — €29/mnd
            </label>
            <label className="pkg">
              <input type="radio" name="pkg" value="pro" checked={selectedPkg==='pro'} onChange={()=>setSelectedPkg('pro')} /> Pro — €79/mnd
            </label>
            <label className="pkg">
              <input type="radio" name="pkg" value="enterprise" checked={selectedPkg==='enterprise'} onChange={()=>setSelectedPkg('enterprise')} /> Enterprise — Op maat
            </label>
          </div>

          <div style={{marginTop:18}}>
            <a href={`/builder?pkg=${selectedPkg}`} className="startBtn">Start AI Builder</a>
          </div>
        </div>

        <style jsx>{`
          .successWrapper { height:100vh; display:flex; justify-content:center; align-items:center; background: radial-gradient(circle,#1e1b4b,#0a0a0f 70%); color:white }
          .successCard { padding:40px; border-radius:20px; background:rgba(255,255,255,0.04); backdrop-filter: blur(12px); max-width:640px; text-align:center }
          .pkg{ display:block; margin:10px 0; font-size:16px }
          .startBtn{ display:inline-block; padding:12px 18px; border-radius:12px; background:linear-gradient(90deg,#7c3aed,#2563eb); color:white; font-weight:700; text-decoration:none }
        `}</style>
      </div>
    )
  }

  return (
    <div className="wrapper">

      <div className="backgroundLogo"></div>

      <div className="card">
        <h1>
          Word onderdeel van <span>Ignitely</span>
        </h1>

        <p>
          Bouw krachtige AI websites. Snel. Slim. Professioneel.
        </p>

        <form onSubmit={handleSubmit}>
          <input name="firstName" placeholder="Voornaam" required />
          <input name="lastName" placeholder="Achternaam" required />
          <input type="date" name="birthDate" required />
          <input name="address" placeholder="Adres" required />
          <input type="email" name="email" placeholder="E-mailadres" required />
          <input type="password" name="password" placeholder="Wachtwoord" required />

          <button disabled={loading}>
            {loading ? "Account wordt aangemaakt..." : "Account Aanmaken 🚀"}
          </button>
        </form>
      </div>

      <style jsx>{`

        .wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle,#1e1b4b,#0a0a0f 70%);
          position: relative;
          overflow: hidden;
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
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(25px);
          box-shadow: 0 0 40px rgba(124,58,237,0.3);
          color: white;
          position: relative;
        }

        h1 {
          text-align: center;
          font-size: 32px;
        }

        h1 span {
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          text-align: center;
          opacity: 0.7;
          margin: 15px 0 40px 0;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        input {
          padding: 14px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.08);
          color: white;
          transition: 0.3s;
        }

        input:focus {
          border: 1px solid #7c3aed;
          box-shadow: 0 0 15px rgba(124,58,237,0.6);
        }

        button {
          padding: 15px;
          border-radius: 16px;
          border: none;
          font-weight: 700;
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(124,58,237,0.8);
        }

      `}</style>
    </div>
  )
}