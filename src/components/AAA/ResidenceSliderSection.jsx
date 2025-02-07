import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/images/left-arrow-svgrepo-com.svg"; // Replace with actual path

const CustomArrow = ({
  onClick,
  direction,
  top = "50%",
  side = "-25px",
  fill,
}) => (
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
    <svg
      fill={fill || "#808080"}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
      style={{
        width: "25px",

        transform: direction === "right" ? "rotate(180deg)" : "none",
      }}
    >
      <g>
        <path
          d="M33.934,54.458l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657
		c0.741-0.818,0.68-2.083-0.139-2.824L37.801,52.564L64.67,22.921c0.742-0.818,0.68-2.083-0.139-2.824
		c-0.817-0.742-2.082-0.679-2.824,0.139L33.768,51.059c-0.439,0.485-0.59,1.126-0.475,1.723
		C33.234,53.39,33.446,54.017,33.934,54.458z"
        />
      </g>
    </svg>

    {/* <img
      src={leftArrow}
      alt={direction === "right" ? "Next" : "Previous"}
      style={{
        width: "25px",

        transform: direction === "right" ? "rotate(180deg)" : "none",
      }}
    /> */}
  </div>
);

const CardSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: (
      <CustomArrow direction="right" top="95%" side="35%" fill="#ffff" />
    ),
    prevArrow: (
      <CustomArrow direction="left" top="95%" side="35%" fill="#ffff" />
    ),
  };

  return (
    <Slider {...settings} style={{ width: "378px", height: "608px" }}>
      {images.map((image, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{
              width: "100%",
              height: "608px",
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
    <div style={{ margin: "0 5%", textAlign: "center" }}>
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
                fontSize: "14px",
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
