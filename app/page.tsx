export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Welkom bij Ignity</h1>
      <p>Het platform waar jouw ideeën tot leven komen.</p>

      <div style={{ marginTop: "20px" }}>
        <button style={{ marginRight: "10px", padding: "8px 16px" }}>
          Inloggen
        </button>

        <button style={{ padding: "8px 16px" }}>
          Registreren
        </button>
      </div>
    </main>
  );
}