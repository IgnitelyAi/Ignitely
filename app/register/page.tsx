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
            background: "linear-gradient(90deg,#2563eb,#3b82f6)",
            color: "white",
            fontSize: "16px",
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
            border: "2px solid #3b82f6",
            background: "transparent",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Registreren
        </button>
      </div>
    </div>
  );
}