"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

export default function LoginPage() {
  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert("Ongeldige inloggegevens");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-800 to-black" />

      <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[200px] opacity-30 animate-pulse -top-32 -left-32" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30 animate-pulse -bottom-32 -right-32" />

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welkom bij <span className="text-blue-300">Ignitely</span>
        </h1>

        <p className="text-center text-white/70 mb-8">
          🚀 Log in en lanceer jouw AI-project opnieuw.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="E-mailadres"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="password"
            placeholder="Wachtwoord"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg hover:scale-105 transition transform"
          >
            {loading ? "Bezig met inloggen..." : "Inloggen"}
          </button>
        </form>

        <div className="text-center mt-6 text-white/70 text-sm">
          Nog geen account?{" "}
          <a href="/register" className="text-blue-300 hover:underline">
            Maak er één aan
          </a>
        </div>
      </div>
    </div>
  );
}