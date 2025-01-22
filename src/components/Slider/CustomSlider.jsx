import { testimonials, aboutSliderImagesArray } from "../../utils/Constant";
import TestimonialCard from "../Card/TestimonialCard/TestimonialCard";
import PropTypes from "prop-types";
import Slider from "react-slick";

export default function CustomSlider({
  mask,
  slidesToShow,
  sliderName,
  swipeToSlide,
  slideSpeed,
  pauseOnHover,
  breakpointSlidesToShow,
}) {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    // speed: 4000,
    speed: slideSpeed,
    slidesToShow: slidesToShow,
    swipeToSlide: swipeToSlide,
    pauseOnHover: pauseOnHover,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: breakpointSlidesToShow.lg,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: breakpointSlidesToShow.md,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: breakpointSlidesToShow.sm,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className={`${mask ? "maskbrandSlider_after-mask" : ""}`}
    >
      {sliderName === "testimonialSlider" &&
        testimonials.map((e, index) => {
          return (
            <div key={index} className="p-2">
              <TestimonialCard
                // title={e.title}
                description={e.description}
                fullName={e.fullName}
                company={e.company}
                designation={e.designation}
                picture={e.picture}
              />
            </div>
          );
        })}
      {sliderName === "brandSlider" &&
        brands.map((e, index) => {
          return (
            <div key={index} className="p-2">
              <img
                className="w-[100px] h-[100px]"
                src={e.brandImage}
                alt={`${e.brandImage}`}
              />
            </div>
          );
        })}
      {sliderName === "aboutSlider" &&
        aboutSliderImagesArray.map((e, index) => {
          return (
            <div key={index} className="p-2 ">
              <img
                src={e}
                alt="picture"
                className=" bg-cover bg-center h-[30vh] w-full"
              />
            </div>
          );
        })}
    </Slider>
  );
}

CustomSlider.propTypes = {
  mask: PropTypes.bool,
  slidesToShow: PropTypes.number,
  sliderName: PropTypes.string,
  swipeToSlide: PropTypes.bool,
  slideSpeed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  breakpointSlidesToShow: PropTypes.object.isRequired,
};
