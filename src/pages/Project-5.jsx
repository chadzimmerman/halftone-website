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

const PortfolioPage5 = () => {
  const imageBase = "assets/Halftone-2026/House_in_Pine_Woods/Jpeg";

  const images = [
    "cam_9.jpg",
    "view_1.jpg",
    "view_2.jpg",
    "view_4.jpg",
    "view_5.jpg",
    "view_6.jpg",
    "view_7.jpg",
    "view_8.jpg",
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      <title>House in Pine Woods Toronto | Halftone LLC Archviz</title>
      <meta name="description" content="Photorealistic exterior 3D renders of a residential home in the pine woods near Toronto, Canada. Architectural visualization by Halftone LLC for Studio-TA." />
      <link rel="canonical" href="https://halftonellc.com/pine-woods" />
      <meta property="og:title" content="House in Pine Woods Toronto | Halftone LLC Archviz" />
      <meta property="og:url" content="https://halftonellc.com/pine-woods" />
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            House in <br /> Pine Woods.
          </h1>
          <p className="text-sm text-gray-600">
            Residential Exterior Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Toronto, Canada
          </p>
          <p className="leading-relaxed">
            Renders for a future residential project for a private client in
            Toronto, Canada.
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
        {images.map((fileName, index) => (
          <ImagePlaceholder
            key={index}
            ratioClass="16x9"
            text={`House in Pine Woods - ${fileName}`}
            src={`./${imageBase}/${fileName}`}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage5;
