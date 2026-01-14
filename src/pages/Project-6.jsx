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
        onError={(e) => {
          e.target.src = `https://placehold.co/${ratioClass}/cccccc/3d3d3d?text=Image+Not+Found`;
        }}
      />
    </div>
  );
};

const PortfolioPage6 = () => {
  // Folder path for KWU California
  const imageBase = "assets/Halftone-2026/KWU_California";

  // Array of specific filenames provided
  const images = [
    "KWU_CALIFORNIA_RENDER_2_Night_Interior.jpg",
    "KWU_CALIFORNIA_RENDER_1_Day.jpg",
    "KWU_CALIFORNIA_RENDER_1_Night.jpg",
    "KWU_CALIFORNIA_RENDER_2_Day_Interior.jpg",
    "KWU_CALIFORNIA_RENDER_2_Evening_Interior.jpg",
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Cipriano <br /> ADU.
          </h1>
          <p className="text-sm text-gray-600">
            California Residential Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: California
          </p>
          <p className="leading-relaxed">
            Visualization project of a Cipriano ADU (Accessory Dwelling Unit)
            located in California for KWU Studio.
          </p>
          <div className="pt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Type:</span> Exterior
              & Interior
            </p>
            <p>
              <span className="font-medium text-gray-900">Architecture:</span>{" "}
              KWU Studio
            </p>
            <p>
              <span className="font-medium text-gray-900">Renders:</span>{" "}
              Halftone, LLC
            </p>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest pt-4">
            Project Year: 2025
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-0 pb-16 space-y-12">
        {images.map((fileName, index) => (
          <ImagePlaceholder
            key={index}
            ratioClass="16x9"
            text={`KWU California - ${fileName}`}
            // Note the use of encodeURIComponent to handle spaces in filenames for GitHub Pages
            src={`./${imageBase}/${encodeURIComponent(fileName)}`}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage6;
