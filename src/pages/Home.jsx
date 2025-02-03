import "../styles/Home.css";
import aboutImage from "../assets/images/coffeeIMg2.jpg";
import { useNavigate } from "react-router-dom";
import CustomSlider from "../components/Slider/CustomSlider";
import heroImage_1 from "../assets/images/herosection.avif";
import heroImage_2 from "../assets/images/hero2.avif";
import heroImage_3 from "../assets/images/hero3.avif";
import companySlider from "../assets/images/Screenshot 2025-01-31 185949.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../assets/images/Vecto4.svg";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import checkinImg from "../assets/images/time_c.png";
import breakfastImg from "../assets/images/breakfast_c.png";
import cuisineImg from "../assets/images/cuisine_c.png";

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
          <h2>WELCOME TO THE Butiq HOTEL</h2>
          <p>
            The Butiq Hotel is a collection of intimate luxury hotels hidden in
            holiday destinations across India and the world. Our hotels recall
            an era when holidays were sun-kissed and still, where the days were
            spent idling and flipping through old magazines against the backdrop
            of charming, quiet neighbourhoods. In that spirit, The Butiq Hotel
            combines luxury with simplicity, helping you retreat to a life
            you’ve always wanted - simple, un-hurried and filled with rich,
            little discoveries.
          </p>
          <article>
            <div>
              <figure>
                <img src={checkinImg} alt="" />
              </figure>{" "}
              <p>CHECK-IN & CHECK-OUT ANYTIME</p>
            </div>
            <div>
              <figure>
                <img src={breakfastImg} alt="" />
              </figure>{" "}
              <p>BREAKFAST ANYTIME</p>
            </div>
            <div>
              <figure>
                <img src={cuisineImg} alt="" />
              </figure>{" "}
              <p>AUTHENTIC REGIONAL CUISINE</p>
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
              Holidays makes explorers of all of us. And The Postcard Hotel
              opens up a world that's well beyond the standard tourist trail.
              Championing local culture and heritage, our hotels offer an
              intimate view of local living, encouraging you to explore old
              haunts with new eyes, and discover altogether new ones with a keen
              curiosity.
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
        <section style={{ marginTop: "5rem", marginInline: "2rem" }}>
          <img src={companySlider} alt="" />
        </section>

        {/* <section className="my-[8rem]">
          <CustomSlider
            slidesToShow={4}
            pauseOnHover={true}
            breakpointSlidesToShow={{ lg: 2, md: 2, sm: 1 }}
            mask={false}
            slideSpeed={10000}
            swipeToSlide={true}
            sliderName="testimonialSlider"
          />
        </section> */}
        {/* <section className="accordionSection">
          <div>
            <img src={justForuImg} alt="" />
          </div>
          <div className="mr-[2rem]">
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[65px] ">
              Just for You,
              <br /> We Have It All.
            </h1>
            <p>
              A peaceful Oasis surrounded by nature, perfect for unwinding and
              finding tranquility. A cozy Homestay offering personalized comfort
              and local hospitality, making you feel at home. Elegant Abodes are
              designed for luxury and relaxation, where every detail is crafted
              for your comfort. And a serene Retreat to rejuvenate your mind and
              body, with wellness experiences and peaceful surroundings that
              help you reconnect with yourself.
            </p>
          </div>
        </section> */}
        {/* <section className="qouteBox">
          <h2>World-Class Service!</h2>
          <span></span>
          <blockquote>
            At our luxurious retreat, we make every moment unforgettable with
            personalized service and exceptional experiences. Enjoy a dedicated
            butler, gourmet meals crafted by our chefs, and exclusive in-villa
            experiences like private yoga or a romantic dinner under the stars.
            Our clubhouse and estate dining offer the perfect settings for
            gatherings, while our event services ensure your special occasions
            are flawlessly planned. Here, every stay is more than just a getaway
            – it’s an opportunity to create cherished memories and indulge in
            the finest pleasures.
          </blockquote>
        </section> */}
      </main>
    </>
  );
}
