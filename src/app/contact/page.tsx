"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwpkvwnw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-primary)] overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rotate-45 transform translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl md:text-7xl text-white leading-none mb-6">
              Contact Us
            </h1>
            <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Ready for reliable plumbing and gas fitting services? Get in touch today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 reveal">
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl text-[var(--color-primary)] mb-6">
                Send Us a Message
              </h2>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-green-700 mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-[family-name:var(--font-work-sans)] text-green-600">
                    Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-[family-name:var(--font-work-sans)] text-[var(--color-text)] font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-[family-name:var(--font-work-sans)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-[family-name:var(--font-work-sans)] text-[var(--color-text)] font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-[family-name:var(--font-work-sans)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-[family-name:var(--font-work-sans)] text-[var(--color-text)] font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-[family-name:var(--font-work-sans)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-[family-name:var(--font-work-sans)] text-[var(--color-text)] font-medium mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-[family-name:var(--font-work-sans)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="gas-fitting">Gas Fitting</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-[family-name:var(--font-work-sans)] text-[var(--color-text)] font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-[family-name:var(--font-work-sans)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your plumbing needs..."
                    />
                  </div>

                  {formStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 font-[family-name:var(--font-work-sans)]">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full btn-primary font-[family-name:var(--font-work-sans)] rounded text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-[var(--color-primary)] rounded-lg p-8 reveal">
                <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl text-white mb-6">
                  Quick Contact
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:0412649668"
                    className="flex items-center gap-4 text-white hover:text-[var(--color-accent)] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--color-accent)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-work-sans)] text-white/60 text-sm">Call Us</p>
                      <p className="font-[family-name:var(--font-bebas-neue)] text-2xl">0412 649 668</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-work-sans)] text-white/60 text-sm">Service Area</p>
                      <p className="font-[family-name:var(--font-work-sans)] text-lg">Northern NSW, Australia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-work-sans)] text-white/60 text-sm">Business Hours</p>
                      <p className="font-[family-name:var(--font-work-sans)] text-lg">Mon - Fri: 7:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-[var(--color-accent)] rounded-lg p-8 reveal">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-white mb-2">
                      Emergency Service
                    </h3>
                    <p className="font-[family-name:var(--font-work-sans)] text-white/90 mb-4">
                      Plumbing emergency? We offer emergency callouts for urgent issues. Call us now for immediate assistance.
                    </p>
                    <a
                      href="tel:0412649668"
                      className="inline-block bg-white text-[var(--color-accent)] font-[family-name:var(--font-work-sans)] font-semibold py-3 px-6 rounded hover:bg-[var(--color-surface)] transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden reveal">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="font-[family-name:var(--font-work-sans)] text-gray-500">
                      Servicing Northern NSW
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] text-sm">
                    We service residential, commercial, and industrial properties throughout Northern NSW. Contact us to confirm service availability in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
