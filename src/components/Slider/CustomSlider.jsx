import PropTypes from "prop-types";
import Slider from "react-slick";
import beachesImg from "../../assets/images/Beaches.svg";
import desertImg from "../../assets/images/desert.svg";
import valleyImg from "../../assets/images/Valley.svg";
import hillImg from "../../assets/images/Hills.svg";
import jungleImg from "../../assets/images/Jungle.svg";
import riverImg from "../../assets/images/River.svg";
import cityImg from "../../assets/images/cityicon.svg";
import farmImg from "../../assets/images/farmicon.svg";
import snowyImg from "../../assets/images/snowy.svg";
import arrow from "../../assets/images/left-arrow-svgrepo-com.svg";
import { Link } from "react-scroll";

// Custom Left Arrow Component
const LeftArrow = ({ className, style, onClick }) => {
  return (
    <img
      src={arrow}
      alt="Previous"
      className={`${className} leftArrowClass`}
      style={{
        ...style,
        cursor: "pointer",
        width: "25px",
        height: "25px",
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
        width: "25px",
        height: "25px",
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
    {
      id: 1,
      icon: riverImg,
      label: "Riverside",
      linkedSectionId: "riverSide",
    },
    { id: 2, icon: hillImg, label: "Hills", linkedSectionId: "hills" },
    { id: 3, icon: beachesImg, label: "Beaches", linkedSectionId: "beaches" },
    { id: 4, icon: jungleImg, label: "Jungle", linkedSectionId: "jungle" },
    { id: 5, icon: cityImg, label: "City", linkedSectionId: "city" },
    { id: 6, icon: farmImg, label: "Farm", linkedSectionId: "farm" },
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
              <Link
                to={item.linkedSectionId}
                duration={500}
                smooth={true}
                offset={-100}
              >
                <div
                  className="icon"
                  style={{
                    fontSize: "40px",
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
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
              </Link>
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
