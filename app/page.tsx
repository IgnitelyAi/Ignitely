export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ 
        fontSize: "3rem", 
        fontWeight: "bold",
        textShadow: "0 0 25px #3b82f6"
      }}>
        Welkom bij Ignitely 🚀
      </h1>

      <p style={{ 
        marginTop: "15px",
        fontSize: "1.2rem",
        opacity: 0.9
      }}>
        Lanceer jouw ideeën naar de toekomst
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "20px", justifyContent: "center" }}>
        <button style={{
          padding: "14px 35px",
          borderRadius: "30px",
          border: "none",
          background: "linear-gradient(90deg, #2563eb, #1e3a8a)",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(59,130,246,0.7)"
        }}>
          Inloggen
        </button>

        <button style={{
          padding: "14px 35px",
          borderRadius: "30px",
          border: "2px solid #3b82f6",
          background: "transparent",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Registreren
        </button>
      </div>
    </div>
  )
}