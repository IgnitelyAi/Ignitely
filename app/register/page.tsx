"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      console.log("Supabase not ready");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").insert([
        {
          id: data.user.id,
          email,
          voornaam,
          achternaam,
          plan: "free",
          credits: 15,
        },
      ]);

      alert("Account aangemaakt! Check je email om te bevestigen.");
      router.push("/login");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          gap: "15px",
        }}
      >
        <h1>Registreren</h1>

        <input
          type="text"
          placeholder="Voornaam"
          value={voornaam}
          onChange={(e) => setVoornaam(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Achternaam"
          value={achternaam}
          onChange={(e) => setAchternaam(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            background: "#2563eb",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          {loading ? "Bezig..." : "Account aanmaken"}
        </button>
      </form>
    </div>
  );
}