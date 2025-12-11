import React from "react";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./pages/Works.jsx";
import Services from "./pages/Services.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  useSmoothScroll();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
