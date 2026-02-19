"use client"

export default function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Kies jouw pakket</h1>

      <div style={{ marginTop: "30px" }}>
        <button style={{ marginRight: "20px" }}>
          Starter Pakket
        </button>

        <button style={{ marginRight: "20px" }}>
          Professional Pakket
        </button>

        <button>
          Enterprise Pakket
        </button>
      </div>
    </div>
  )
}