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
const HalftoneFounder = ({ name, title, bio, imageRatio, imageText }) => (
  <div className="flex flex-col items-start space-y-4 p-4">
    {/* Image container: using a mock B&W halftone effect */}
    <div className="w-full h-auto bg-gray-900 border-2 border-gray-900 overflow-hidden">
      <ImagePlaceholder
        ratioClass={imageRatio}
        text={imageText}
        src={`https://placehold.co/${imageRatio}/1a1a1a/aaaaaa?text=${imageText.replace(
          / /g,
          "+"
        )}`}
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
      title: "Chief Designer",
      bio: "Lena manages the design studio and creative output. She brings over 15 years of experience in high-end residential and commercial architecture, specializing in sustainable, minimalist design principles.",
      imageRatio: "400x500",
      imageText: "Lena",
    },
    {
      name: "Chad",
      title: "Head of Operations",
      bio: "Jack oversees project execution and logistics, ensuring every project is delivered on time and within budget. His background in construction management provides robust technical oversight.",
      imageRatio: "400x500",
      imageText: "Jack",
    },
    {
      name: "Lisa",
      title: "Lead Architect",
      bio: "Sarah is responsible for initial concept generation and client liaison. Her passion lies in integrating modern technology with traditional building methods to create unique spaces.",
      imageRatio: "400x500",
      imageText: "Sarah",
    },
    {
      name: "Peter",
      title: "Financial Director",
      bio: "Ken handles all fiscal aspects of Halftone, from investment strategy to cost analysis. His expertise ensures the financial viability and long-term stability of the firm.",
      imageRatio: "400x500",
      imageText: "Ken",
    },
  ];

  return (
    // 1. REMOVED: <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased ">
    // 2. REMOVED: <nav className="...">...</nav> (Navigation Bar)
    <div className="bg-white text-gray-900">
      {/* 1. Bio Header Section */}
      <section className="container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center sm:items-start sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16">
        {/* Left Column (Text) */}
        <div className="flex-1 max-w-md">
          <h1 className="text-6xl font-black tracking-tighter mb-8">BIO</h1>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p className="font-semibold">WHO WE ARE</p>
              <p>Architecture Studio</p>
              <p>Interior Design Firm</p>
              <p>Real Estate Developer</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">WHERE WE WORK</p>
              <p>New York</p>
              <p>Los Angeles</p>
              <p>Miami</p>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-700">
            <p className="font-semibold">WHAT WE DO</p>
            <p>Design & Planning</p>
            <p>Project Management</p>
            <p>Investment Strategy</p>
            <p>Sustainability Consulting</p>
          </div>
        </div>

        {/* Right Column (Circular Image) */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-100 shadow-xl">
            <ImagePlaceholder
              ratioClass="800x800"
              text="Architectural Display"
              src={`https://placehold.co/800x800/222222/cccccc?text=Display+Image`}
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
                OUR VISION
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                Halftone LLC was founded on the belief that architecture should
                be a harmonious blend of form, function, and environment. We
                strive to create spaces that are not only aesthetically
                captivating but also deeply responsive to the needs of the
                inhabitants and the context of the location. Our projects
                emphasize natural light, clean lines, and durable, sustainable
                materials, ensuring enduring quality and minimal environmental
                impact. We view every design as a collaborative journey with the
                client.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-wide text-gray-900">
                DESIGN PHILOSOPHY
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                Our philosophy is rooted in minimalism and strategic simplicity.
                We pare down to the essential, focusing on the quality of space
                over quantity of detail. This approach allows the inherent
                beauty of the structure and the surrounding landscape to become
                the primary design elements. We integrate smart technology
                discreetly, enhancing usability without visual clutter. From
                concept to completion, we maintain an uncompromising focus on
                craftmanship and precision, delivering results that stand the
                test of time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-wide text-gray-900">
                PROJECT EXECUTION
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                We manage the entire project lifecycle in-house, from site
                acquisition and zoning approval to final construction oversight.
                This integrated approach ensures seamless communication,
                efficient problem-solving, and strict adherence to our high
                quality standards. Our project management team utilizes advanced
                tools for scheduling and budget control, providing clients with
                transparency and confidence. We pride ourselves on navigating
                complex regulatory environments to deliver unique, high-value
                assets.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black tracking-wide text-gray-900">
                CULTURE
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{ letterSpacing: "0.01em" }}
              >
                The Halftone culture is built on passion, professionalism, and
                continuous learning. Our team consists of licensed architects,
                interior designers, financial analysts, and construction experts
                who share a common commitment to design excellence. We foster a
                supportive and innovative environment where new ideas are
                welcomed and challenged constructively. This dynamic culture
                enables us to tackle diverse and ambitious projects while
                maintaining a boutique, client-focused approach.
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

        {/* Founders Grid (2x2 layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {founders.map((founder, index) => (
            <HalftoneFounder
              key={index}
              name={founder.name}
              title={founder.title}
              bio={founder.bio}
              imageRatio={founder.imageRatio}
              imageText={founder.imageText}
            />
          ))}
        </div>
      </section>

      {/* 3. REMOVED: Footer Section */}
      {/* 4. REMOVED: Final closing </div> for the top-level wrapper */}
    </div>
  );
};

export default About;
