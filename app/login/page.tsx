"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

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
      alert("Onjuiste inloggegevens.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f172a] to-black relative overflow-hidden">

      {/* Glow effecten */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[200px] top-[-200px] right-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[200px] bottom-[-200px] left-[-200px]" />

      {/* Login Card */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          Welkom terug 🚀
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Log in bij Ignitely en bouw verder
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="E-mailadres"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
          />

          <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition rounded-lg py-3 font-semibold text-white shadow-lg shadow-purple-500/30"
          >
            {loading ? "Even geduld..." : "Inloggen"}
          </button>

        </form>

        <div className="mt-6 text-center text-gray-400 text-sm">
          Nog geen account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Maak er één aan
          </a>
        </div>

      </div>
    </div>
  );
}