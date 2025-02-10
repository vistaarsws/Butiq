import xIcon from "../../assets/images/x.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import pintrestIcon from "../../assets/images/pinterest.svg";
import butiqLogo2 from "../../assets/images/Butiq-For-You-White.png";
import { Link } from "react-router-dom";
import footerImg from "../../assets/images/Butiq-Footer1.png";
import "./Footer.css";
import { useState, useEffect } from "react";

export default function Footer() {
  const slides = ["we're all", "asked to", "do things", "we don't", "like"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 1000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);
  return (
    <footer>
      <figure>
        <img src={footerImg} alt="" />
      </figure>
    </footer>
  );
}
