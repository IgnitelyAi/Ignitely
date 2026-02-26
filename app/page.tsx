import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-x-hidden">

      {/* Header moved to layout.tsx */}

      {/* HERO — Squarespace-inspired centered hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 lux-hero-gradient" />

        <div className="relative z-20 max-w-4xl">
          <h1 className="hero-title text-5xl md:text-7xl text-white leading-tight serif reveal">
            Bouw een merkwaardige website
          </h1>

          <p className="hero-sub mt-6 reveal">
            Een elegante, conversiegerichte website — strategisch ontworpen en snel live. Alles verzorgd, van design tot groei.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 reveal">
            <Link href="/register" className="btn-filled text-base">
              Begin gratis
            </Link>

            <Link href="/packages" className="btn-outline text-base">
              Bekijk pakketten
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400 reveal">
            <div className="underline-anim">Professioneel design</div>
            <div className="underline-anim">Snelle hosting</div>
            <div className="underline-anim">Conversie-first</div>
          </div>
        </div>

        {/* subtle right visual shard */}
        <div className="pointer-events-none absolute right-6 top-16 w-[360px] h-[360px] rounded-xl overflow-hidden glass-card shadow-2xl hidden md:block">
          <Image src="/ignitely-bg.png" alt="Visual" fill className="object-cover opacity-95" />
        </div>
      </section>

      {/* Removed additional sections to match minimal Squarespace-like homepage */}

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Klaar om je conversie te verhogen?</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Start je gratis proef of plan een demo met een specialist — geen verplichtingen, alleen groei.</p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/register" className="bg-white text-black px-8 py-3 rounded-full font-medium">Begin gratis</Link>
            <Link href="/contact" className="border border-gray-600 px-6 py-3 rounded-full text-gray-200">Plan demo</Link>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ignitely — Built for creators & agencies
      </footer>

    </main>
  );
}