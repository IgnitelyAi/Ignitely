"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

console.log("ENV URL:", supabaseUrl);
console.log("ENV KEY:", supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");

  const handleRegister = async () => {
    console.log("Register clicked");

    if (!supabaseUrl || !supabaseKey) {
      alert("Supabase ENV variables ontbreken");
      console.log("ENV missing");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("Signup result:", data, error);

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: data.user.id,
          email,
          voornaam,
          achternaam,
          plan: "free",
          credits: 15,
        },
      ]);

      console.log("Profile insert:", profileError);

      if (profileError) {
        alert(profileError.message);
      } else {
        alert("Account aangemaakt! Check je e-mail.");
      }
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Registreren</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Wachtwoord"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

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

      <button onClick={handleRegister}>
        Account aanmaken
      </button>
    </div>
  );
}