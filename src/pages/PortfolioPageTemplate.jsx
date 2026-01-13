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
    </div>
  );
};

export default PortfolioPage;
