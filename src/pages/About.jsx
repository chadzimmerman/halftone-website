import React from "react";
import {
  Search,
  Heart,
  User,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Helper component for image placeholders
const ImagePlaceholder = ({ ratioClass, text, src }) => {
  const defaultSrc = `https://placehold.co/${ratioClass}/555555/dddddd?text=${text.replace(
    / /g,
    "+"
  )}`;

  return (
    <div className={`w-full bg-gray-200 overflow-hidden`}>
      <img
        src={src || defaultSrc}
        alt={text}
        className="w-full h-full object-cover"
        style={{ aspectRatio: ratioClass.replace("x", "/") }}
      />
    </div>
  );
};

// Component for the Halftone Founder Images
const HalftoneFounder = ({
  name,
  title,
  bio,
  imageRatio,
  imageText,
  imageSrc,
}) => (
  <div className="flex flex-col items-start space-y-4 p-4">
    {/* Image container: using a mock B&W halftone effect */}
    <div className="w-full h-auto bg-gray-900 border-2 border-gray-900 overflow-hidden">
      <ImagePlaceholder
        ratioClass={imageRatio}
        text={imageText}
        src={imageSrc}
      />
    </div>
    <div className="w-full">
      <h3 className="text-xl font-medium tracking-wide text-gray-900">
        {name}
      </h3>
      <p className="text-sm font-light text-gray-500 mb-4">{title}</p>
      <p
        className="text-xs text-gray-700 leading-relaxed max-w-sm"
        style={{ letterSpacing: "0.01em" }}
      >
        {bio}
      </p>
    </div>
  </div>
);

// Main Application Component for "About Us"
const About = () => {
  // Mock data for founders
  const founders = [
    {
      name: "Lana",
      title: "Lead Architect / 3D Artist",
      bio: "I have been both an architect and a 3D-visualizer for over 10 years, and I absolutely love getting to expand my skills in both. Working as an architect prepared me to not only to make exteriors for major companies all over the world but to help tell the stories I want to tell along the way. I love drawing, illustrating books and designing facades! ",
      imageRatio: "400x500",
      imageText: "Lana",
      imageSrc: "/assets/lana-halftone.avif",
    },
    {
      name: "Chad",
      title: "Technology and Systems Architect",
      bio: "My passion is enabling architecture and visual art through digital tools — helping ideas move from concept to reality. I love solving problems, supporting people, and building infrastructure that makes creative work easier. Outside of the studio, I enjoy filmmaking and writing books as personal creative outlets.",
      imageRatio: "400x500",
      imageText: "Chad",
      imageSrc: "/assets/chad-halftone.avif",
    },
    {
      name: "Lisa",
      title: "Architect / Interior Designer",
      bio: "I have been an architect and 3D-artist in Europe for over nine years. I bring with me all my years of interior design experience from lofty city apartments to rural cabin renovations and everything in-between. I enjoy Asian culture, traveling and creating stylized renders!",
      imageRatio: "400x500",
      imageText: "Lisa",
      imageSrc: "/assets/lisa-halftone.avif",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* 1. Bio Header Section */}
      <section className="container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center sm:items-start sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16">
        {/* Left Column (Text) */}
        <div className="flex-1 max-w-md">
          <h1 className="text-6xl font-black tracking-tighter mb-8">BIO</h1>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p className="font-semibold">WHO WE ARE</p>
              <p>Architectural Bureau</p>
              <p>Interior Design Firm</p>
              <p>Animation Studio</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">WHERE WE WORK</p>
              <p>Denver</p>
              <p>Moscow</p>
              <p>Fukuoka</p>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-700">
            <p className="font-semibold">WHAT WE DO</p>
            <p>Design & Planning</p>
            <p>Project Management</p>
            <p>Visualization</p>
            <p>Animation</p>
          </div>
        </div>

        {/* Right Column (Circular Image) */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-100 shadow-xl">
            <ImagePlaceholder
              ratioClass="800x800"
              text="Architectural Display"
              src={"assets/about-page-img.avif"}
            />
          </div>
        </div>
      </section>

      {/* 2. About Us Narrative Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Title */}
          <div className="md:pr-16">
            <h2 className="text-5xl font-black tracking-tighter text-gray-900 border-b-2 border-gray-900 inline-block pb-1">
              About Us
            </h2>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-wide text-gray-900">
                Who we are:
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                We are a professional team of practicing architects, designers
                and CG-artists. We offer our clients standout, photo-realistic
                and stylish static renders and animations, both in the
                residential and commercial spheres.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-wide text-gray-900">
                What we make:
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                The spectrum of our 3D architectural services varies from
                creating indoor interior scenes to large-scale exterior
                streetscapes including facades, close-ups, perspective and
                axonometric views, volumetric floor plans, photomontages,
                post-production, video processing and more. We are ready to
                create images and videos representing your upcoming designs in
                their best light and angles! Besides that, we provide modeling
                and design services for those needing a more complete project
                workup.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-wide text-gray-900">
                Why you need our services:
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                Our team is trusted by home builders, real estate agents,
                developers, architects and designers from around the world. Our
                goal is to develop the perfect render or 4k video of an
                architectural or interior project from simple 2D drawings or
                sketch models. Our clients will see the image of their concepts
                in different varieties, materials, color schemes and lighting
                scenarios. Beyond that, our professionals will showcase your
                ideas in the exclusive, artistic way it deserves. We will build
                an outstanding mood and atmosphere to breathe life into your
                project! Moreover, it is proven and guaranteed that our 3D
                products will generate more interest among your potential
                clients as well as for developers of commercial real estate.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-wide text-gray-900">
                Why us:
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                Each member of our team has a professional degree and many years
                of working experience in the fields of computer graphics,
                architecture, art and project management. We offer you our
                time-tested pipeline, large collection of professional 3D models
                and textures to guarantee an exceptional quality, outstanding
                service for a competitive price. We love what we do and we
                believe it shows in our work. We want to make your project
                outstanding. Thank you for considering the Halftone team, we
                can’t wait to begin bringing your dreams to life!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Founders Section */}
      <section className="container mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light tracking-widest text-gray-900 mb-2 uppercase">
            Meet Our Founders
          </h2>
          <p className="text-sm text-gray-500">OUR TEAM</p>
        </div>

        {/* Rest In Peace, Knyaz Myshkin */}

        {/* Founders Grid (Updated for 3 members) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 mx-auto max-w-5xl">
          {founders.map((founder, index) => (
            <HalftoneFounder
              key={index}
              name={founder.name}
              title={founder.title}
              bio={founder.bio}
              imageRatio={founder.imageRatio}
              imageText={founder.imageText}
              imageSrc={founder.imageSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
