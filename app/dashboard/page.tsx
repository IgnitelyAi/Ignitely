"use client"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="wrapper">

      <div className="backgroundLogo"></div>

      <section className="hero">
        <h1>
          Kies jouw <span>Pakket</span>
        </h1>
        <p>Upgrade je kracht. Bouw slimmer. Groei sneller.</p>
      </section>

      <section className="pricing">

        {/* FREE */}
        <div className="card free">
          <h2>Free</h2>
          <h3>€0</h3>
          <p className="credits">15 Credits</p>

          <ul>
            <li>✔ 1 simpele landingspagina</li>
            <li>✔ Basis AI model</li>
            <li>✔ Standaard snelheid</li>
            <li className="no">✖ Geen custom domein</li>
            <li className="no">✖ Geen premium design</li>
          </ul>

          <button className="btn light">Start Gratis</button>
        </div>

        {/* STARTER */}
        <div className="card starter">
          <h2>Starter</h2>
          <h3>€29 / maand</h3>
          <p className="credits">150 Credits</p>

          <ul>
            <li>✔ 1 website (max 3 pagina’s)</li>
            <li>✔ Professioneel design</li>
            <li>✔ Snellere generatie</li>
            <li>✔ E-mail support</li>
            <li className="no">✖ Geen custom domein</li>
          </ul>

          <button className="btn dark">Upgrade naar Starter</button>
        </div>

        {/* PRO */}
        <div className="card pro">
          <div className="badge">MEEST GEKOZEN</div>

          <h2>Pro</h2>
          <h3>€79 / maand</h3>
          <p className="credits">500 Credits</p>

          <ul>
            <li>✔ Onbeperkte pagina’s</li>
            <li>✔ Custom domein</li>
            <li>✔ Premium templates</li>
            <li>✔ Live AI chat</li>
            <li>✔ Priority generatie</li>
            <li>✔ Dedicated support</li>
          </ul>

          <button className="btn glow">Ga Pro 🚀</button>
        </div>

      </section>

      <style jsx>{`

        .wrapper {
          min-height: 100vh;
          background: radial-gradient(circle at top,#1e1b4b,#0a0a0f 70%);
          color: white;
          font-family: -apple-system,BlinkMacSystemFont,sans-serif;
          position: relative;
          overflow: hidden;
          padding: 100px 20px;
        }

        .backgroundLogo {
          position: fixed;
          inset: 0;
          background: url('/logo.png') center center no-repeat;
          background-size: 900px;
          opacity: 0.04;
          pointer-events: none;
        }

        .hero {
          text-align: center;
          margin-bottom: 80px;
        }

        .hero h1 {
          font-size: 52px;
          font-weight: 900;
        }

        .hero span {
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          opacity: 0.7;
          margin-top: 15px;
        }

        .pricing {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .card {
          width: 320px;
          padding: 40px;
          border-radius: 24px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(15px);
          transition: 0.4s ease;
          position: relative;
        }

        .card:hover {
          transform: translateY(-12px) scale(1.03);
        }

        .card h2 {
          font-size: 24px;
        }

        .card h3 {
          font-size: 28px;
          margin: 10px 0;
        }

        .credits {
          opacity: 0.7;
          margin-bottom: 20px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        li {
          margin-bottom: 10px;
          font-size: 14px;
        }

        .no {
          opacity: 0.4;
        }

        .btn {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
        }

        .light {
          background: white;
          color: black;
        }

        .dark {
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          color: white;
        }

        .glow {
          background: linear-gradient(90deg,#9333ea,#2563eb);
          color: white;
          box-shadow: 0 0 25px rgba(124,58,237,0.6);
        }

        .glow:hover {
          box-shadow: 0 0 40px rgba(124,58,237,1);
        }

        .badge {
          position: absolute;
          top: -15px;
          right: -15px;
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          padding: 6px 16px;
          font-size: 12px;
          border-radius: 20px;
          font-weight: 600;
        }

        .pro {
          border: 1px solid rgba(124,58,237,0.6);
        }

      `}</style>

    </div>
  )
}