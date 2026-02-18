"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Welkom bij IgniteLy</h1>

      <button
        onClick={() => router.push("/login")}
        style={{ marginRight: "20px" }}
      >
        Inloggen
      </button>

      <button onClick={() => router.push("/register")}>
        Registreren
      </button>
    </div>
  );
}