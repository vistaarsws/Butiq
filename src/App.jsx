import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Work from "./pages/Work";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import JobApplication from "./pages/JobApplication";
import Clients from "./pages/Clients";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faq from "./pages/Faq";
import Blogs from "./pages/Blogs";
import Project from "./pages/Project";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// -----------------------------------------------------------------------Routing-----------------------------------------------------------------------------
function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:jobId" element={<JobApplication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/work/branding" element={<Branding />} />
        <Route path="/work/caseStudy" element={<CaseStudy />} />
        <Route path="/work/creativeHub" element={<CreativeHub />} />
        <Route
          path="/work/performanceMarketing"
          element={<PerformanceMarketing />}
        />
        <Route path="/work/production" element={<Production />} />
        <Route path="/work/uiUx" element={<UiUx />} /> */}
      </Routes>

      <Footer />
    </>
  );
}
