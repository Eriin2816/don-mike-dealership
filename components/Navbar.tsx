"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(203,213,225,0.8),0_4px_24px_rgba(15,23,42,0.08)]"
          : "bg-gradient-to-b from-[#0F172A]/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[70px] h-[70px] shrink-0">
              <Image
                src="/logo.png"
                alt="Don Mike Auto Dealership logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-bold text-[16px] tracking-wide uppercase transition-colors duration-200 ${
                  scrolled ? "text-[#1E3A5F]" : "text-white"
                }`}
              >
                Don Mike
              </span>
              <span
                className={`font-sans text-[10px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                  scrolled ? "text-[#64748B]" : "text-white/70"
                }`}
              >
                Auto Dealership
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#1A56DB] focus-visible:text-[#1A56DB] ${
                  scrolled ? "text-[#334155]" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/book-a-call"
              className="hidden md:inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1547C0] active:bg-[#123DAA] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-[0_4px_14px_rgba(26,86,219,0.3)] hover:shadow-[0_4px_20px_rgba(26,86,219,0.45)]"
            >
              Schedule a Call
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] ${
                scrolled ? "text-[#1E3A5F]" : "text-white"
              }`}
            >
              <span
                className={`block w-5 h-0.5 bg-current transition-transform duration-200 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-transform duration-200 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#334155] text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-[#F0F6FF] hover:text-[#1A56DB] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book-a-call"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex justify-center items-center bg-[#1A56DB] hover:bg-[#1547C0] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors duration-200"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
