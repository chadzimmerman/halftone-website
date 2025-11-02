// import React from "react";
// import { Search, Instagram, Mail } from "lucide-react";

// const Layout = ({ children }) => {
//   return (
//     // This is the SINGLE top-level wrapper with global styles
//     <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
//       {/* --- Top Navigation Bar --- */}
//       <nav className="flex items-center justify-between px-6 sm:px-12 py-4 border-b border-gray-100">
//         <div className="flex items-center space-x-6">
//           <span className="text-sm font-light tracking-[0.3em] text-gray-900">
//             HALFTONE
//           </span>
//           <div className="flex items-center space-x-2 text-gray-500">
//             {/* Social Icons matching the image */}
//             <a
//               href="/instagram"
//               aria-label="Instagram"
//               className="hover:text-gray-900"
//             >
//               <Instagram className="w-4 h-4" />
//             </a>
//             <a
//               href="/contact"
//               aria-label="Email"
//               className="hover:text-gray-900"
//             >
//               <Mail className="w-4 h-4" />
//             </a>
//           </div>
//         </div>

//         {/* Search and Nav Links */}
//         <div className="flex items-center space-x-6">
//           <div className="relative hidden sm:block">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-2 py-1 text-sm border border-gray-300 focus:outline-none focus:border-gray-900 w-40"
//             />
//           </div>
//           {/* Use router Links (or anchor tags for simplicity) */}
//           <a
//             href="/"
//             className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
//           >
//             Home
//           </a>
//           <a
//             href="/about"
//             className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
//           >
//             About
//           </a>
//           <a
//             href="/more"
//             className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
//           >
//             More
//           </a>
//         </div>
//       </nav>

//       {/* --- Main Content Area (Where the routes render) --- */}
//       <main>{children}</main>

//       {/* --- Footer Section --- */}
//       <footer className="bg-white pt-10 pb-16 text-center text-xs text-gray-500 border-t border-gray-100">
//         <p className="mb-2">
//           Find our work on{" "}
//           <a href="#" className="font-semibold text-gray-700 hover:underline">
//             Behance
//           </a>{" "}
//           and{" "}
//           <a href="#" className="font-semibold text-gray-700 hover:underline">
//             Instagram
//           </a>
//         </p>
//         <p className="mb-2">halftonellc@gmail.com</p>
//         <p>© 2022 by Halftone, LLC.</p>
//       </footer>
//     </div>
//   );
// };

// export default Layout;
import React from "react";

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
        <div className="text-xl font-bold">HALFTONE</div>
        <nav>
          <a href="/" className="px-3 hover:text-gray-600">
            Home
          </a>
          <a href="/about" className="px-3 hover:text-gray-600">
            About
          </a>
          <a href="/contact" className="px-3 hover:text-gray-600">
            Contact
          </a>
        </nav>
      </header>

      {/* 2. Main Content Wrapper: CRITICAL SECTION */}
      {/* This DIV MUST take up the full available width (w-full) 
          and should NOT have a global max-width or container class. */}
      <main className="w-full">{children}</main>

      {/* 3. Footer (Full Width) */}
      {/* You would place your Footer component here */}
      <footer className="bg-stone-100 py-12 text-center text-gray-500 text-xs">
        © 2024 HALTONE LLC.
      </footer>
    </div>
  );
};

// You would then wrap your pages in App.jsx like this:
// <Layout><Home /></Layout> or <Layout><About /></Layout>

export default Layout;
