"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // prevent body scroll when menu is open
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = "" };
  }, [open]);

  return (
    <header className="site-header fixed inset-x-2 top-4 z-50 pointer-events-auto">
      <div className="header-watermark" aria-hidden="true" />
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 logo-subtle">
            <Image src="/logo.png" alt="Ignitely" width={48} height={48} className="rounded-md" />
            <span className="hidden sm:inline text-sm text-gray-300 font-semibold">Ignitely</span>
          </Link>
          <div className="hidden sm:block text-xs text-gray-400">Premium websites & growth</div>
        </div>

        <nav className="site-nav hidden md:flex items-center gap-6">
          <div className="nav-links">
            <Link href="/login" className="text-sm text-gray-300 hover:text-white transition">Inloggen</Link>
            <Link href="/register" className="text-sm text-gray-300 hover:text-white transition">Registreren</Link>
            <Link href="/packages" className="text-sm text-gray-300 hover:text-white transition">Pakketten</Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition">Over ons</Link>
          </div>

          <div className="nav-actions">
            <Link href="/login" className="btn-ghost text-sm text-gray-300 hover:text-white transition">Inloggen</Link>
            <Link href="/register" className="btn-primary text-sm">Registreren</Link>
          </div>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-300">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-60">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="absolute top-16 right-4 w-[92%] max-w-sm bg-gradient-to-b from-black/80 to-black/90 border border-white/6 rounded-2xl p-6 glass-card shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Ignitely" width={36} height={36} />
                <div className="text-sm font-semibold">Ignitely</div>
              </div>
              <button aria-label="Sluit menu" onClick={() => setOpen(false)} className="text-gray-300">
                ✕
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4">
              <Link href="/login" onClick={() => setOpen(false)} className="text-gray-200">Inloggen</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="text-gray-200">Registreren</Link>
              <Link href="/packages" onClick={() => setOpen(false)} className="text-gray-200">Pakketten</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="text-gray-200">Over ons</Link>
            </nav>

            <div className="mt-6">
              <Link href="/register" onClick={() => setOpen(false)} className="block text-center btn-primary">Registreren</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
