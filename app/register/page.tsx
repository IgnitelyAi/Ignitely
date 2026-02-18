"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
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
    }

    alert("Account aangemaakt! Check je email om te bevestigen.");
  };

  return (
    <div style={{ padding: "60px", color: "white" }}>
      <h1>Account aanmaken</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Wachtwoord"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Voornaam"
        onChange={(e) => setVoornaam(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Achternaam"
        onChange={(e) => setAchternaam(e.target.value)}
      />
      <br /><br />

      <button onClick={handleRegister}>
        Registreren
      </button>
    </div>
  );
}