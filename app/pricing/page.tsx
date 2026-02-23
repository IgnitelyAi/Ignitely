"use client"

export default function Pricing() {
  return (
    <div className="wrapper">

      <section className="hero">
        <h1>Bouw Slimmer. Groei Sneller.</h1>
        <p>Kies het pakket dat past bij jouw ambitie.</p>
      </section>

      <section className="pricing">

        {/* FREE */}
        <div className="card free">
          <h3>Free</h3>
          <div className="price">€0</div>
          <p className="credits">15 Credits</p>

          <ul>
            <li>✓ 1 simpele landingspagina</li>
            <li>✓ Basis AI model</li>
            <li>✓ Standaard snelheid</li>
            <li className="no">✗ Geen custom domein</li>
          </ul>

          <button>Start Gratis</button>
        </div>

        {/* STARTER */}
        <div className="card starter">
          <h3>Starter</h3>
          <div className="price">€29<span>/maand</span></div>
          <p className="credits">150 Credits</p>

          <ul>
            <li>✓ Website (max 3 pagina’s)</li>
            <li>✓ Professioneel design</li>
            <li>✓ AI revisies</li>
            <li>✓ Snellere generatie</li>
            <li className="no">✗ Geen custom domein</li>
          </ul>

          <button className="primary">Upgrade naar Starter</button>
        </div>

        {/* PRO */}
        <div className="card pro">
          <h3>Pro</h3>
          <div className="price">€79<span>/maand</span></div>
          <p className="credits">500 Credits</p>

          <ul>
            <li>✓ Onbeperkte pagina’s</li>
            <li>✓ Custom domein</li>
            <li>✓ Premium templates</li>
            <li>✓ Prioriteit generatie</li>
            <li>✓ Dedicated support</li>
          </ul>

          <button className="probtn">Ga Pro</button>
        </div>

      </section>

      <style jsx>{`

        .wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          background: radial-gradient(circle at top, #1e1b4b, #0a0a0f 60%);
          color: white;
          padding: 100px 20px;
        }

        .hero {
          text-align: center;
          margin-bottom: 80px;
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 800;
        }

        .hero p {
          margin-top: 10px;
          opacity: 0.7;
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
          backdrop-filter: blur(15px);
          background: rgba(255,255,255,0.05);
          transition: 0.4s ease;
          animation: float 6s ease-in-out infinite;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .card h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .price {
          font-size: 32px;
          font-weight: 800;
        }

        .price span {
          font-size: 14px;
          opacity: 0.7;
        }

        .credits {
          margin-bottom: 20px;
          opacity: 0.8;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        li {
          margin-bottom: 10px;
          font-size: 14px;
        }

        .no {
          opacity: 0.5;
        }

        button {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        .primary {
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          color: white;
        }

        .pro {
          background: linear-gradient(180deg,rgba(124,58,237,0.25),rgba(37,99,235,0.25));
          border: 1px solid rgba(124,58,237,0.5);
          box-shadow: 0 0 30px rgba(124,58,237,0.4);
        }

        .probtn {
          background: linear-gradient(90deg,#7c3aed,#2563eb);
          color: white;
          box-shadow: 0 0 15px rgba(124,58,237,0.8);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @media(max-width:900px){
          .hero h1 {
            font-size: 34px;
          }
        }

      `}</style>
    </div>
  )
}