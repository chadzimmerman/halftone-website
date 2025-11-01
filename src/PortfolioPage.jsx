import React from "react";
import { Search, Instagram, Mail } from "lucide-react";

// Helper component for image placeholders
const ImagePlaceholder = ({ ratioClass, text, src }) => {
  const defaultSrc = `https://placehold.co/${ratioClass}/cccccc/3d3d3d?text=${text.replace(
    / /g,
    "+"
  )}`;

  return (
    <div className={`w-full bg-gray-200 overflow-hidden`}>
      <img
        src={src || defaultSrc}
        alt={text}
        className="w-full h-full object-cover"
        style={{ aspectRatio: ratioClass.replace("x", "/") }}
      />
    </div>
  );
};

// Main Application Component for the Project Page
const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Top Navigation Bar (Consistent with previous pages) */}
      <nav className="flex items-center justify-between px-6 sm:px-12 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-6">
          <span className="text-sm font-light tracking-[0.3em] text-gray-900">
            HALFTONE
          </span>
          <div className="flex items-center space-x-2 text-gray-500">
            {/* Social Icons matching the image */}
            <a href="#" aria-label="Instagram" className="hover:text-gray-900">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Email" className="hover:text-gray-900">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Search and Nav Links */}
        <div className="flex items-center space-x-6">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 text-sm border border-gray-300 focus:outline-none focus:border-gray-900 w-40"
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
          >
            About
          </a>
          <a
            href="#"
            className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
          >
            More
          </a>
        </div>
      </nav>

      {/* Hero Section - Title and Description */}
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column: Project Title */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Project <br /> Grivas.
          </h1>
          <p className="text-sm text-gray-600">Architectural Design</p>
        </div>

        {/* Right Column: Project Details and Description */}
        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Glyfada, Greece
          </p>
          <p>
            The project Grivas is situated in the area of Glyfada and consists
            of three unique apartments and a penthouse. The design has a modern
            architecture style with curved walls, large openings to get sunlight
            in the interior spaces and wooden features on the exterior.
          </p>
          <p>
            Our company was responsible for the interior and exterior 3D
            visualization of the whole building. We collaborated with the
            construction company to provide high-quality 3D renders of the
            project, which were used for sales and promotion.
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-widest pt-4">
            Project Year: 2022
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-0 pb-16 space-y-8">
        <ImagePlaceholder
          ratioClass="16x9"
          text="Grivas Render 1"
          src="https://placehold.co/1200x675/d3d3d3/555555?text=Grivas+Render+1"
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Grivas Render 2"
          src="https://placehold.co/1200x675/c0c0c0/444444?text=Grivas+Render+2"
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Grivas Render 3 Night"
          src="https://placehold.co/1200x675/808080/aaaaaa?text=Grivas+Render+3+Night"
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Grivas Render 4"
          src="https://placehold.co/1200x675/d3d3d3/555555?text=Grivas+Render+4"
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Grivas Render 5 Night"
          src="https://placehold.co/1200x675/808080/aaaaaa?text=Grivas+Render+5+Night"
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Grivas Render 6 Top View"
          src="https://placehold.co/1200x675/c0c0c0/444444?text=Grivas+Render+6+Top+View"
        />
      </section>

      {/* Footer Section (Consistent with previous pages) */}
      <footer className="bg-white pt-10 pb-16 text-center text-xs text-gray-500 border-t border-gray-100">
        <p className="mb-2">
          Find our work on{" "}
          <a href="#" className="font-semibold text-gray-700 hover:underline">
            Behance
          </a>{" "}
          and{" "}
          <a href="#" className="font-semibold text-gray-700 hover:underline">
            Instagram
          </a>
        </p>
        <p className="mb-2">halftonellc@gmail.com</p>
        <p>© 2022 by Halftone, LLC.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
