import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/halftone-website/" element={<Home />} />
        <Route path="/halftone-website/about" element={<About />} />
        <Route path="/halftone-website/contact" element={<Contact />} />
        <Route path="/halftone-website/how-it-works" element={<HowItWorks />} />
        <Route path="/halftone-website/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
