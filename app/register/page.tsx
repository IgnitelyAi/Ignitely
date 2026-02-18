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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        email,
        voornaam,
        achternaam,
        plan: "free",
        credits: 15,
      });

      alert("Account aangemaakt! Check je e-mail voor verificatie.");
      router.push("/login");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Registreren</h1>

      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
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
          placeholder="E-mail"
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

        <button type="submit">Account aanmaken</button>
      </form>
    </div>
  );
}