"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[var(--color-accent)] rounded flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <div>
              <span className="font-[family-name:var(--font-bebas-neue)] text-2xl text-white tracking-wide">
                Ryan McArthur
              </span>
              <span className="block text-xs text-white/70 font-[family-name:var(--font-work-sans)] -mt-1">
                PLUMBING PTY LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:0412649668"
              className="btn-primary font-[family-name:var(--font-work-sans)] rounded"
            >
              0412 649 668
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-[family-name:var(--font-work-sans)] text-white/90 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:0412649668"
                className="btn-primary font-[family-name:var(--font-work-sans)] rounded text-center mt-2"
              >
                0412 649 668
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
