"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div className="wrapper">

      {/* HEADER */}
      <header className="header">
        <div className="container">

          {/* ECHTE LOGO LINKS */}
          <div className="logo">
            <img src="/logo.png" alt="Ignitely logo" />
          </div>

          {/* NAVIGATIE RECHTS */}
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pakketten</Link>
            <Link href="/about">Over Ons</Link>
            <Link href="/login">Inloggen</Link>
            <Link href="/register" className="cta">Gratis Starten</Link>
          </nav>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">

        <h1>
          Bouw de Toekomst met <span>AI Websites</span>
        </h1>

        <p>
          Professionele websites in minuten. Slim. Snel. Volledig geautomatiseerd.
        </p>

        <div className="buttons">
          <Link href="/pricing" className="primary">
            Bekijk Pakketten
          </Link>

          <Link href="/register" className="secondary">
            Start Gratis
          </Link>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature">
          <h3>⚡ AI Generatie</h3>
          <p>Websites gebouwd in minuten met intelligente automatisering.</p>
        </div>

        <div className="feature">
          <h3>🔒 Veilig & Schaalbaar</h3>
          <p>Snelle infrastructuur, beveiligd en klaar voor groei.</p>
        </div>

        <div className="feature">
          <h3>🚀 Klaar voor Groei</h3>
          <p>Van idee naar professioneel platform zonder technische kennis.</p>
        </div>

      </section>

      <style jsx>{`

        /* ===== BASIS ===== */

        .wrapper {
          min-height: 100vh;
          background: radial-gradient(circle at top, #1e1b4b, #0a0a0f 60%);
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          color: white;
          overflow-x: hidden;
          position: relative;
        }

        /* SUBTIELE LOGO ACHTERGROND */
        .wrapper::before {
          content: "";
          position: fixed;
          inset: 0;
          background: url('/logo.png') center center no-repeat;
          background-size: 800px;
          opacity: 0.05;
          pointer-events: none;
          z-index: 0;
        }

        /* ===== HEADER ===== */

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(10,10,15,0.85);
          backdrop-filter: blur(12px);
          z-index: 1000;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo img {
          height: 42px;
          display: block;
        }

        .nav {
          display: flex;
          gap: 28px;
          align-items: center;
          flex-wrap: nowrap;
        }

        .nav a {
          text-decoration: none;
          color: white;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0.85;
          transition: 0.3s;
        }

        .nav a:hover {
          opacity: 1;
        }

        .cta {
          padding: 10px 22px;
          border-radius: 14px;
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          font-weight: 600;
        }

        /* ===== HERO ===== */

        .hero {
          padding-top: 200px;
          text-align: center;
          position: relative;
          z-index: 2;
          padding-left: 20px;
          padding-right: 20px;
        }

        .hero h1 {
          font-size: 64px;
          font-weight: 900;
          line-height: 1.1;
        }

        .hero span {
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          margin-top: 20px;
          font-size: 18px;
          opacity: 0.8;
        }

        .buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .primary {
          padding: 14px 36px;
          border-radius: 14px;
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          text-decoration: none;
          color: white;
          font-weight: 700;
          transition: 0.3s;
        }

        .primary:hover {
          transform: translateY(-3px);
        }

        .secondary {
          padding: 14px 36px;
          border-radius: 14px;
          background: white;
          color: black;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .secondary:hover {
          transform: translateY(-3px);
        }

        /* ===== FEATURES ===== */

        .features {
          margin-top: 140px;
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 0 40px 120px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .feature {
          width: 300px;
          padding: 30px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }

        .feature:hover {
          transform: translateY(-6px);
        }

        .feature h3 {
          margin-bottom: 12px;
          font-size: 18px;
        }

        .feature p {
          font-size: 14px;
          opacity: 0.8;
        }

        /* ===== RESPONSIVE ===== */

        @media(max-width: 900px) {

          .container {
            padding: 15px 20px;
          }

          .nav {
            gap: 15px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .features {
            margin-top: 80px;
          }
        }

      `}</style>
    </div>
  )
}