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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* LOGO BACKGROUND */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10"
        style={{ backgroundImage: "url('/logo.jpg')" }}
      />

      {/* GLOW EFFECTS */}
      <div className="absolute w-[700px] h-[700px] bg-blue-600 rounded-full blur-[250px] opacity-30 -top-40 -left-40" />
      <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[250px] opacity-30 -bottom-40 -right-40" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_80px_rgba(0,0,255,0.3)]">

        {/* LOGO TOP */}
        <div className="flex justify-center mb-6">
          <img src="/logo.jpg" alt="Ignitely" className="w-16 h-16 object-contain" />
        </div>

        <h1 className="text-4xl font-bold text-center mb-2">
          Welkom terug bij <span className="text-blue-400">Ignitely</span>
        </h1>

        <p className="text-center text-gray-300 mb-8">
          🚀 Log in en lanceer jouw AI-project opnieuw.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="E-mailadres"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <input
            type="password"
            placeholder="Wachtwoord"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-lg hover:scale-105 transition transform"
          >
            {loading ? "Bezig met inloggen..." : "Inloggen"}
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