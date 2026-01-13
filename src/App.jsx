import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import PortfolioPage1 from "./pages/Project-1.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/texas-neighborhood-1" element={<PortfolioPage1 />} />
      </Routes>
    </Layout>
  );
}

export default App;
