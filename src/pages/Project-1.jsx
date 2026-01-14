import React from "react";

const ImagePlaceholder = ({ ratioClass, text, src }) => {
  return (
    <div className="w-full bg-gray-100 overflow-hidden">
      <img
        src={src}
        alt={text}
        loading="lazy"
        className="w-full h-auto object-cover"
        style={{ aspectRatio: ratioClass.replace("x", "/") }}
        // Fallback to placeholder if image is missing
        onError={(e) => {
          e.target.src = `https://placehold.co/${ratioClass}/cccccc/3d3d3d?text=Image+Not+Found`;
        }}
      />
    </div>
  );
};

const PortfolioPage1 = () => {
  // 1. The path starts from /assets/ because 'public' is the root
  const imageBase =
    "assets/Halftone-2026/Ali_Abaan_Residential_Neighborhood_Texas_1";

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="container mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-light mb-4">Residential Neighborhood</h1>
        <p className="text-sm text-gray-600">Location: Houston, TX</p>
        <p className="leading-relaxed mt-4">Visualization project for AMA.</p>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto max-w-4xl px-4 pb-16 space-y-12">
        {/* 2. Use the short path + the filename. No special encoding needed locally */}
        <ImagePlaceholder
          ratioClass="16x9"
          text="Exterior View 1"
          src={`./${imageBase}/exterior_view_1_Texas.JPG`}
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Exterior View 2"
          src={`./${imageBase}/exterior_view_2_Texas.JPG`}
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Exterior View 3"
          src={`./${imageBase}/exterior_view_3_Texas.JPG`}
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Interior View 1"
          src={`./${imageBase}/interior_view_1_Texas.jpg`}
        />
        <ImagePlaceholder
          ratioClass="16x9"
          text="Interior View 2"
          src={`./${imageBase}/interior_view_2_Texas.jpg`}
        />
      </section>
    </div>
  );
};

export default PortfolioPage1;
