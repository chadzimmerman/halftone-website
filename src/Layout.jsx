import React from "react";
import { Link } from "react-router-dom";

// Assuming you have components for Navigation and Footer
// import Navigation from './Navigation';
// import Footer from './Footer';

// This is the component that should wrap your Home, About, and Contact pages
const Layout = ({ children }) => {
  return (
    // Outer container: Sets the global font, minimum height, and text color
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* 1. Navigation (Full Width) */}
      {/* You would place your Navigation component here */}
      <header className="w-full h-16 border-b border-gray-100 flex items-center justify-between px-6">
        {/* <div className="text-xl font-bold">HALFTONE</div> */}
        <Link to="/" className="text-xl font-bold no-underline text-inherit">
          HALFTONE
        </Link>
        <nav>
          <Link to="/" className="px-3 hover:text-gray-600">
            Home
          </Link>
          <Link to="/about" className="px-3 hover:text-gray-600">
            About
          </Link>
          <Link to="/how-it-works" className="px-3 hover:text-gray-600">
            How It Works
          </Link>
          <Link to="/contact" className="px-3 hover:text-gray-600">
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
