import PropTypes from "prop-types";
import Slider from "react-slick";
import beachesImg from "../../assets/images/Beaches.svg";
import desertImg from "../../assets/images/desert.svg";
import valleyImg from "../../assets/images/Valley.svg";
import hillImg from "../../assets/images/Hills.svg";
import jungleImg from "../../assets/images/Jungle.svg";
import riverImg from "../../assets/images/River.svg";
import snowyImg from "../../assets/images/snowy.svg";
import arrow from "../../assets/images/left-arrow-svgrepo-com.svg";

// Custom Left Arrow Component
const LeftArrow = ({ className, style, onClick }) => {
  return (
    <img
      src={arrow}
      alt="Previous"
      className={className}
      style={{
        ...style,
        cursor: "pointer",
        width: "40px",
        height: "40px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

// Custom Right Arrow Component
const RightArrow = ({ className, style, onClick }) => {
  return (
    <img
      src={arrow}
      alt="Next"
      className={className}
      style={{
        ...style,
        transform: "rotate(180deg)",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

export default function CustomSlider({
  slidesToShow,
  sliderName,
  swipeToSlide,
  slideSpeed,
  pauseOnHover,
  breakpointSlidesToShow,
}) {
  const sliderData = [
    { id: 1, icon: beachesImg, label: "Riverside" },
    { id: 2, icon: desertImg, label: "Hills" },
    { id: 3, icon: valleyImg, label: "Beaches" },
    { id: 4, icon: hillImg, label: "Valleys" },
    { id: 5, icon: jungleImg, label: "Snowy Landscapes" },
    { id: 6, icon: riverImg, label: "Deserts" },
    { id: 7, icon: snowyImg, label: "Jungle" },
  ];

  let settings = {
    dots: false,
    infinite: true, // Enables infinite scrolling
    autoplay: false,
    arrows: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: slideSpeed,
    slidesToShow: slidesToShow,
    swipeToSlide: swipeToSlide,
    pauseOnHover: pauseOnHover,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: breakpointSlidesToShow?.lg || slidesToShow,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: breakpointSlidesToShow?.md || slidesToShow,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: breakpointSlidesToShow?.sm || slidesToShow,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {sliderName === "residenceSlider" &&
          sliderData.map((item) => (
            <div
              className="slide-item"
              key={item.id}
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="icon"
                style={{
                  fontSize: "40px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.icon}
                  alt="ICONS"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div
                className="label"
                style={{ fontSize: "16px", textAlign: "center" }}
              >
                {item.label}
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

CustomSlider.propTypes = {
  slidesToShow: PropTypes.number,
  sliderName: PropTypes.string,
  swipeToSlide: PropTypes.bool,
  slideSpeed: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  breakpointSlidesToShow: PropTypes.object.isRequired,
};
