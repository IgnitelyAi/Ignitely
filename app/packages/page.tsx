"use client"

import { useRouter } from "next/navigation"

export default function PackagesPage() {
  const router = useRouter()

  const selectPackage = (packageName: string) => {
    router.push(`/ai-agent?package=${packageName}`)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">

      <h1 className="text-5xl font-bold mb-4 text-center">
        Kies jouw pakket
      </h1>

      <p className="text-gray-400 mb-16 text-center">
        Laat onze AI jouw website bouwen. Kies het pakket dat bij jouw business past.
      </p>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">

        {/* FREE */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p className="text-4xl font-bold mb-6">€0</p>

          <ul className="space-y-3 mb-8 text-gray-300">
            <li>✔ 15 AI credits</li>
            <li>✔ 1 basic website</li>
            <li>✔ Standaard design</li>
            <li>✖ Custom backend</li>
          </ul>

          <button
            onClick={() => selectPackage("free")}
            className="w-full bg-zinc-700 hover:bg-zinc-600 py-3 rounded-xl font-semibold"
          >
            Start gratis
          </button>
        </div>


        {/* PRO (GROOTSTE) */}
        <div className="bg-blue-600 p-10 rounded-3xl scale-110 shadow-2xl relative">

          <div className="absolute top-0 right-0 bg-white text-black text-xs px-4 py-1 rounded-bl-2xl font-semibold">
            Meest gekozen
          </div>

          <h2 className="text-3xl font-bold mb-2">Pro</h2>
          <p className="text-5xl font-bold mb-6">€79</p>

          <ul className="space-y-3 mb-10">
            <li>✔ Onbeperkte AI credits</li>
            <li>✔ Premium design</li>
            <li>✔ SEO optimalisatie</li>
            <li>✔ Snelle laadtijd</li>
            <li>✔ AI automation</li>
          </ul>

          <button
            onClick={() => selectPackage("pro")}
            className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-900"
          >
            Kies Pro
          </button>
        </div>


        {/* STARTER */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Starter</h2>
          <p className="text-4xl font-bold mb-6">€29</p>

          <ul className="space-y-3 mb-8 text-gray-300">
            <li>✔ 150 AI credits</li>
            <li>✔ 5 pagina website</li>
            <li>✔ Basis SEO</li>
            <li>✖ Custom backend</li>
          </ul>

          <button
            onClick={() => selectPackage("starter")}
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold"
          >
            Kies Starter
          </button>
        </div>

      </div>
    </div>
  )
}