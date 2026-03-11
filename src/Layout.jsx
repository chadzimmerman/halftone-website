import React from "react";
import { Link } from "react-router-dom";

// Assuming you have components for Navigation and Footer
// import Navigation from './Navigation';
// import Footer from './Footer';

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

// This is the component that should wrap your Home, About, and Contact pages
const Layout = ({ children }) => {
  return (
    // Outer container: Sets the global font, minimum height, and text color
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* 1. Navigation (Full Width) */}
      {/* You would place your Navigation component here */}
      <header className="w-full min-h-16 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between px-6 py-4 sm:py-0">
        <Link
          to="/"
          className="text-xl font-bold no-underline text-inherit mb-3 sm:mb-0 tracking-tighter"
        >
          HALFTONE
        </Link>

        <nav className="flex flex-wrap justify-center gap-y-2">
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

      {/* 2. Main Content Wrapper: CRITICAL SECTION */}
      {/* This DIV MUST take up the full available width (w-full) 
          and should NOT have a global max-width or container class. */}
      <main className="w-full">{children}</main>

      {/* 3. Footer (Full Width) */}
      {/* You would place your Footer component here */}
      <footer className="bg-stone-100 py-12 text-center text-gray-500 text-xs">
        © 2022 HALTONE LLC.
      </footer>
    </div>
  );
};

// You would then wrap your pages in App.jsx like this:
// <Layout><Home /></Layout> or <Layout><About /></Layout>

export default Layout;
