import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Living from "./pages/Living";
import Offers from "./pages/Offers";
import Destinations from "./pages/Destinations";
import Experience from "./pages/Experience";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

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
        <Route path="/living" element={<Living />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  );
}
