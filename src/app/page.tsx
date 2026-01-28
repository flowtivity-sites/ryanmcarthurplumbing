import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/rs_w_806.jpg"
            alt="Professional plumber at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/90 to-[var(--color-primary)]/70" />
        </div>

        {/* Geometric decorations */}
        <div className="absolute top-32 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rotate-45 transform translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              Northern NSW&apos;s Trusted Plumber
            </span>
            <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
              Expert Plumbing<br />
              <span className="text-[var(--color-accent)]">& Gas Fitting</span>
            </h1>
            <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Reliable LPG and general plumbing services tailored for residential, industrial, and mobile living spaces across Northern NSW.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0412649668"
                className="btn-primary font-[family-name:var(--font-work-sans)] rounded text-center text-lg"
              >
                Call 0412 649 668
              </a>
              <Link
                href="/contact"
                className="btn-secondary font-[family-name:var(--font-work-sans)] rounded text-center text-lg border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              What We Do
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-6xl text-[var(--color-primary)] geometric-line inline-block pb-4">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plumbing Services Card */}
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 reveal">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/image_3.jpg"
                  alt="Plumbing repair work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/40 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300" />
              </div>
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-3">
                  Plumbing Services
                </h3>
                <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed mb-6">
                  Reliable LPG and general plumbing services tailored for residential, industrial and mobile living spaces. From repairs to installations, we handle it all.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold hover:gap-4 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Gas Fitting Card */}
            <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 reveal">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/images/image_4.jpg"
                  alt="Industrial gas fitting work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/40 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300" />
              </div>
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-3">
                  Gas Fitting
                </h3>
                <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed mb-6">
                  Reliable gas fitting for homes, commercial properties and more. Expert installation, maintenance, and repair of gas systems with safety as our priority.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold hover:gap-4 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center reveal">
              <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-2">
                Licensed & Insured
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)]">
                Fully licensed and insured for your peace of mind
              </p>
            </div>

            <div className="text-center reveal">
              <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-2">
                Prompt Service
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)]">
                Fast response times across Northern NSW
              </p>
            </div>

            <div className="text-center reveal">
              <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-[var(--color-primary)] mb-2">
                Quality Guaranteed
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)]">
                Workmanship you can trust, every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              Our Work
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)]">
              A Glimpse Into Our Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square reveal">
              <Image
                src="/images/image.jpg"
                alt="Gas and water pipe installation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-[family-name:var(--font-bebas-neue)] text-xl">Gas & Water Installation</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square reveal">
              <Image
                src="/images/image_4.jpg"
                alt="Industrial gas fitting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-[family-name:var(--font-bebas-neue)] text-xl">Industrial Gas Fitting</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-square reveal">
              <Image
                src="/images/image_5.jpg"
                alt="Valve fitting work"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-[family-name:var(--font-bebas-neue)] text-xl">Precision Valve Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-[var(--color-primary)] relative overflow-hidden grain-overlay">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-accent)]/5 transform skew-x-12" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
                Why Choose Us
              </span>
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-white mb-6">
                Trusted Plumbing Experts in Northern NSW
              </h2>
              <p className="font-[family-name:var(--font-work-sans)] text-white/80 text-lg leading-relaxed mb-8">
                Ryan McArthur Plumbing Pty Ltd offers expert plumbing and gas fitting services tailored to the unique needs of Northern NSW. Whether you need residential repairs, industrial installations, or specialized work for mobile living spaces, we deliver reliable solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-white">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Residential & industrial plumbing
                </li>
                <li className="flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-white">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  LPG gas fitting specialists
                </li>
                <li className="flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-white">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile home plumbing solutions
                </li>
                <li className="flex items-center gap-3 font-[family-name:var(--font-work-sans)] text-white">
                  <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Prompt, professional service
                </li>
              </ul>
            </div>

            <div className="hidden md:block reveal">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
                  <div className="text-center">
                    <div className="font-[family-name:var(--font-bebas-neue)] text-6xl text-[var(--color-accent)] mb-2">
                      24/7
                    </div>
                    <p className="font-[family-name:var(--font-work-sans)] text-white/80">
                      Emergency Service Available
                    </p>
                  </div>
                  <div className="border-t border-white/10 my-6" />
                  <div className="text-center">
                    <a
                      href="tel:0412649668"
                      className="font-[family-name:var(--font-bebas-neue)] text-4xl text-white hover:text-[var(--color-accent)] transition-colors"
                    >
                      0412 649 668
                    </a>
                    <p className="font-[family-name:var(--font-work-sans)] text-white/60 text-sm mt-2">
                      Call now for immediate assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block font-[family-name:var(--font-work-sans)] text-[var(--color-accent)] font-semibold mb-4 tracking-wider uppercase text-sm">
              Common Questions
            </span>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-[var(--color-primary)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6 reveal">
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl text-[var(--color-primary)] mb-2">
                What areas do you service in Northern NSW?
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                We provide plumbing and gas fitting services throughout Northern NSW, including residential, industrial, and rural properties. Contact us to confirm service availability in your area.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 reveal">
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl text-[var(--color-primary)] mb-2">
                Do you offer emergency plumbing services?
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                Yes, we offer emergency plumbing services. For urgent plumbing issues, call us at 0412 649 668 and we&apos;ll respond as quickly as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 reveal">
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl text-[var(--color-primary)] mb-2">
                Can you work on mobile homes and caravans?
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                Absolutely! We specialize in plumbing and LPG gas fitting for mobile living spaces including caravans, motorhomes, and tiny homes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 reveal">
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl text-[var(--color-primary)] mb-2">
                How much does plumbing work cost in Northern NSW?
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                Pricing varies depending on the job requirements. We provide free quotes so you know the cost upfront. Call us or fill out our contact form for a no-obligation estimate.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 reveal">
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl text-[var(--color-primary)] mb-2">
                Are you licensed for gas fitting?
              </h3>
              <p className="font-[family-name:var(--font-work-sans)] text-[var(--color-text-muted)] leading-relaxed">
                Yes, Ryan McArthur Plumbing is fully licensed and insured for both plumbing and gas fitting work, ensuring all work meets Australian safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
