import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Living from "./pages/Living";
import Residences from "./pages/Residences";
import Experiences from "./pages/Experiences";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import { useEffect, useState } from "react";
import DestinationTemplate from "./components/Templates/Destination/DestinationTemplate";
import PartnerWithUs from "./pages/PatnerWithUs";
import Book from "./pages/Book";
import BookingCard from "./pages/BookingCard";


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
        <Route
          path="/destination/:location"
          element={<DestinationTemplate />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/residences" element={<Residences />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/book/rooms" element={<BookingCard />} />
      </Routes>
      <Footer />
    </>
  );
}
