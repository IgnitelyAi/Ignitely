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
      alert("❌ Ongeldige inloggegevens");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">

      {/* Achtergrond Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] opacity-30 top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-30 bottom-[-200px] right-[-200px]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        {/* Logo Titel */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          🚀 Welkom terug bij <span className="text-blue-400">Ignitely</span>
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Log in en bouw verder aan jouw AI-website.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="E-mailadres"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Wachtwoord"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition duration-300"
          >
            {loading ? "Even geduld..." : "Inloggen"}
          </button>
        </form>

        <div className="text-center mt-6 text-gray-300 text-sm">
          Nog geen account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Maak er één aan
          </a>
        </div>
      </div>
    </div>
  );
}