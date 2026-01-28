import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      {/* CTA Section */}
      <div className="bg-[var(--color-accent)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-white mb-4">
            Need a Plumber?
          </h2>
          <p className="font-[family-name:var(--font-work-sans)] text-white/90 text-lg mb-6 max-w-xl mx-auto">
            Get in touch for reliable plumbing and gas fitting services across Northern NSW
          </p>
          <a
            href="tel:0412649668"
            className="inline-block bg-white text-[var(--color-primary)] font-[family-name:var(--font-work-sans)] font-semibold py-4 px-8 rounded transition-all hover:bg-[var(--color-surface)] hover:shadow-lg"
          >
            Call 0412 649 668
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--color-accent)] rounded flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
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
                  <span className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-wide">
                    Ryan McArthur
                  </span>
                  <span className="block text-xs text-white/70 font-[family-name:var(--font-work-sans)] -mt-1">
                    PLUMBING PTY LTD
                  </span>
                </div>
              </div>
              <p className="font-[family-name:var(--font-work-sans)] text-white/70 text-sm leading-relaxed">
                Expert plumbing and gas fitting services in Northern NSW. Reliable LPG and general plumbing for residential, industrial, and mobile living spaces.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl mb-4 tracking-wide">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="font-[family-name:var(--font-work-sans)] text-white/70 hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="font-[family-name:var(--font-work-sans)] text-white/70 hover:text-white transition-colors text-sm"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="font-[family-name:var(--font-work-sans)] text-white/70 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="font-[family-name:var(--font-work-sans)] text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl mb-4 tracking-wide">
                Contact Us
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:0412649668"
                  className="font-[family-name:var(--font-work-sans)] text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0412 649 668
                </a>
                <div className="font-[family-name:var(--font-work-sans)] text-white/70 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Northern NSW, Australia
                </div>
                <div className="font-[family-name:var(--font-work-sans)] text-white/70 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Mon - Fri: 7:00 AM - 5:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="font-[family-name:var(--font-work-sans)] text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Ryan McArthur Plumbing Pty Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
