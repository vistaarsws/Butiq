import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Living from "./pages/Living";
import Residences from "./pages/Residences";
import Experiences from "./pages/Experiences";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import { useEffect, useState } from "react";

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
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/residences" element={<Residences />} />
      </Routes>
      <Footer />
    </>
  );
}
