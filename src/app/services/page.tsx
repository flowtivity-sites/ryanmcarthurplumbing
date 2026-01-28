import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Ryan McArthur Plumbing - Plumbing & Gas Fitting Northern NSW",
  description: "Expert plumbing and gas fitting services in Northern NSW. LPG installation, general plumbing, residential and industrial solutions. Call 0412 649 668.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image_4.jpg"
            alt="Industrial gas fitting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              What We Offer
            </span>
            <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl md:text-7xl text-white leading-none mb-6">
              Our Services
            </h1>
            <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Comprehensive plumbing and gas fitting solutions for residential, industrial, and mobile living spaces across Northern NSW.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Plumbing Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden reveal">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/images/image_3.jpg"
                  alt="Plumbing repair work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent" />
                <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white font-[family-name:var(--font-work-sans)] text-xs font-semibold px-3 py-1 rounded">
                  Core Service
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl text-[var(--color-primary)] mb-4">
                  Plumbing Services
                </h2>
                <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed mb-6">
                  Reliable LPG and general plumbing services tailored for residential, industrial and mobile living spaces. Our experienced team handles everything from minor repairs to complete installations.
                </p>

                <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl text-[var(--color-primary)] mb-3">
                  What We Offer:
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Residential plumbing repairs and maintenance
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Industrial plumbing installations
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile home and caravan plumbing
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Hot water system installation and repair
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Blocked drain clearing
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Leak detection and repair
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="btn-primary font-[family-name:var(--font-work-sans)] rounded inline-block"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Gas Fitting */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden reveal">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/images/image.jpg"
                  alt="Gas pipe installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent" />
                <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white font-[family-name:var(--font-work-sans)] text-xs font-semibold px-3 py-1 rounded">
                  Specialist Service
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl text-[var(--color-primary)] mb-4">
                  Gas Fitting
                </h2>
                <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed mb-6">
                  Reliable gas fitting for homes, commercial properties and more. We specialize in LPG installations and ensure all work meets strict Australian safety standards.
                </p>

                <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl text-[var(--color-primary)] mb-3">
                  What We Offer:
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    LPG gas installations
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gas appliance installation and servicing
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gas hot water systems
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Caravan and motorhome gas fitting
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gas leak detection and repair
                  </li>
                  <li className="flex items-start gap-3 font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">
                    <svg className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Gas compliance certificates
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="btn-primary font-[family-name:var(--font-work-sans)] rounded inline-block"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              Our Work
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)]">
              Recent Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square reveal">
              <Image
                src="/images/image.jpg"
                alt="Gas and water installation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square reveal">
              <Image
                src="/images/image_3.jpg"
                alt="Sink plumbing repair"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square reveal">
              <Image
                src="/images/image_4.jpg"
                alt="Industrial gas fitting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square reveal">
              <Image
                src="/images/image_5.jpg"
                alt="Valve fitting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
                Coverage Area
              </span>
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)] mb-6">
                Servicing Northern NSW
              </h2>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed mb-6">
                Ryan McArthur Plumbing provides expert plumbing and gas fitting services throughout Northern NSW. Whether you&apos;re in a rural property, suburban home, or commercial premises, we&apos;ve got you covered.
              </p>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                We also specialize in mobile living spaces, so if you&apos;re travelling through the region with your caravan or motorhome, we can help with all your plumbing and LPG needs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg reveal">
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-6">
                Property Types We Service
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">Residential</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">Commercial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">Industrial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">Mobile Homes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">Rural</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="font-[family-name:var(--font-work-sans)] text-[var(--color-text)]">Caravans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-[var(--color-primary)] relative overflow-hidden grain-overlay">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rotate-45 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rotate-12" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-6xl text-white mb-6 reveal">
            Ready to Get Started?
          </h2>
          <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-lg mb-8 reveal">
            Contact us today for a free quote on any plumbing or gas fitting work. We&apos;re here to help with all your needs across Northern NSW.
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
              className="btn-secondary font-[family-name:var(--font-work-sans)] rounded text-lg border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
