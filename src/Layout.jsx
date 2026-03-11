import React from "react";
import { Link } from "react-router-dom";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Halftone LLC",
  "description": "Professional architectural visualization studio offering photorealistic 3D renders, interior and exterior visualization, and animations for residential and commercial projects.",
  "url": "https://halftonellc.com",
  "email": "halftonellc@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "32 N Gould Street",
    "addressLocality": "Sheridan",
    "addressRegion": "WY",
    "postalCode": "82801",
    "addressCountry": "US"
  },
  "sameAs": [],
  "serviceType": [
    "Architectural Visualization",
    "3D Rendering",
    "Interior Visualization",
    "Exterior Rendering",
    "Architectural Animation"
  ]
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="w-full min-h-16 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between px-6 py-4 sm:py-0">
        <Link
          to="/"
          className="text-xl font-bold no-underline text-inherit mb-3 sm:mb-0 tracking-tighter"
        >
          HALFTONE
        </Link>

        <nav aria-label="Main navigation" className="flex flex-wrap justify-center gap-y-2">
          <Link
            to="/"
            className="px-3 text-sm sm:text-base hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 text-sm sm:text-base hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/how-it-works"
            className="px-3 text-sm sm:text-base hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            How It Works
          </Link>
          <Link
            to="/contact"
            className="px-3 text-sm sm:text-base hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* no max-width here — pages control their own layout */}
      <main className="w-full">{children}</main>

      <footer className="bg-stone-100 py-12 text-center text-gray-500 text-xs">
        © 2025 Halftone LLC.
      </footer>
    </div>
  );
};

export default Layout;
