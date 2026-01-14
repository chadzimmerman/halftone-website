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

const PortfolioPage11 = () => {
  // Folder path for Scandinavian House
  const imageBase = "assets/Halftone-2026/Scandinavian_house";

  // Specific filenames as provided (Mixing cases and the long ID filename)
  const images = [
    "3cb20c161190429.63c0ec349932d.jpg",
    "VIEW_1.jpg",
    "VIEW_2.jpg",
    "VIEW_3.jpg",
    "view_4.jpg",
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Scandinavian <br /> Retreat.
          </h1>
          <p className="text-sm text-gray-600">
            Nordic Residential Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Finland
          </p>
          <p className="leading-relaxed">
            A visualization project for a private residence in Finland,
            embodying the principles of Scandinavian design. The project
            showcases a minimalist aesthetic, utilizing natural light and
            organic materials to harmonize with the surrounding Nordic
            landscape.
          </p>
          <div className="pt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Type:</span> Private
              Residence
            </p>
            <p>
              <span className="font-medium text-gray-900">Client:</span> Private
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
            text={`Scandinavian House - ${fileName}`}
            src={`./${imageBase}/${fileName}`}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage11;
