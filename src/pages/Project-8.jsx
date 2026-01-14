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

const PortfolioPage8 = () => {
  // Folder path for Portland Residence
  const imageBase =
    "assets/Halftone-2026/Neo_contemporary_residence_in_Portland";

  // List of specific filenames including those with spaces and "copy"
  const images = [
    "bird_view_1_1 copy.jpg",
    "bird_view_3_copy.jpg",
    "camera_1_1 copy.jpg",
    "camera_1_4.jpg",
    "camera_2_11 copy.jpg",
    "camera_3_1 copy.jpg",
    "camera_3_4 copy.jpg",
    "camera_5_11 copy.jpg",
    "camera_6_2 copy.jpg",
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Portland <br /> Residence.
          </h1>
          <p className="text-sm text-gray-600">
            Neo Contemporary Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Portland, OR
          </p>
          <p className="leading-relaxed">
            Visualization project of a neo contemporary residence located in
            Portland, Oregon for a private client.
          </p>
          <div className="pt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Type:</span> Exterior
            </p>
            <p>
              <span className="font-medium text-gray-900">Renders:</span>{" "}
              Halftone, LLC
            </p>
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-widest pt-4">
            Project Year: 2024
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-0 pb-16 space-y-12">
        {images.map((fileName, index) => (
          <ImagePlaceholder
            key={index}
            ratioClass="16x9"
            text={`Portland Residence - View ${index + 1}`}
            // encodeURIComponent handles the spaces in "copy.jpg"
            src={`./${imageBase}/${encodeURIComponent(fileName)}`}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage8;
