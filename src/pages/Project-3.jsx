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

const PortfolioPage3 = () => {
  const imageBase = "assets/Halftone-2026/DARUL_HUDA_MASJID_mosque";

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      <title>Darul Huda Masjid Mosque Visualization | Halftone LLC Archviz</title>
      <meta name="description" content="Photorealistic exterior 3D renders of the Darul Huda Masjid mosque in Georgia. Religious architecture visualization by Halftone LLC for AMA / Abaan Ali." />
      <link rel="canonical" href="https://halftonellc.com/darul-huda-masjid-mosque" />
      <meta property="og:title" content="Darul Huda Masjid Mosque Visualization | Halftone LLC Archviz" />
      <meta property="og:url" content="https://halftonellc.com/darul-huda-masjid-mosque" />
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Darul Huda <br /> Masjid.
          </h1>
          <p className="text-sm text-gray-600">
            Religious Architecture Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Georgia
          </p>
          <p className="leading-relaxed">
            Visualization project of a Mosque located in Georgia.
          </p>
          <div className="pt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Type:</span> Exterior
            </p>
            <p>
              <span className="font-medium text-gray-900">Renders:</span>{" "}
              Halftone, LLC
            </p>
            <p>
              <span className="font-medium text-gray-900">Architecture:</span>{" "}
              AMA / Abaan Ali
            </p>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest pt-4">
            Project Year: 2025
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 sm:px-0 pb-16 space-y-12">
        <ImagePlaceholder
          ratioClass="16x9"
          text="Darul Huda Masjid Mosque"
          src={`./${imageBase}/DARUL_HUDA_MASJID.jpg`}
        />
      </section>
    </div>
  );
};

export default PortfolioPage3;
