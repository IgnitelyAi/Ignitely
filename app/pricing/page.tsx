"use client"

export default function Pricing() {
  return (
    <div className="wrapper">

      <section className="hero">
        <h1>Prijzen — Website Builder & Maatwerk</h1>
        <p>Transparante prijzen voor zelfstandigen en bedrijven. Kies builder-abonnement of een maatwerk pakket.</p>
      </section>

      <section className="pricing">

        {/* BUILDER PLANS */}
        <div className="column">
          <h2>Website Builder</h2>

          <div className="card starter">
            <h3>Starter</h3>
            <div className="price">€29<span>/maand</span></div>
            <ul>
              <li>✓ 1-3 pagina's</li>
              <li>✓ Templates & AI content</li>
              <li>✓ Basis SEO</li>
              <li>✓ Hosting & SSL</li>
            </ul>
            <button className="primary">Start met Starter</button>
          </div>

          <div className="card pro">
            <h3>Pro</h3>
            <div className="price">€79<span>/maand</span></div>
            <ul>
              <li>✓ Onbeperkte pagina's</li>
              <li>✓ Custom domein & e-mail</li>
              <li>✓ Geavanceerde SEO & analytics</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="probtn">Word Pro</button>
          </div>

          <div className="card agency">
            <h3>Agency</h3>
            <div className="price">€249<span>/maand</span></div>
            <ul>
              <li>✓ Meerdere sites</li>
              <li>✓ White-label opties</li>
              <li>✓ Team accounts</li>
              <li>✓ SLA & onboarding</li>
            </ul>
            <button className="primary">Vraag Agency</button>
          </div>
        </div>

        {/* CUSTOM PACKAGES */}
        <div className="column">
          <h2>Maatwerk Pakketten (door ons geleverd)</h2>

          <div className="card custom">
            <h3>Basis Site</h3>
            <div className="price">€799<span> eenmalig</span></div>
            <ul>
              <li>✓ 3-5 pagina's</li>
              <li>✓ Professioneel design</li>
              <li>✓ Basis SEO</li>
              <li>✓ Setup & training</li>
            </ul>
            <button className="primary">Bestel Basis</button>
          </div>

          <div className="card custom">
            <h3>Business Site</h3>
            <div className="price">€1.899<span> eenmalig</span></div>
            <ul>
              <li>✓ 6-15 pagina's</li>
              <li>✓ Conversie-optimalisatie</li>
              <li>✓ Integraties (betaal, CRM)</li>
              <li>✓ 3 maanden support</li>
            </ul>
            <button className="probtn">Bestel Business</button>
          </div>

          <div className="card custom">
            <h3>Enterprise</h3>
            <div className="price">Op maat</div>
            <ul>
              <li>✓ Volledig maatwerk</li>
              <li>✓ Dedicated projectmanager</li>
              <li>✓ Integraties & training</li>
              <li>✓ SLA & doorlopende optimalisatie</li>
            </ul>
            <button className="primary">Neem contact op</button>
          </div>
        </div>

      </section>

      <style jsx>{`
        .wrapper { min-height:100vh; padding:90px 20px; background: radial-gradient(circle at top, #0f1120, #06060a 60%); color:white }
        .hero { text-align:center; margin-bottom:48px }
        .hero h1 { font-size:40px; font-weight:700 }
        .pricing { display:flex; gap:40px; justify-content:center; align-items:flex-start; flex-wrap:wrap }
        .column { width:420px }
        .column h2 { margin-bottom:18px; font-size:20px; color:rgba(255,255,255,0.9) }
        .card { background: rgba(255,255,255,0.03); padding:26px; border-radius:16px; margin-bottom:18px; }
        .card h3 { font-size:18px; margin-bottom:6px }
        .price { font-weight:800; font-size:22px; margin-bottom:8px }
        ul { list-style:none; padding:0; margin:8px 0 12px 0 }
        li { margin-bottom:8px; opacity:0.9 }
        button { padding:10px 14px; border-radius:12px; border:none; font-weight:700; cursor:pointer }
        .primary{ background:linear-gradient(90deg,#7c5aed,#16a34a); color:white }
        .probtn{ background:linear-gradient(90deg,#7c3aed,#2563eb); color:white }
        .pro{ box-shadow:0 10px 30px rgba(37,99,235,0.12) }
        @media(max-width:980px){ .pricing{ flex-direction:column; align-items:center } .column{ width:100% } }
      `}</style>
    </div>
  )
}