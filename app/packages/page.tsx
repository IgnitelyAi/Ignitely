"use client"

export default function PackagesPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Kies jouw pakket</h1>

      <div style={{ marginTop: "30px" }}>
        <button style={{ marginRight: "20px" }}>
          Starter Pakket
        </button>

        <button style={{ marginRight: "20px" }}>
          Pro Pakket
        </button>

        <button>
          Enterprise Pakket
        </button>
      </div>
    </div>
  )
}