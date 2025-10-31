"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND, CONTACT } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/properties", label: "PROPERTIES" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#c9a961]/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#c9a961] tracking-wider" style={{ fontFamily: "var(--font-playfair)" }}>
              {BRAND.name.toUpperCase()}
            </span>
            <span className="text-[10px] text-[#b0b0b0] tracking-widest uppercase" style={{ fontFamily: "var(--font-lora)" }}>
              {BRAND.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium leading-6 text-white hover:text-[#c9a961] transition-colors tracking-widest"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <a
            href={`tel:${CONTACT.phone}`}
            className="border border-[#c9a961] px-6 py-2.5 text-xs font-medium text-[#c9a961] hover:bg-[#c9a961] hover:text-black transition-all duration-300 tracking-wider"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            INQUIRE NOW
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#c9a961]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-[#c9a961]/20">
          <div className="space-y-1 px-6 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-sm font-medium text-white hover:text-[#c9a961] tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-4 block border border-[#c9a961] px-3 py-3 text-center text-sm font-medium text-[#c9a961] hover:bg-[#c9a961] hover:text-black transition-all"
            >
              INQUIRE NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
