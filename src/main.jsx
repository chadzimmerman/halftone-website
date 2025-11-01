import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import HowItWorks from "./HowItWorks.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import PortfolioPage from "./PortfolioPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <HowItWorks />
    <About />
    <Contact />
    <PortfolioPage />
  </StrictMode>
);
