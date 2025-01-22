import { useState } from "react";
import "../styles/Home.css";
import aboutImage from "../assets/images/pexels-pixabay-258154.jpg";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/Card/BlogCard/BlogCard";
import { blogs } from "../utils/Constant";
import CustomSlider from "../components/Slider/CustomSlider";
import heroImage_1 from "../assets/images/herosection.avif";
import heroImage_2 from "../assets/images/hero2.avif";
import heroImage_3 from "../assets/images/hero3.avif";
import Slider from "react-slick";

// import hotel_5 from "../assets/images/hot5.avif";

import justForuImg from "../assets/images/premium_photo-1675039871605-eb156cc0575d.avif";

import hotel_1 from "../assets/images/hotel1.jpg";
import hotel_2 from "../assets/images/hotel2.jpg";
import hotel_3 from "../assets/images/hotel3.jpg";
import hotel_4 from "../assets/images/hotel4.jpg";
import hotel_5 from "../assets/images/hotel5.avif";
import hotel_6 from "../assets/images/hotel6.jpg";

import aboutVideo from "../assets/video/Amanjena.mp4";

export default function Home() {
  const navigate = useNavigate();

  const parseCustomDate = (dateStr) => {
    // Remove ordinal suffixes
    const cleanDateStr = dateStr.replace(/(\d+)(th|st|nd|rd)/, "$1");
    // Convert to Date object
    return new Date(cleanDateStr);
  };

  const getLatestBlogs = () => {
    return blogs.sort((a, b) => {
      // Use parsed dates for comparison
      return parseCustomDate(b.blogTime) - parseCustomDate(a.blogTime);
    });
  };

  const latestBlogs = getLatestBlogs().slice(0, 4);

  const hotels = [
    { image: hotel_1, location: "The Ten Bhopal" },
    { image: hotel_2, location: "The Ten Agra" },
    { image: hotel_3, location: "Baheri Benaras" },
    { image: hotel_4, location: "Kamti Kula Satpura Tiger Reserve" },
    { image: hotel_5, location: "Amrai Sheikhpura" },
    { image: hotel_6, location: "Masseria Bhopal" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

        <section className="aboutSection">
          <figure>
            <img src={aboutImage} alt="Abstract" />
          </figure>
          <article>
            <h1>Welcome to Butiq For You</h1>
            <p>
              Our collection of intimate luxury retreats spans across India.
              Each property is carefully conceptualized, combining art, nature,
              and wellness at its core. From a 35-year-old farmhouse, and
              relaxing pools, to exquisite stays near the Taj, each retreat
              offers a luxury journey. These retreats are crafted for those who
              desire peace, indulgence, and a respite from the frenetic pace of
              modern life. Guests will find themselves enveloped in lush
              landscapes, savoring royal cuisines, and engaging in
              transformative wellness experiences that rejuvenate the mind,
              body, and spirit.
            </p>
            <div>
              <button className="aboutBtn" onClick={() => navigate("/about")}>
                Know More
              </button>
            </div>
          </article>
        </section>
        <section>
          <video width="100%" height="auto" autoPlay muted loop>
            <source src={aboutVideo} type="video/mp4" />
          </video>
        </section>
        <section className="locations_container">
          {hotels.map((hotel, index) => {
            return (
              <div key={index}>
                <figure>
                  <img src={hotel.image} alt="Hotel" />
                </figure>
                <p>{hotel.location}</p>
              </div>
            );
          })}
        </section>

        {/* <section className="blogSectionContainer">
          <h1 className="blogSectionHeading" onClick={() => navigate("/blogs")}>
            Our Blogs
          </h1>
          <div className="blogSection">
            {latestBlogs.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  title={blog.blogTitle}
                  description={blog.blogDescription}
                  picture={blog.blogPicture}
                  tags={blog.blogTags}
                  time={blog.blogTime}
                />
              );
            })}
          </div>
          <div>
            <button onClick={() => navigate("/blogs")}>For more &rarr;</button>
          </div>
        </section> */}

        <section className="my-[8rem]">
          <CustomSlider
            slidesToShow={4}
            pauseOnHover={true}
            breakpointSlidesToShow={{ lg: 2, md: 2, sm: 1 }}
            mask={false}
            slideSpeed={10000}
            swipeToSlide={true}
            sliderName="testimonialSlider"
          />
        </section>
        <section className="accordionSection">
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
        </section>
        <section className="qouteBox">
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
        </section>
      </main>
    </>
  );
}
