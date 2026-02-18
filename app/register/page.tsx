"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("SUPABASE KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");

  const handleRegister = async () => {
    if (!supabase) {
      alert("Supabase is niet correct ingesteld.");
      return;
    }

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
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Registreren</h1>

      <input
        placeholder="Voornaam"
        value={voornaam}
        onChange={(e) => setVoornaam(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Achternaam"
        value={achternaam}
        onChange={(e) => setAchternaam(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Wachtwoord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleRegister}>
        Account aanmaken
      </button>
    </div>
  );
}