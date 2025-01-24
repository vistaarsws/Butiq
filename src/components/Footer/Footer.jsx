import xIcon from "../../assets/images/x.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import pintrestIcon from "../../assets/images/pinterest.svg";
import butiqLogo2 from "../../assets/images/Butiq-For-You-White.png";
import { Link } from "react-router-dom";

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
      <article>
        <h1>
          <span>Lets make</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="58"
              fill="none"
              strokeWidth="0.5"
              viewBox="0 0 14 13"
              className="Footer_arrow__kw0yI"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d="M1 5.816H.75v1.326h10.014l-4.008 3.907-.173.168.162.179.563.62.174.191.186-.18 5.506-5.37.184-.178-.184-.18L7.668.932l-.186-.18-.174.191-.563.62-.162.178.173.169 4.008 3.907H1Z"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </span>
        </h1>

        <h1>
          <span>something </span>
          <span className="textWrapper">
            {slides.map((slide, index) => (
              <span
                key={index}
                className={`slide ${index === currentSlide ? "showing" : ""}`}
              >
                {slide}
              </span>
            ))}
          </span>
        </h1>
      </article>

      <section>
        <div className="footerMain">
          <ul>
            <li>
              <strong>Speak to us</strong>
            </li>
            <li>+91 855-990-3790</li>
            <li>Hii@contactus.com</li>
            <li>
              2 Floor, Lorem, ipsum dolor, Lorem ipsum dolor amet, MP Nagar,
              Bhopal-462011
            </li>
          </ul>
          <ul>
            <li>
              <strong>Company</strong>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            {/* <li>
              <Link to="/careers">Careers</Link>
            </li> */}
          </ul>
        </div>
      </section>

      <div className="footerLast">
        <span>
          <img src={butiqLogo2} alt="" />
        </span>
        <span>© 2024 Made by SWS LLP</span>
        <span>
          <Link to="/privacyPolicy">Privacy Policy</Link>
        </span>
        <span className="iconsBox">
          <ul>
            <li>
              <a href="">
                <img src={xIcon} alt="X Icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={facebookIcon} alt="Facebook Icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={linkedinIcon} alt="Linkedin Icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={youtubeIcon} alt="Youtube Icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={instagramIcon} alt="Instagram Icon" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={pintrestIcon} alt="Pintrest Icon" />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
}
