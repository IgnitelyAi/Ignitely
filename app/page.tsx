export default function Home() {
  return (
    <main className="container">
      
      <img 
        src="/logo.jpg" 
        alt="Ignitely logo"
        className="logo"
      />

      <h1 className="title">Welkom bij Ignitely</h1>
      <p className="subtitle">Lanceer jouw ideeën naar de toekomst 🚀</p>

      <div className="buttons">
        <button className="btn-primary">Inloggen</button>
        <button className="btn-secondary">Registreren</button>
      </div>

    </main>
  );
}