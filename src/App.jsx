import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import PortfolioPage1 from "./pages/Project-1.jsx";
import PortfolioPage2 from "./pages/Project-2.jsx";
import PortfolioPage3 from "./pages/Project-3.jsx";
import PortfolioPage4 from "./pages/Project-4.jsx";
import PortfolioPage5 from "./pages/Project-5.jsx";
import PortfolioPage6 from "./pages/Project-6.jsx";
import PortfolioPage7 from "./pages/Project-7.jsx";
import PortfolioPage8 from "./pages/Project-8.jsx";
import PortfolioPage9 from "./pages/Project-9.jsx";
import PortfolioPage10 from "./pages/Project-10.jsx";
import PortfolioPage11 from "./pages/Project-11.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/texas-neighborhood-1" element={<PortfolioPage1 />} />
        <Route path="/texas-neighborhood-2" element={<PortfolioPage2 />} />
        <Route path="/darul-huda-masjid-mosque" element={<PortfolioPage3 />} />
        <Route path="/greek-villa" element={<PortfolioPage4 />} />
        <Route path="/pine-woods" element={<PortfolioPage5 />} />
        <Route path="/california-interior" element={<PortfolioPage6 />} />
        <Route path="/mariya-villa" element={<PortfolioPage7 />} />
        <Route path="/portland-residence" element={<PortfolioPage8 />} />
        <Route path="/office-1" element={<PortfolioPage9 />} />
        <Route path="/office-2" element={<PortfolioPage10 />} />
        <Route path="/scandinavian-house" element={<PortfolioPage11 />} />
      </Routes>
    </Layout>
  );
}

export default App;
