// import React from "react";
// import {
//   Search,
//   Heart,
//   User,
//   MoreHorizontal,
//   Mail,
//   Phone,
//   MapPin,
//   Bold,
// } from "lucide-react";

// // Helper component for image placeholders
// const ImagePlaceholder = ({ ratioClass, text, src }) => {
//   const defaultSrc = `https://placehold.co/${ratioClass}/555555/dddddd?text=${text.replace(
//     / /g,
//     "+"
//   )}`;

//   return (
//     <div className={`w-full bg-gray-200 overflow-hidden`}>
//       <img
//         src={src || defaultSrc}
//         alt={text}
//         className="w-full h-full object-cover"
//         style={{ aspectRatio: ratioClass.replace("x", "/") }}
//       />
//     </div>
//   );
// };

// const processSteps = [
//   {
//     imageRatio: "16x9",
//     imageSrc: "step1.avif",
//   },
//   {
//     imageRatio: "16x9",
//     imageSrc: "step2.avif",
//   },
//   {
//     imageRatio: "16x9",
//     imageSrc: "step3.avif",
//   },
// ];

// // Main Application Component for "How It Works"
// const HowItWorks = () => {
//   return (
//     <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
//       {/* Main Page Title */}
//       <section className="container mx-auto max-w-4xl px-6 py-16 text-center">
//         <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-4">
//           How It Works
//         </h1>
//         <p className="text-sm text-gray-500">We'll take it from here.</p>
//       </section>

//       {/* Step 1: Consultation */}
//       <section className="container mx-auto max-w-6xl px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* Left Column: Image */}
//           <div className="relative">
//             <ImagePlaceholder
//               src={"/assets/step1.avif"}
//               ratioClass="800x1000"
//               text="Final Render A"
//             />
//           </div>

//           {/* Right Column: Text */}
//           <div className="md:pl-8 flex flex-col justify-center h-full">
//             <h2 className="text-2xl font-bold tracking-wide text-gray-900 mb-6">
//               Step 1: Consultation
//             </h2>
//             <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
//               <p>
//                 You reach out to us, and we'll discuss your product's individual
//                 needs, as well as assessing a production budget and time frame.
//                 After you send us a request for the estimated number of renders
//                 or animations, we will contact you within one business day;
//               </p>
//               <p>
//                 During the first consultation the customer will be asked to send
//                 us the technical specifications for the development of your
//                 project.
//               </p>
//               <p>Here's what we need: </p>
//               <li>
//                 The finalized plans and CAD drawings (floor plans, site and
//                 landscape plans, facades, sections, etc.), with dimensions or a
//                 3D-model (Autocad, Revit, Archicad, Sketch up, and so on.);
//               </li>
//               <li>
//                 Drawings of custom objects and shapes (if needed for the
//                 project);
//               </li>
//               <li>Conceptual collages, references or mood-boards;</li>
//               <li>
//                 Photos of the construction site, building or apartment and the
//                 surrounding area; ;
//               </li>
//               <li>
//                 Links to any preferable finishing materials, pieces of furniture
//                 and specific manufacturers (if you have any)
//               </li>
//               <p>
//                 Our rate starts at <b>$299 per render</b>, and takes around 2-3
//                 weeks per project.*{" "}
//               </p>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Step 2: Working Process */}
//       <section className="container mx-auto max-w-6xl px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* Left Column: Text */}
//           <div className="md:pr-8 flex flex-col justify-center h-full order-2 md:order-1">
//             <h2 className="text-2xl font-bold tracking-wide text-gray-900 mb-6">
//               Step Two: Working Process
//             </h2>
//             <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
//               <li>
//                 We begin the first week of production by building a full scale
//                 3D-scene of your project from the plans and models you provided,
//                 along with rough sketches of angles and designs of the art
//                 direction for your approval;
//               </li>
//               <li>
//                 The first-round draft renders are made in 1200 pixel-format on
//                 the largest edge;
//               </li>
//               <li>
//                 Next, the customer recommends any necessary edits. The cost of
//                 two edits is included for no extra cost, and the rate for any
//                 further modifications beyond these are 30% of each render price.
//                 All client recommended edits must be listed in a single
//                 document. The layout changes are not considered as edits.
//               </li>
//             </ul>
//           </div>

//           {/* Right Column: Image */}
//           <div className="order-1 md:order-2">
//             <ImagePlaceholder ratioClass="800x1200" text="Working Process A" />
//           </div>
//         </div>
//       </section>

//       {/* Step 3: Final Proof & Render */}
//       <section className="container mx-auto max-w-6xl px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* Left Column: Image */}
//           <div className="relative">
//             <ImagePlaceholder ratioClass="800x1000" text="Final Render A" />
//           </div>

//           {/* Right Column: Text */}
//           <div className="md:pl-8 flex flex-col justify-center h-full">
//             <h2 className="text-2xl font-bold tracking-wide text-gray-900 mb-6">
//               Step 3: Final Proof & Render
//             </h2>
//             <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
//               <li>
//                 This is the most fun step: seeing the final product come to
//                 life! Another 1-2 weeks will pass staying in constant contact to
//                 make sure you are satisfied thoroughly with the entire project
//                 through every phase of development. Final renders are done from
//                 2000 pixel-format.
//               </li>
//               <li>
//                 Once we have exceeded your expectations, we will finalize your
//                 project and commence rendering the final, highest quality
//                 version of the visualization which will be set to your
//                 individual specifications. We will deliver them to you on-time,
//                 on-budget and with our own personal <b>"Thank you!"</b>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Get in Touch Section */}
//       <section className="bg-rose-200 px-6 sm:px-12 py-20 mt-12">
//         <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Column: Contact Info */}
//           <div>
//             <h2 className="text-3xl font-light tracking-wide text-gray-900 mb-6">
//               Get in touch
//             </h2>
//             <p className="text-sm text-gray-700 mb-4">
//               32 N Gould St Sheridan, WY 82801
//             </p>
//             <p className="text-sm text-gray-700 mb-4">307-222-8093</p>
//             <p className="text-sm text-gray-700 mb-8">halftonellc@gmail.com</p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
//               >
//                 <Mail className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
//               >
//                 <Phone className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
//               >
//                 <MapPin className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* Right Column: Contact Form */}
//           <div>
//             <form className="space-y-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
//               />
//               <textarea
//                 placeholder="Message"
//                 rows="5"
//                 className="w-full p-3 border border-gray-300 bg-white text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="px-8 py-3 bg-gray-900 text-white text-sm tracking-wider uppercase hover:bg-gray-700 transition duration-200"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HowItWorks;
import React from "react";
import {
  Search,
  Heart,
  User,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Bold,
} from "lucide-react";

// Helper component for image placeholders
const ImagePlaceholder = ({ ratioClass, text, src }) => {
  // We are now assuming the 'src' is a public path (e.g., /assets/step1.avif)
  const defaultSrc = `https://placehold.co/${ratioClass}/555555/dddddd?text=${text.replace(
    / /g,
    "+"
  )}`;

  return (
    <div className={`w-full bg-gray-200 overflow-hidden rounded-md shadow-md`}>
      <img
        // Using the provided 'src' (which should be the public path)
        src={src || defaultSrc}
        alt={text}
        className="w-full h-full object-cover"
        style={{ aspectRatio: ratioClass.replace("x", "/") }}
      />
    </div>
  );
};

// --- CENTRALIZED DATA STRUCTURE ---
// Note: Changed image paths to use the reliable public folder reference (e.g., /assets/step1.avif)
const processSteps = [
  {
    title: "Step 1: Consultation",
    imagePath: "/assets/step1.avif",
    imageRatio: "800x1000",
    imageAlt: "Consultation Sketch",
    content: (
      <>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
          <p>
            You reach out to us, and we'll discuss your product's individual
            needs, as well as assessing a production budget and time frame.
            After you send us a request for the estimated number of renders or
            animations, we will contact you within one business day;
          </p>
          <p>
            During the first consultation the customer will be asked to send us
            the technical specifications for the development of your project.
          </p>
          <p>Here's what we need: </p>
          <li>
            The finalized plans and CAD drawings (floor plans, site and
            landscape plans, facades, sections, etc.), with dimensions or a
            3D-model (Autocad, Revit, Archicad, Sketch up, and so on.);
          </li>
          <li>
            Drawings of custom objects and shapes (if needed for the project);
          </li>
          <li>Conceptual collages, references or mood-boards;</li>
          <li>
            Photos of the construction site, building or apartment and the
            surrounding area;
          </li>
          <li>
            Links to any preferable finishing materials, pieces of furniture and
            specific manufacturers (if you have any)
          </li>
          <p>
            Our rate starts at <b>$299 per render</b>, and takes around 2-3
            weeks per project.*{" "}
          </p>
        </ul>
      </>
    ),
  },
  {
    title: "Step Two: Working Process",
    imagePath: "/assets/step2.avif",
    imageRatio: "800x1200",
    imageAlt: "Working Process Draft",
    content: (
      <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
        <li>
          We begin the first week of production by building a full scale
          3D-scene of your project from the plans and models you provided, along
          with rough sketches of angles and designs of the art direction for
          your approval;
        </li>
        <li>
          The first-round draft renders are made in 1200 pixel-format on the
          largest edge;
        </li>
        <li>
          Next, the customer recommends any necessary edits. The cost of two
          edits is included for no extra cost, and the rate for any further
          modifications beyond these are 30% of each render price. All client
          recommended edits must be listed in a single document. The layout
          changes are not considered as edits.
        </li>
      </ul>
    ),
  },
  {
    title: "Step 3: Final Proof & Render",
    imagePath: "/assets/step3.avif",
    imageRatio: "800x1000",
    imageAlt: "Final Render",
    content: (
      <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm leading-relaxed">
        <li>
          This is the most fun step: seeing the final product come to life!
          Another 1-2 weeks will pass staying in constant contact to make sure
          you are satisfied thoroughly with the entire project through every
          phase of development. Final renders are done from 2000 pixel-format.
        </li>
        <li>
          Once we have exceeded your expectations, we will finalize your project
          and commence rendering the final, highest quality version of the
          visualization which will be set to your individual specifications. We
          will deliver them to you on-time, on-budget and with our own personal{" "}
          <b>"Thank you!"</b>
        </li>
      </ul>
    ),
  },
];

// Main Application Component for "How It Works"
const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900 antialiased">
      {/* Main Page Title */}
      <section className="container mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-4xl font-light tracking-wide text-gray-900 mb-4">
          How It Works
        </h1>
        <p className="text-sm text-gray-500">We'll take it from here.</p>
      </section>

      {/* --- Steps Iteration --- */}
      {processSteps.map((step, index) => {
        // Determine if the image should be on the left (even index) or right (odd index)
        const isImageOnLeft = index % 2 === 0;

        // Base grid layout
        const gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-8 items-start";

        // Conditional ordering for text and image columns
        const imageColumnOrder = isImageOnLeft
          ? "order-1"
          : "order-2 md:order-2";
        const textColumnOrder = isImageOnLeft
          ? "order-2"
          : "order-1 md:order-1";

        return (
          <section
            key={index}
            className="container mx-auto max-w-6xl px-6 py-12"
          >
            <div className={gridClasses}>
              {/* Image Column */}
              <div className={`relative ${imageColumnOrder}`}>
                <ImagePlaceholder
                  src={step.imagePath} // Using the new public path
                  ratioClass={step.imageRatio}
                  text={step.imageAlt}
                />
              </div>

              {/* Text Column */}
              <div
                className={`md:pl-8 flex flex-col justify-center h-full ${textColumnOrder}`}
              >
                <h2 className="text-2xl font-bold tracking-wide text-gray-900 mb-6">
                  {step.title}
                </h2>
                {step.content}
              </div>
            </div>
          </section>
        );
      })}

      {/* Get in Touch Section */}
      <section className="bg-[rgb(191,148,141)] px-6 sm:px-12 py-20 mt-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-light tracking-wide text-gray-900 mb-6">
              Get in touch
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              32 N Gould St Sheridan, WY 82801
            </p>
            <p className="text-sm text-gray-700 mb-4">307-222-8093</p>
            <p className="text-sm text-gray-700 mb-8">halftonellc@gmail.com</p>
            <div className="flex space-x-4">
              <a
                href="mailto:halftonellc@gmail.com"
                className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+13072228093"
                className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-150"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/?q=32 N Gould St Sheridan, WY 82801"
                target="_blank"
                rel="noopener noreferrer"
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
    </div>
  );
};

export default HowItWorks;
