"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

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

      alert("Check je e-mail om je account te bevestigen.");
      router.push("/login");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Registreren</h1>

      <div style={{ marginTop: "30px" }}>
        <input
          placeholder="Voornaam"
          value={voornaam}
          onChange={(e) => setVoornaam(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <input
          placeholder="Achternaam"
          value={achternaam}
          onChange={(e) => setAchternaam(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <input
          placeholder="Wachtwoord"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <button
          onClick={handleRegister}
          style={{
            padding: "12px 30px",
            marginTop: "20px",
            borderRadius: "25px",
            border: "none",
            background: "blue",
            color: "white",
            cursor: "pointer",
          }}
        >
          Account aanmaken
        </button>
      </div>
    </div>
  );
}