export default function Home() {
  return (
    <main style={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: "20px"
    }}>
      
      <img 
        src="/logo.jpg" 
        alt="Ignitely Logo" 
        style={{ width: "250px" }}
      />

      <h1>Welkom bij Ignitely</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button>Inloggen</button>
        <button>Registreren</button>
      </div>

    </main>
  );
}