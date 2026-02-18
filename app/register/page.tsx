"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

export default function RegisterPage() {
  const supabase = getSupabaseClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
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
      await supabase.from("users").insert({
        id: data.user.id,
        email,
        voornaam,
        achternaam,
        plan: "free",
      });
    }

    router.push("/login");
  };

  return (
    <div style={container}>
      <form onSubmit={handleRegister} style={form}>
        <h2>Registreren</h2>

        <input
          type="text"
          placeholder="Voornaam"
          value={voornaam}
          onChange={(e) => setVoornaam(e.target.value)}
          required
          style={input}
        />

        <input
          type="text"
          placeholder="Achternaam"
          value={achternaam}
          onChange={(e) => setAchternaam(e.target.value)}
          required
          style={input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={input}
        />

        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={input}
        />

        <button type="submit" disabled={loading} style={button}>
          {loading ? "Bezig..." : "Registreren"}
        </button>
      </form>
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const form = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "15px",
  width: "300px",
};

const input = {
  padding: "10px",
  fontSize: "16px",
};

const button = {
  padding: "12px",
  fontSize: "16px",
  background: "green",
  color: "white",
  border: "none",
  cursor: "pointer",
};