export default function About() {
  return (
    <div className="about-wrapper">
      <div className="container">
        <h1>Over Ignitely</h1>

        <p className="lead">Ignitely bouwt luxe, conversiegerichte websites die jouw merk versterken en klanten aantrekken. Wij combineren strategisch design, performance en hands-on support zodat jij je kunt richten op groei.</p>

        <section className="what">
          <h2>Wat we doen</h2>
          <ul>
            <li><strong>Design & Brand:</strong> maatwerk visuals en storytelling die vertrouwen wekt.</li>
            <li><strong>Conversie-optimalisatie:</strong> we ontwerpen met één doel: meer leads en klanten.</li>
            <li><strong>Techniek & Hosting:</strong> snelle hosting, veilige setup en eenvoudige content management.</li>
            <li><strong>Support & Groei:</strong> we blijven optimaliseren en meten, met duidelijke rapportages.</li>
          </ul>
        </section>

        <section className="approach">
          <h2>Onze aanpak</h2>
          <ol>
            <li><strong>Strategie:</strong> helder intakegesprek en KPI-definitie.</li>
            <li><strong>Design:</strong> prototypes en A/B-ready layouts.</li>
            <li><strong>Implementatie:</strong> snelle oplevering met betrouwbare hosting.</li>
            <li><strong>Grow:</strong> meetbare verbeteringen en doorlopende support.</li>
          </ol>
        </section>

        <section className="values">
          <h2>Waarom kiezen klanten ons?</h2>
          <ul>
            <li>Resultaatgericht — wij meten conversie en sturen bij.</li>
            <li>Volledige ontzorging — van design tot support.</li>
            <li>Snelle levertijden en transparante prijzen.</li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        .about-wrapper { min-height:100vh; padding:80px 20px; background: linear-gradient(180deg,#07070b,#0d1117); color:white }
        .container { max-width:900px; margin:0 auto }
        h1 { font-size:36px; margin-bottom:12px }
        .lead { opacity:0.85; margin-bottom:24px }
        section { margin-top:28px }
        ul, ol { margin-left:18px }
        li { margin-bottom:10px; opacity:0.95 }
      `}</style>
    </div>
  )
}
