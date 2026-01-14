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

const PortfolioPage7 = () => {
  // Folder path for Mariya Podryadova Villa
  const imageBase = "assets/Halftone-2026/Mariya_Podryadova_Villa";

  // Array of specific Cyrillic filenames provided
  const images = [
    "Мария_Подрядова_Частная_вилла_Вид_1.jpg",
    "Мария_Подрядова_Частная_вилла_Вид_2.jpg",
    "Мария_Подрядова_Частная_вилла_Вид_3.jpg",
    "Мария_Подрядова_Частная_вилла_Вид_4.jpg",
    "Мария_Подрядова_Частная_вилла_Вид_5.jpg",
    "Мария_Подрядова_Частная_вилла_Вид_6.jpg",
    "Мария_Подрядова_Частная_вилла_Вид_7_светлее.jpg",
    "Мария_Подрядова_Частная_вилла_Вид_8.jpg",
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="container mx-auto max-w-4xl px-6 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light leading-tight tracking-wide text-gray-900 mb-4">
            Mariya <br /> Podryadova Villa.
          </h1>
          <p className="text-sm text-gray-600">
            Private Residence Visualization
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            Location: Moscow, Russia
          </p>
          <p className="leading-relaxed">
            An archviz project of a private villa for the architectural bureau
            of Maria Podryadova.
          </p>
          <div className="pt-2 space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-900">Type:</span> Exterior
            </p>
            <p>
              <span className="font-medium text-gray-900">Architecture:</span>{" "}
              Maria Podryadova
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
            text={`Mariya Podryadova Villa - View ${index + 1}`}
            // encodeURIComponent is critical here for the Russian characters
            src={`./${imageBase}/${encodeURIComponent(fileName)}`}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage7;
