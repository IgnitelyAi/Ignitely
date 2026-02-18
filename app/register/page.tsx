"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      console.log("Supabase not loaded");
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
      await supabase.from("profiles").insert([
        {
          id: data.user.id,
          email,
          voornaam,
          achternaam,
          plan: "free",
        },
      ]);

      router.push("/");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Registreren</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Voornaam"
          value={voornaam}
          onChange={(e) => setVoornaam(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Achternaam"
          value={achternaam}
          onChange={(e) => setAchternaam(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Account aanmaken</button>
      </form>
    </div>
  );
}