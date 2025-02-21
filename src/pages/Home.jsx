import "../styles/Home.css";
import aboutImage from "../assets/images/coffeeIMg2.jpg";
import { useNavigate } from "react-router-dom";
import heroImage_1 from "../assets/images/heroBanner_1.jpg";
import heroImage_2 from "../assets/images/heroBanner_2.jpg";
import heroImage_3 from "../assets/images/heroBanner_3.jpg";
import companySlider from "../assets/images/Screenshot 2025-01-31 185949.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../assets/images/Vecto4.svg";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import butlerOnCallImg from "../assets/images/BUTLERONCALL.svg";
import regionalCuisineImg from "../assets/images/AUTHENTICREGIONALCUISINE.svg";
import PetsWelcomedImg from "../assets/images/PETSWELCOMEEVERYWHERE.svg";

// import hotel_5 from "../assets/images/hot5.avif";

import justForuImg from "../assets/images/premium_photo-1675039871605-eb156cc0575d.avif";

import hotel_1 from "../assets/images/WhatsApp13.09.17_f8b7c8f2.jpg";
import hotel_2 from "../assets/images/WhatsApp Image 2025-02-03 at 13.02.01_b674490agra.jpg";
import hotel_3 from "../assets/images/WhatsAppImage2025-02-0313.02.54_a1328233Benaras.jpg";
import hotel_4 from "../assets/images/WhatsAppImage2025-02-0313.08.39_c8c839Satpura.jpg";
import hotel_5 from "../assets/images/WhatsAppImage2025-02-03at13.15.42_8cd8c509Sheikhpura.jpg";
// import hotel_6 from "../assets/images/hotel6.jpg";
import airplaneIcon from "../assets/images/airplane-icon.png";

const testimonials = [
  {
    quote:
      "The Postcard Hotel has reset some of the default settings of the standard hotel experience.",
    author: "Condé Nast Traveller",
  },
  {
    quote:
      "A stylish luxury hotel in Thimphu’s northern outskirts is where illustrious Bhutanese and travellers alike are finding their happy place.",
    author: "Nat Geo Traveller India",
  },
  {
    quote:
      "As a hotelier, Kapil Chopra has spent two decades at the frontline of hospitality. Now he’s juicing all that experience to launch his own brand of luxury hotels.",
    author: "Condé Nast Traveller",
  },
  {
    quote:
      "We believe guests want to stay in a place where the hotel does the thinking for them, where they get the simple things right, yet offer fantastic spaces for them to relax, meet like-minded people and experience local culture.",
    author: "The Economic Times",
  },
  {
    quote:
      "The Postcard, as a brand, is more than just a chain of small hotels. It is a movement to bring back the old way to holiday, where you awaken to a new way of seeing with gimmick-free holidays that are effortlessly merged with local authentic experiences and regional vernacular design.",
    author: "Sunday Financial Express",
  },
];

import aboutVideo from "../assets/video/Amanjena.mp4";
import TestimonialSlider from "../components/Testimonials/Testimonials";

export default function Home() {
  const navigate = useNavigate();

  const parseCustomDate = (dateStr) => {
    // Remove ordinal suffixes
    const cleanDateStr = dateStr.replace(/(\d+)(th|st|nd|rd)/, "$1");
    // Convert to Date object
    return new Date(cleanDateStr);
  };

  const hotels = [
    { image: hotel_1, location: "The Ten", branch: "Bhopal" },
    { image: hotel_2, location: "The Ten", branch: "Agra" },
    { image: hotel_3, location: "Baheri Benaras", branch: "Benaras" },
    { image: hotel_4, location: "Kamti Kula", branch: "Satpura Tiger Reserve" },
    { image: hotel_5, location: "Amrai", branch: "Sheikhpura" },
    // { image: hotel_6, location: "Masseria", branch: "Bhopal" },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={leftArrow} alt="" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={leftArrow} alt="" />
      </div>
    );
  };

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow

    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settings_1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <main className="mainContainer">
        <section className="heroSection">
          <Slider {...settings}>
            <div>
              <figure>
                <img src={heroImage_1} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={heroImage_2} alt="" />
              </figure>
            </div>
            <div>
              <figure>
                <img src={heroImage_3} alt="" />
              </figure>
            </div>
          </Slider>
        </section>
        <section className="welcomeSection">
          <h2>Butiq Stays</h2>
          <p>
            Handpicked spaces that curate unique and personalised experiences
            for you all across India. Each brings a different colour of
            experience, yet works on our same guiding principle at its core - to
            combine art, nature, and wellness. BUTIQ Stays are crafted for the
            evolved travellers who prefer serene indulgence, and solitude away
            from the frenzy of life. You will find yourself enveloped in lush
            landscapes, savoring royal or tribal cuisines, exploring life and
            culture - and engaging in transformative wellness experiences that
            rejuvenate your mind, body, and spirit.
          </p>
          <article>
            <div>
              <figure>
                <img src={butlerOnCallImg} alt="" />
              </figure>{" "}
              <p>BUTLER ON CALL</p>
            </div>
            <div>
              <figure>
                <img src={regionalCuisineImg} alt="" />
              </figure>{" "}
              <p>AUTHENTIC REGIONAL CUISINE</p>
            </div>
            <div>
              <figure>
                <img src={PetsWelcomedImg} alt="" />
              </figure>{" "}
              <p>PETS WELCOME  EVERYWHERE</p>
            </div>
          </article>
        </section>

        <section className="video_container">
          <video autoPlay muted loop>
            <source src={aboutVideo} type="video/mp4" />
          </video>
        </section>

        <div className="bg-gray-100 flex items-center justify-center my-[5rem]">
          <TestimonialSlider
            testimonials={testimonials}
            autoplaySpeed={3000}
            showArrows={true}
          />
        </div>

        <section style={{}}>
          <h2
            style={{
              margin: "3rem auto 0rem",
              textAlign: "center",
              fontSize: "22px",
            }}
          >
            DESTINATIONS
          </h2>
          <article className="locations_container">
            <Slider {...settings_1}>
              {hotels.map((hotel, index) => {
                return (
                  <div key={index}>
                    <figure>
                      <img src={hotel.image} alt="Hotel" />
                      <div>
                        {/* <p>{hotel.location.toUpperCase()}</p> */}
                        <span>{hotel.branch.toUpperCase()}</span>
                      </div>
                    </figure>
                  </div>
                );
              })}
            </Slider>
          </article>
        </section>
        <section className="aboutSection">
          <article>
            <h1> EXPERIENCES</h1>
            <p>
              What’s better than a vacation? A vacation that aligns with
              multiple activities of your interests. We offer tailor-made
              holiday experiences that allow you to explore a city with the lens
              you wish to. For the curious kind of travellers who have multiple
              hobbies, dive into this exploration of art, food, history and
              leisure - in a way that is truly yours.
            </p>
            <div>
              <span
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "0.3rem",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                EXPLORE
              </span>
            </div>
          </article>
          <figure
            style={{
              height: "80vh",
              overflow: "hidden",
              width: "59vw",
              display: "flex",
              marginLeft: "auto",
            }}
          >
            <img src={aboutImage} alt="Abstract" height="100%" width="100%" />
          </figure>
        </section>
      </main>
    </>
  );
}
