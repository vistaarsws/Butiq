import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/images/left-arrow-svgrepo-com.svg"; // Replace with actual path

const CustomArrow = ({ onClick, direction, top = "50%", side = "10px" }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: top,
      [direction === "right" ? "right" : "left"]: side,
      transform: "translateY(-50%)",
      zIndex: 2,
      cursor: "pointer",
    }}
  >
    <img
      src={leftArrow}
      alt={direction === "right" ? "Next" : "Previous"}
      style={{
        width: "30px",
        transform: direction === "right" ? "rotate(180deg)" : "none",
      }}
    />
  </div>
);

const CardSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <CustomArrow direction="right" top="95%" side="20%" />,
    prevArrow: <CustomArrow direction="left" top="95%" side="20%" />,
  };

  return (
    <Slider {...settings} style={{ width: "350px" }}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{
              // width: "",
              height: "550px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default function ImageSlider({ slides }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div style={{ width: "90%", margin: "0 auto", textAlign: "center" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ position: "relative", textAlign: "center" }}
          >
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                // background: "#f0f0f0",
                // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardSlider images={slide.images} />
            </div>
            <h3
              style={{
                fontSize: "18px",
                // fontWeight: "bold",
                margin: "10px 0 5px",
              }}
            >
              {slide.title}
            </h3>
            <p style={{ color: "#757575", fontSize: "14px" }}>
              {slide.subtitle}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
