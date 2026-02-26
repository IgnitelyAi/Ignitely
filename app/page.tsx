import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-x-hidden">

      {/* Header moved to layout.tsx */}

      {/* HERO */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 lux-hero-gradient" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            {/* Copy */}
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Maak een onweerstaanbare website. Zonder gedoe.
                </h1>

                <p className="mt-6 text-lg text-gray-300 max-w-2xl">
                  Een premium website voor jouw merk — strategisch ontworpen om bezoekers te converteren.
                  Volledige support, snelle laadtijden en maatwerk design. Klaar voor groei.
                </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded-full text-lg font-medium shadow-lg transform hover:scale-[1.02] transition"
                >
                  Probeer gratis
                </Link>

                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 border border-gray-600 px-6 py-3 rounded-full text-gray-200 hover:border-white transition"
                >
                  Plans & prijzen
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="glass-card px-3 py-2 rounded-full">SLA & Support</span>
                <span className="glass-card px-3 py-2 rounded-full">Snelle Laadtijden</span>
                <span className="glass-card px-3 py-2 rounded-full">Conversie-first</span>
              </div>
            </div>

            {/* Visual */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="w-full max-w-md glass-card rounded-2xl p-6 shadow-2xl animate-float">
                <div className="relative w-full h-[360px] rounded-xl overflow-hidden">
                  <Image src="/ignitely-bg.png" alt="Visual" fill className="object-cover opacity-95" />
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-300">Template</div>
                      <div className="text-lg font-semibold">Luxe Agency</div>
                    </div>
                    <div className="text-sm text-gray-400">Live — 3m</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* subtle decorative shapes */}
        <div className="pointer-events-none absolute -right-20 bottom-10 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-700/20 to-cyan-400/10 blur-3xl animate-pulse-slow" />
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Alles wat je nodig hebt om te groeien</h2>
            <p className="mt-4 text-gray-400">Design, performance en conversie — ingebouwd. Wij nemen de techniek uit handen zodat jij klanten wint.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-semibold">Conversie geoptimaliseerd</h3>
              <p className="mt-3 text-gray-400 text-sm">A/B-ready layouts en conversie-elementen die werken.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-semibold">Schaalbare prestaties</h3>
              <p className="mt-3 text-gray-400 text-sm">Snelle hosting, CDN en geoptimaliseerde assets.</p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-semibold">Hands-off support</h3>
              <p className="mt-3 text-gray-400 text-sm">Wij beheren updates, security en analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE / GALLERY */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold">Voorbeelden</h3>
            <p className="mt-3 text-gray-400">Inspiratie van recente projecten — gericht op conversie en merkbeleving.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden glass-card p-0">
              <div className="relative h-52">
                <Image src="/ignitely-bg.png" alt="Project 1" fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold">Studio Showcase</div>
                <div className="text-sm text-gray-400 mt-1">Moderne branding en conversiegeoptimaliseerde flow.</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden glass-card p-0">
              <div className="relative h-52">
                <Image src="/ignitely-bg.png" alt="Project 2" fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold">E-commerce Launch</div>
                <div className="text-sm text-gray-400 mt-1">Snelle conversies met een strak checkout-proces.</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden glass-card p-0">
              <div className="relative h-52">
                <Image src="/ignitely-bg.png" alt="Project 3" fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold">Agency Template</div>
                <div className="text-sm text-gray-400 mt-1">Klaar-voor-klanten layouts en contentblokken.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / SOCIAL PROOF */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl text-gray-300">Trusted by ambitious teams</h3>
            <div className="mt-6 flex items-center justify-center gap-8 flex-wrap">
              <Image src="/next.svg" alt="Next" width={84} height={28} />
              <Image src="/vercel.svg" alt="Vercel" width={84} height={28} />
              <Image src="/globe.svg" alt="Globe" width={84} height={28} />
            </div>

            <blockquote className="mt-10 glass-card p-8 rounded-2xl text-left">
              <p className="text-lg text-gray-100">"Ignitely transformed our website into a conversion machine. The team delivered a beautiful site in days — our leads doubled within weeks."</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm">JS</div>
                <div>
                  <div className="font-semibold">Johan S.</div>
                  <div className="text-sm text-gray-400">Founder, Studio Aurora</div>
                </div>
              </div>
            </blockquote>
          
            {/* PRICING / PLANS */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-sm text-gray-400">Starter</div>
                <div className="mt-2 text-2xl font-bold">€29</div>
                <div className="mt-3 text-gray-400 text-sm">Perfect voor freelancers</div>
                <div className="mt-6">
                  <Link href="/register" className="bg-white text-black px-4 py-2 rounded-full">Kies Starter</Link>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl text-center border-2 border-white/6">
                <div className="text-sm text-gray-400">Growth</div>
                <div className="mt-2 text-2xl font-bold">€99</div>
                <div className="mt-3 text-gray-400 text-sm">Voor groeiende bedrijven</div>
                <div className="mt-6">
                  <Link href="/register" className="bg-white text-black px-4 py-2 rounded-full">Kies Growth</Link>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-sm text-gray-400">Enterprise</div>
                <div className="mt-2 text-2xl font-bold">Op maat</div>
                <div className="mt-3 text-gray-400 text-sm">Maatwerk en support</div>
                <div className="mt-6">
                  <Link href="/contact" className="border border-gray-600 px-4 py-2 rounded-full text-gray-200">Contacteer ons</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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