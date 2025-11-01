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

// Main Application Component for "How It Works"
const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Top Navigation Bar (Replicated from the first page's theme) */}
      <nav className="flex items-center justify-between px-6 sm:px-12 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-6">
          <span className="text-sm font-light tracking-[0.3em] text-gray-900">
            HALFTONE
          </span>
          <div className="hidden sm:flex items-center space-x-2 text-gray-500">
            <Search className="w-4 h-4" />
            <span className="text-xs">Search</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
          >
            Work
          </a>
          <a
            href="#"
            className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
          >
            About
          </a>
          <a
            href="#"
            className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
          >
            More
          </a>
          <Heart className="w-4 h-4 text-gray-500 cursor-pointer" />
          <User className="w-4 h-4 text-gray-500 cursor-pointer" />
          <MoreHorizontal className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
      </nav>

      {/* Main Page Title */}
      <section className="container mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-4">
          How It Works
        </h1>
        <p className="text-sm text-gray-500">WE GUIDE YOU HOME</p>
      </section>

      {/* Step 1: Consultation */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder ratioClass="400x500" text="Consultation A" />
              <ImagePlaceholder ratioClass="400x500" text="Consultation B" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder ratioClass="400x300" text="Consultation C" />
              <ImagePlaceholder ratioClass="400x300" text="Consultation D" />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="md:pl-8 flex flex-col justify-center h-full">
            <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-6">
              Step 1: Consultation
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
              <li>
                We begin with a comprehensive consultation to understand your
                vision, needs, and preferences. Our team listens intently to
                gather all necessary details, ensuring we align with your
                aspirations.
              </li>
              <li>
                During this phase, we discuss design styles, functional
                requirements, budget considerations, and project timelines. We
                aim to create a clear roadmap for your architectural journey.
              </li>
              <li>
                Our experts provide initial insights and recommendations,
                leveraging their extensive experience to offer innovative
                solutions and creative ideas that enhance your project's
                potential.
              </li>
              <li>
                We review preliminary concepts and explore various
                possibilities, ensuring a collaborative approach where your
                input is valued at every stage. This iterative process refines
                the initial brief into a concrete plan.
              </li>
              <li>
                A detailed project proposal is then prepared, outlining the
                scope of work, deliverables, and a transparent cost breakdown.
                We ensure complete clarity before moving to the next step.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 2: Working Process */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Text */}
          <div className="md:pr-8 flex flex-col justify-center h-full order-2 md:order-1">
            <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-6">
              Step Two: Working Process
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
              <li>
                Following consultation, our design team commences with detailed
                architectural drawings and 3D modeling. We transform concepts
                into tangible designs, focusing on aesthetics and functionality.
              </li>
              <li>
                Regular client reviews are scheduled to present progress, gather
                feedback, and implement revisions. Your satisfaction is
                paramount, and we ensure transparency throughout the design
                evolution.
              </li>
              <li>
                We integrate sustainable practices and innovative technologies
                into our designs, ensuring energy efficiency and environmental
                responsibility without compromising on style or comfort.
              </li>
              <li>
                Our project managers coordinate with engineers, contractors, and
                suppliers, overseeing every aspect of the build. We maintain
                strict quality control and adhere to timelines and budgets.
              </li>
              <li>
                Permit applications and regulatory compliance are handled by our
                experienced team, streamlining the approval process and ensuring
                a smooth transition from design to construction.
              </li>
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 md:order-2">
            <ImagePlaceholder ratioClass="800x1200" text="Working Process A" />
          </div>
        </div>
      </section>

      {/* Step 3: Final Proof & Render */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Image */}
          <div className="relative">
            <ImagePlaceholder ratioClass="800x1000" text="Final Render A" />
          </div>

          {/* Right Column: Text */}
          <div className="md:pl-8 flex flex-col justify-center h-full">
            <h2 className="text-2xl font-light tracking-wide text-gray-900 mb-6">
              Step 3: Final Proof & Render
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
              <li>
                The penultimate stage involves presenting high-fidelity 3D
                renders and virtual walkthroughs. This allows you to experience
                your future space with exceptional realism and detail.
              </li>
              <li>
                We provide comprehensive material boards and finish selections,
                ensuring every detail, from flooring to fixtures, meets your
                aesthetic and functional requirements.
              </li>
              <li>
                Any final adjustments or refinements are made based on your
                feedback, ensuring the design perfectly reflects your vision and
                is ready for execution.
              </li>
              <li>
                Detailed construction documents are finalized, providing all
                necessary specifications for the build team. These documents are
                meticulously prepared to avoid any discrepancies during
                construction.
              </li>
              <li>
                Once approved, the design is ready for implementation, marking
                the successful completion of the design phase and the
                commencement of bringing your architectural dreams to life.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-rose-200 px-6 sm:px-12 py-20 mt-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-gray-900 mb-6">
              Get in touch
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Visit us: 123 Architecture Lane, Building A, New York, NY 10001
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Call us: +1 (555) 123-4567
            </p>
            <p className="text-sm text-gray-700 mb-8">
              Email us: info@halftone.com
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              ></textarea>
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white text-sm tracking-wider uppercase hover:bg-gray-700 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white pt-10 pb-16 text-center text-xs text-gray-500">
        <p className="mb-2">Find our work on Behance, etc.</p>
        <p className="mb-2">info@halftone.com</p>
        <p>© 2024 by Halftone, LLC.</p>
      </footer>
    </div>
  );
};

export default HowItWorks;
