import React from "react";
import { Link } from "react-router-dom";

// Icons used in the design (simulated with lucide-react names)
import {
  Aperture,
  Globe,
  Scale,
  MessageSquare,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Grid,
  User,
} from "lucide-react";

// Utility component for the decorative headers (GAKS, ÖRÖMÜK)
const DecorativeHeader = ({ title }) => (
  <h2 className="text-4xl sm:text-5xl font-serif tracking-widest text-gray-900 my-10 uppercase text-center">
    {title}
  </h2>
);

// Helper component for image placeholders
const ImagePlaceholder = ({ ratioClass, text, src }) => {
  const defaultSrc = `https://placehold.co/${ratioClass}/555555/dddddd?text=${text.replace(
    / /g,
    "+"
  )}`;

  return (
    <div className={`w-full bg-gray-200 overflow-hidden rounded-sm shadow-lg`}>
      <img
        src={src || defaultSrc}
        alt={text}
        className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-[1.03]"
        style={{ aspectRatio: ratioClass.replace("x", "/") }}
      />
    </div>
  );
};

// Data structure for the GAKS section icons
const GaksFeatures = [
  { icon: Scale, label: "DESIGN", description: "Design concept development" },
  {
    icon: Aperture,
    label: "INTERIORS",
    description: "Your ideal living space",
  },
  {
    icon: Globe,
    label: "EXTERIORS",
    description: "Residential and commercial",
  },
  {
    icon: MessageSquare,
    label: "ANIMATIONS",
    description: "Next level motion graphics",
  },
];

// Component for the Icon/Link section
const FeatureIcon = ({ Icon, label, description }) => (
  <div className="flex flex-col items-center text-center p-4 group cursor-pointer hover:bg-stone-50 transition duration-150">
    <Icon className="w-6 h-6 text-gray-900 mb-2 group-hover:text-amber-700" />
    <span className="text-xs tracking-wider font-semibold mb-1">{label}</span>
    <span className="text-xs text-gray-500">{description}</span>
  </div>
);

// Main Application Component
const Home = () => {
  // Mock image data to replicate the layout structure
  const projectImages = [
    // Row 1 (2 columns)
    { ratio: "600x400", text: "Resort Housing", span: "col-span-1" },
    { ratio: "600x400", text: "Urban Apartments", span: "col-span-1" },

    // Row 2 (1 column wide, 1 column tall)
    {
      ratio: "800x450",
      text: "Forest Cabin",
      span: "col-span-2 md:col-span-1",
    },
    {
      ratio: "400x600",
      text: "Modern Interior",
      span: "col-span-2 md:col-span-1",
    },

    // Row 3 (2 columns wide)
    { ratio: "600x400", text: "Swimming Pool", span: "col-span-1" },
    { ratio: "600x400", text: "Suburban House", span: "col-span-1" },

    // Row 4 (2 columns, slightly offset look in the original)
    { ratio: "600x400", text: "Minimalist Kitchen", span: "col-span-1" },
    { ratio: "400x600", text: "Brick Facade", span: "col-span-1" },

    // Row 5 (2 columns)
    { ratio: "400x600", text: "Living Room View", span: "col-span-1" },
    { ratio: "600x400", text: "Office Space", span: "col-span-1" },

    // Row 6 (2 columns)
    { ratio: "600x400", text: "Nature Retreat", span: "col-span-1" },
    { ratio: "400x600", text: "Industrial Finish", span: "col-span-1" },

    // Row 7 (2 columns)
    { ratio: "600x400", text: "Rustic Bedroom", span: "col-span-1" },
    { ratio: "600x400", text: "Small Home", span: "col-span-1" },

    // Row 8 (2 columns)
    { ratio: "600x400", text: "Street View", span: "col-span-1" },
    { ratio: "400x600", text: "Mountain Vista", span: "col-span-1" },

    // Row 9 (2 columns - the final set before the footer)
    { ratio: "400x600", text: "High Rise", span: "col-span-1" },
    { ratio: "600x400", text: "Window Frames", span: "col-span-1" },
  ];

  const footerLinks = [
    {
      icon: Briefcase,
      text: "HOW IT WORKS",
      href: "/how-it-works",
    },
    { icon: User, text: "ABOUT", href: "/about" },
    { icon: Mail, text: "CONTACT", href: "/contact" },
    { icon: MapPin, text: "LOCATION", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* 1. Hero Section (Simulated with background image and overlay) */}
      <header className="relative h-[80vh] flex flex-col items-center justify-start pt-12 overflow-hidden">
        {/* Background image simulation */}
        <div className="absolute inset-0 z-0">
          <img
            //https://placehold.co/1200x800/222222/eeeeee?text=Forest+Architecture+Hero
            src="/assets/Halftone-2026/House in Pine Woods/Jpeg/view 1.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title Overlay */}
        <div className="relative z-10 w-full text-center">
          <h1 className="text-3xl font-light tracking-[0.5em] text-white">
            HALFTONE
          </h1>
        </div>
      </header>
      {/* 2. GAKS Section (Intro and Icon Menu) */}
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <DecorativeHeader title="Services" />

        <p className="text-center text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto mb-16">
          We are a professional team of practicing architects, designers and
          CG-artists. We offer our clients standout, photo-realistic and stylish
          static renders and animations, both in residential and commercial
          spheres.The spectrum of our 3D rendering services varies from creating
          indoor interior scenes to large-scale exterior streetscapes including
          facades, close-ups, perspective and axonometric views, volumetric
          floor plans, photo-montages, post-production, video processing etc. We
          are ready to create images and videos representing your upcoming
          designs in their best light and angles!
        </p>

        {/* Feature Icons (4-column grid for the icons) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-gray-200">
          {GaksFeatures.map((item, index) => (
            <FeatureIcon
              key={index}
              Icon={item.icon}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>
      </section>
      {/* 4. Separator / Our Projects Title */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px w-16 bg-gray-300"></div>
            <Grid className="w-5 h-5 text-gray-500" />
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          <h3 className="text-lg font-light tracking-widest text-gray-800">
            OUR PROJECTS
          </h3>
        </div>
      </section>
      {/* 3. Main Project Grid (Image Gallery) */}
      <section className="px-4 sm:px-12 pb-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {projectImages.map((img, index) => (
            <div key={index} className={img.span}>
              <ImagePlaceholder ratioClass={img.ratio} text={img.text} />
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer Section */}
      <footer className="bg-stone-100 pt-16 pb-24">
        <div className="container mx-auto max-w-4xl px-6">
          <DecorativeHeader title="HALFTONE" />

          <p className="text-center text-xs text-gray-500 max-w-2xl mx-auto mb-12">
            Halftone, LLC, 32 N Gould Street Sheridan, WY 82801
          </p>
          {/* Footer Navigation/Contact Links */}
          <div className="flex justify-center border-t border-b border-gray-300 divide-x divide-gray-300 max-w-lg mx-auto">
            {footerLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className="flex-1 text-center py-4 group hover:bg-stone-200 transition duration-150"
              >
                <item.icon className="w-5 h-5 text-gray-800 mx-auto mb-1 group-hover:text-amber-700" />
                <span className="text-xs tracking-wider font-light text-gray-700">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
