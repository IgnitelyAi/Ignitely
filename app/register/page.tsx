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
  const [geboortedatum, setGeboortedatum] = useState("");
  const [adres, setAdres] = useState("");
  const [postcode, setPostcode] = useState("");
  const [plaats, setPlaats] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!supabase) {
      alert("Supabase niet correct ingesteld.");
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
          geboortedatum,
          adres,
          postcode,
          plaats,
          plan: "free",
          credits: 15,
        },
      ]);

      alert("Account aangemaakt! Check je e-mail om te bevestigen.");
      router.push("/login");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Registreren</h1>

      <input
        placeholder="Voornaam"
        value={voornaam}
        onChange={(e) => setVoornaam(e.target.value)}
      />

      <input
        placeholder="Achternaam"
        value={achternaam}
        onChange={(e) => setAchternaam(e.target.value)}
      />

      <input
        type="date"
        value={geboortedatum}
        onChange={(e) => setGeboortedatum(e.target.value)}
      />

      <input
        placeholder="Adres"
        value={adres}
        onChange={(e) => setAdres(e.target.value)}
      />

      <input
        placeholder="Postcode"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
      />

      <input
        placeholder="Plaats"
        value={plaats}
        onChange={(e) => setPlaats(e.target.value)}
      />

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Wachtwoord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleRegister}
        disabled={loading}
        style={{ marginTop: "20px" }}
      >
        {loading ? "Bezig..." : "Account aanmaken"}
      </button>
    </div>
  );
}