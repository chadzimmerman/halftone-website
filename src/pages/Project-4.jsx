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

const PortfolioPage4 = () => {
  const imageBase = "assets/Halftone-2026/Greece_Villa/jpeg";

  const views = [
    "view_1",
    "view_2",
    "view_3",
    "view_4",
    "view_5",
    "view_6",
    "view_7",
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      <title>Greece Villa Mediterranean Exterior | Halftone LLC Archviz</title>
      <meta name="description" content="Photorealistic exterior 3D renders of a Mediterranean villa with rounded balconies in Thessaloniki, Greece. Architectural visualization by Halftone LLC for Studio-TA." />
      <link rel="canonical" href="https://halftonellc.com/greek-villa" />
      <meta property="og:title" content="Greece Villa Mediterranean Exterior | Halftone LLC Archviz" />
      <meta property="og:url" content="https://halftonellc.com/greek-villa" />
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Greece <br /> Villa.
          </h1>
          <p className="text-sm text-gray-600">
            Mediterranean Exterior Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Thessaloniki, Greece
          </p>
          <p className="leading-relaxed">
            Renders for a future residential project in the style of a
            Mediterranean villa with rounded balconies for a private client in
            Thessaloniki, Greece.
          </p>
          <div className="pt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Type:</span> Exterior
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
            Project Year: 2025
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 sm:px-0 pb-16 space-y-12">
        {views.map((viewName) => (
          <ImagePlaceholder
            key={viewName}
            ratioClass="16x9"
            text={`Greece Villa ${viewName}`}
            src={`./${imageBase}/${viewName}.jpg`}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage4;
