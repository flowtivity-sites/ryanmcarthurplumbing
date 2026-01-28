import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Ryan McArthur Plumbing - Northern NSW Plumber",
  description: "Learn about Ryan McArthur Plumbing Pty Ltd. Expert plumbing and gas fitting services in Northern NSW for residential, industrial, and mobile living spaces.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--color-primary)] overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rotate-45 transform translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl md:text-7xl text-white leading-none mb-6">
              About Us
            </h1>
            <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Expert plumbing and gas fitting services you can trust across Northern NSW.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
                Who We Are
              </span>
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)] mb-6 geometric-line inline-block pb-4">
                Ryan McArthur Plumbing
              </h2>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed mb-6">
                Ryan McArthur Plumbing Pty Ltd offers expert plumbing and gas fitting services in Northern NSW. We provide reliable LPG and general plumbing services tailored for residential, industrial, and mobile living spaces.
              </p>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed mb-6">
                Our team is dedicated to delivering quality workmanship with a focus on customer satisfaction. Whether you need a simple repair or a complete installation, we approach every job with the same level of professionalism and attention to detail.
              </p>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                Contact us today for all your plumbing and LPG needs. We&apos;re here to help across Northern NSW.
              </p>
            </div>

            {/* Team Photo */}
            <div className="reveal">
              <div className="relative">
                <div className="rounded-lg overflow-hidden transform rotate-2 shadow-xl">
                  <Image
                    src="/images/rs_w_806.jpg"
                    alt="Ryan McArthur - Professional Plumber"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[var(--color-accent)]/30 rounded-lg -z-10" />
                <div className="absolute -bottom-8 left-4 bg-[var(--color-primary)] text-white px-6 py-3 rounded shadow-lg">
                  <p className="font-[family-name:var(--font-bebas-neue)] text-xl">Ryan McArthur</p>
                  <p className="font-[family-name:var(--font-work-sans)] text-white/70 text-sm">Owner & Licensed Plumber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              What We Do Best
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)]">
              Our Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg reveal">
              <Image
                src="/images/image_3.jpg"
                alt="Plumbing work"
                width={600}
                height={300}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl mb-2">General Plumbing</h3>
                <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-sm">
                  Expert plumbing solutions for all property types
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg reveal">
              <Image
                src="/images/image_4.jpg"
                alt="Gas fitting work"
                width={600}
                height={300}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl mb-2">LPG Gas Fitting</h3>
                <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-sm">
                  Licensed gas fitting services for homes and commercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              What Drives Us
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)]">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center reveal">
              <div className="w-20 h-20 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-3">
                Reliability
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                We show up when we say we will and complete every job to the highest standard. You can count on us.
              </p>
            </div>

            <div className="text-center reveal">
              <div className="w-20 h-20 bg-[var(--color-accent)] rounded-lg flex items-center justify-center mx-auto mb-6 transform rotate-3">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-3">
                Quality
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                We use quality materials and proven techniques to ensure our work stands the test of time.
              </p>
            </div>

            <div className="text-center reveal">
              <div className="w-20 h-20 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-3">
                Customer Focus
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                Your satisfaction is our priority. We listen to your needs and deliver solutions that work for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-[var(--color-primary)] relative overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-accent)]/5 rotate-45" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 -rotate-12" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <div className="font-[family-name:var(--font-bebas-neue)] text-6xl text-[var(--color-accent)] mb-2">
                24/7
              </div>
              <p className="font-[family-name:var(--font-work-sans)] text-white/70">
                Emergency Service
              </p>
            </div>
            <div className="reveal">
              <div className="font-[family-name:var(--font-bebas-neue)] text-6xl text-[var(--color-accent)] mb-2">
                100%
              </div>
              <p className="font-[family-name:var(--font-work-sans)] text-white/70">
                Licensed & Insured
              </p>
            </div>
            <div className="reveal">
              <div className="font-[family-name:var(--font-bebas-neue)] text-6xl text-[var(--color-accent)] mb-2">
                NSW
              </div>
              <p className="font-[family-name:var(--font-work-sans)] text-white/70">
                Northern Region
              </p>
            </div>
            <div className="reveal">
              <div className="font-[family-name:var(--font-bebas-neue)] text-6xl text-[var(--color-accent)] mb-2">
                All
              </div>
              <p className="font-[family-name:var(--font-work-sans)] text-white/70">
                Property Types
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)] mb-6 reveal">
            Let&apos;s Work Together
          </h2>
          <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] text-lg mb-8 reveal">
            Ready to get started? Contact us today for a free quote on any plumbing or gas fitting work across Northern NSW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <a
              href="tel:0412649668"
              className="btn-primary font-[family-name:var(--font-work-sans)] rounded text-lg"
            >
              Call 0412 649 668
            </a>
            <Link
              href="/contact"
              className="btn-secondary font-[family-name:var(--font-work-sans)] rounded text-lg"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
