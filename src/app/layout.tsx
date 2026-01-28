import type { Metadata } from "next";
import { Bebas_Neue, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan McArthur Plumbing | Expert Plumbing & Gas Fitting in Northern NSW",
  description: "Professional plumbing and gas fitting services in Northern NSW. Reliable LPG and general plumbing for residential, industrial, and mobile living spaces. Call 0412 649 668 for a free quote.",
  keywords: "plumber Northern NSW, gas fitting, LPG plumber, residential plumbing, industrial plumbing, mobile home plumbing",
  openGraph: {
    title: "Ryan McArthur Plumbing | Expert Plumbing Services",
    description: "Professional plumbing and gas fitting services in Northern NSW. Call 0412 649 668.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${workSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ryanmcarthurplumbing.sites.flowtivity.com.au",
              name: "Ryan McArthur Plumbing Pty Ltd",
              description: "Expert plumbing and gas fitting services in Northern NSW. Reliable LPG and general plumbing for residential, industrial, and mobile living spaces.",
              telephone: "0412 649 668",
              url: "https://ryanmcarthurplumbing.sites.flowtivity.com.au",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Northern NSW",
                addressRegion: "NSW",
                addressCountry: "AU",
              },
              openingHours: "Mo-Fr 07:00-17:00",
              priceRange: "$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -29.05,
                  longitude: 153.27,
                },
                geoRadius: "100000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Plumbing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Plumbing Services",
                      description: "Reliable LPG and general plumbing services for residential, industrial and mobile living spaces.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gas Fitting",
                      description: "Reliable gas fitting for homes, commercial properties and more.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
