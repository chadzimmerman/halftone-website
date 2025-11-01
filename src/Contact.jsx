import React from "react";
import {
  Search,
  Heart,
  User,
  MoreHorizontal,
  Instagram,
  Mail,
} from "lucide-react";

// Helper component for image placeholders
const ImagePlaceholder = ({ ratioClass, text, src }) => {
  const defaultSrc = `https://placehold.co/${ratioClass}/3d3d3d/cccccc?text=${text.replace(
    / /g,
    "+"
  )}`;

  return (
    <div className={`w-full h-full bg-gray-900 overflow-hidden`}>
      <img
        src={src || defaultSrc}
        alt={text}
        className="w-full h-full object-cover"
        style={{ aspectRatio: ratioClass.replace("x", "/") }}
      />
    </div>
  );
};

// Main Application Component for "Contact"
const Contact = () => {
  // Styles for the specific khaki-like button color
  const khakiColor = "#a99878";

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Top Navigation Bar (Consistent with previous pages) */}
      <nav className="flex items-center justify-between px-6 sm:px-12 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-6">
          <span className="text-sm font-light tracking-[0.3em] text-gray-900">
            HALFTONE
          </span>
          <div className="flex items-center space-x-2 text-gray-500">
            {/* Social Icons matching the image */}
            <a href="#" aria-label="Instagram" className="hover:text-gray-900">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Email" className="hover:text-gray-900">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Search and Nav Links */}
        <div className="flex items-center space-x-6">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 text-sm border border-gray-300 focus:outline-none focus:border-gray-900 w-40"
            />
          </div>
          <a
            href="#"
            className="text-xs text-gray-700 hover:text-gray-900 hidden sm:block"
          >
            Home
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
        </div>
      </nav>
      {/* Adjusted Nav: Removed icons and used simple search box as per image */}

      {/* 1. Hero/Contact Card Section (The complex overlapping block) */}
      <section className="min-h-[500px] bg-gray-200">
        <div className="container mx-auto max-w-4xl relative pt-16 pb-16 px-4 sm:px-0">
          {/* Container for the overlapping image and text card */}
          <div className="relative w-full h-full md:h-[400px]">
            {/* Book Image (Top Left Offset) */}
            <div className="relative w-full h-[200px] md:w-[450px] md:h-[250px] md:absolute md:top-0 md:left-0 z-10 shadow-md">
              <ImagePlaceholder
                ratioClass="700x500"
                text="Design Book"
                src="https://placehold.co/700x500/3d3d3d/cccccc?text=Design+Book+on+Desk"
              />
            </div>

            {/* White Contact Card (Offset to the right and slightly below the image) */}
            <div className="relative mt-8 md:mt-0 md:ml-[35%] w-full md:w-[65%] bg-white shadow-xl md:absolute md:top-[15%] md:left-0 z-20">
              <div className="p-10 sm:p-12">
                <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-4">
                  Contact
                </h1>
                <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-xs">
                  We want to help you stand out from the crowd! Drop us a line
                  and let us know how we can bring your project to the next
                  level.
                </p>

                {/* Bottom Social Links in Card */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-gray-600"
                  >
                    <Instagram className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href="#"
                    aria-label="Email"
                    className="hover:text-gray-600"
                  >
                    <Mail className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Details and Form Section (Directly below the main hero area, integrated with the gray background) */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Details (Aligned vertically with the form) */}
          <div className="md:pr-8">
            <h2 className="text-xl font-light tracking-wider text-gray-900 mb-6">
              Contact Details
            </h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p>32 N Gould St</p>
              <p>Sheridan, WY 82801</p>
              <p className="pt-4">(307) 222-8093</p>
              <p>halftonellc@gmail.com</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-4">
              {/* Input fields as required by the image (small, thin border, uppercase labels) */}
              <div className="grid grid-cols-3 gap-3">
                {/* Labels */}
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-xs uppercase tracking-wider"
                >
                  First Name
                </label>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-xs uppercase tracking-wider"
                >
                  Last Name
                </label>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-xs uppercase tracking-wider"
                >
                  Email *
                </label>

                {/* Inputs */}
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-2 border border-gray-300 bg-white text-gray-800 text-sm col-span-1 focus:outline-none focus:ring-1 focus:ring-gray-400 -mt-2"
                />
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-2 border border-gray-300 bg-white text-gray-800 text-sm col-span-1 focus:outline-none focus:ring-1 focus:ring-gray-400 -mt-2"
                />
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-2 border border-gray-300 bg-white text-gray-800 text-sm col-span-1 focus:outline-none focus:ring-1 focus:ring-gray-400 -mt-2"
                />
              </div>

              <label
                htmlFor="message"
                className="block text-gray-700 text-xs uppercase tracking-wider pt-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              ></textarea>

              {/* Submit Button with the specific khaki background */}
              <button
                type="submit"
                className="w-full py-4 text-white text-sm tracking-wider uppercase hover:opacity-90 transition duration-200"
                style={{ backgroundColor: khakiColor }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section (Consistent with previous pages) */}
      <footer className="bg-white pt-10 pb-16 text-center text-xs text-gray-500 border-t border-gray-100">
        <p className="mb-2">
          Find our work on{" "}
          <a href="#" className="font-semibold text-gray-700 hover:underline">
            Behance
          </a>{" "}
          and{" "}
          <a href="#" className="font-semibold text-gray-700 hover:underline">
            Instagram
          </a>
        </p>
        <p className="mb-2">halftonellc@gmail.com</p>
        <p>© 2022 by Halftone, LLC.</p>
      </footer>
    </div>
  );
};

export default Contact;
