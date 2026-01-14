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

const PortfolioPage9 = () => {
  // Folder path for Office Building
  const imageBase = "assets/Halftone-2026/Office_Building/JPEG";

  // Generates array ["VIEW_1", "VIEW_2", ..., "VIEW_8"]
  const views = Array.from({ length: 7 }, (_, i) => `VIEW_${i + 1}`);

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Moscow <br /> Business Center.
          </h1>
          <p className="text-sm text-gray-600">
            Commercial Architectural Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Moscow, Russia
          </p>
          <p className="leading-relaxed">
            A comprehensive visualization study for a contemporary office
            complex in Moscow. Developed in collaboration with Studio-TA.
          </p>
          <div className="pt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Type:</span>{" "}
              Commercial Exterior
            </p>
            <p>
              <span className="font-medium text-gray-900">Architects:</span>{" "}
              Studio-TA
            </p>
            <p>
              <span className="font-medium text-gray-900">Renders:</span>{" "}
              Halftone, LLC
            </p>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest pt-4">
            Project Year: 2022
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-0 pb-16 space-y-12">
        {views.map((viewName) => (
          <ImagePlaceholder
            key={viewName}
            ratioClass="16x9"
            text={`Office Building Moscow - ${viewName}`}
            // Using the ./ fix for GitHub Pages
            src={`./${imageBase}/${viewName}.jpg`}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage9;
