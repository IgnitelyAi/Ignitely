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

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.target)

    const { error } = await supabase.auth.signUp({
      email: form.get("email") as string,
      password: form.get("password") as string,
      options: {
        emailRedirectTo: "http://localhost:3000/login"
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
          <h1>🚀 Ignitely heeft je een verificatie email gestuurd</h1>
          <p>
            Controleer je inbox en bevestig je account om direct te starten met bouwen.
          </p>
          <div className="glow"></div>
        </div>

        <style jsx>{`
          .successWrapper {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle,#1e1b4b,#0a0a0f 70%);
            color: white;
            text-align: center;
          }

          .successCard {
            padding: 60px;
            border-radius: 30px;
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(20px);
            max-width: 600px;
            animation: fadeIn 0.8s ease;
          }

          h1 {
            font-size: 28px;
            margin-bottom: 20px;
          }

          p {
            opacity: 0.7;
          }

          @keyframes fadeIn {
            from {opacity:0; transform:translateY(20px)}
            to {opacity:1; transform:translateY(0)}
          }
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