"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 pointer-events-auto">
      <div className="header-watermark" aria-hidden="true" />
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Corner logo */}
        <div className="logo-corner">
          <Link href="/" className="flex items-center gap-3 logo-subtle">
            <Image src="/logo.png" alt="Ignitely" width={44} height={44} className="rounded-md" />
            <span className="hidden sm:inline text-sm text-gray-300 font-semibold">Ignitely</span>
          </Link>
        </div>

        {/* Center note (optional) */}
        <div className="hidden sm:block text-xs text-gray-400">Premium websites & growth</div>

        {/* Always-visible navigation */}
        <nav className="site-nav flex items-center gap-6">
          <div className="nav-links flex gap-6">
            <Link href="/" className="text-sm text-gray-300 hover:text-white transition">Home</Link>
            <Link href="/login" className="text-sm text-gray-300 hover:text-white transition">Inloggen</Link>
            <Link href="/register" className="text-sm text-gray-300 hover:text-white transition">Registreren</Link>
            <Link href="/packages" className="text-sm text-gray-300 hover:text-white transition">Pakketten</Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition">Over ons</Link>
          </div>

          <div className="nav-actions flex items-center gap-3">
            <Link href="/login" className="btn-ghost text-sm text-gray-300 hover:text-white transition">Inloggen</Link>
            <Link href="/register" className="btn-primary text-sm">Registreren</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
