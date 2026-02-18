"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Lanceer jouw ideeën naar de toekomst</h1>

      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => router.push("/login")}
          style={{
            padding: "14px 35px",
            marginRight: "20px",
            borderRadius: "30px",
            border: "none",
            background: "blue",
            color: "white",
            cursor: "pointer",
          }}
        >
          Inloggen
        </button>

        <button
          onClick={() => router.push("/register")}
          style={{
            padding: "14px 35px",
            borderRadius: "30px",
            border: "2px solid white",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          Registreren
        </button>
      </div>
    </div>
  );
}