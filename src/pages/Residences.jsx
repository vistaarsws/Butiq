import HotelCarousel from "../components/AAA/ResidenceSliderSection";
import CustomSlider from "../components/Slider/CustomSlider";
import "../styles/Residences.css";
import exampleImage from "../assets/images/Banaras.png";
import ImageSlider from "../components/AAA/ResidenceSliderSection";
import img1 from "../assets/images/hotelRoom_5.avif";
import hill_1 from "../assets/images/hills1.jpg";
import hill_2 from "../assets/images/hills2.jpg";
import hill_3 from "../assets/images/hills3.jpg";
import hill_4 from "../assets/images/hill4.jpg";
import hill_5 from "../assets/images/hill5.jpg";

import beach_1 from "../assets/images/beach1.jpg";
import beach_2 from "../assets/images/beach2.jpg";
import beach_3 from "../assets/images/beach3.jpg";
import beach_4 from "../assets/images/beach4.jpg";
import beach_5 from "../assets/images/beach5.jpg";
import beach_6 from "../assets/images/beach6.jpg";
import beach_7 from "../assets/images/beach7.jpg";
import beach_8 from "../assets/images/beach8.jpg";
import beach_9 from "../assets/images/beach9.jpg";
import beach_10 from "../assets/images/beach10.jpg";
import beach_11 from "../assets/images/beach11.jpg";

import vally_1 from "../assets/images/vally1.jpg";
import vally_2 from "../assets/images/vally2.jpg";
import vally_3 from "../assets/images/vally3.jpg";
import vally_4 from "../assets/images/vally4.jpg";
import vally_5 from "../assets/images/vally5.jpg";
import vally_6 from "../assets/images/vally6.jpg";
import vally_7 from "../assets/images/vally7.jpg";
import vally_8 from "../assets/images/vally8.jpg";
import vally_9 from "../assets/images/vally9.jpg";
import vally_10 from "../assets/images/vally10.jpg";
import vally_11 from "../assets/images/vally11.jpg";
import vally_12 from "../assets/images/vally12.jpg";

import city_1 from "../assets/images/city_1.jpg";
import city_2 from "../assets/images/city_2.jpg";
import city_3 from "../assets/images/city_3.jpg";
import city_4 from "../assets/images/city_4.jpg";
import city_5 from "../assets/images/city_5.jpg";
import city_6 from "../assets/images/city_6.jpg";
import city_7 from "../assets/images/city_7.jpg";
import city_8 from "../assets/images/city_8.jpg";

import jungle_1 from "../assets/images/jungle1.jpg";
import jungle_2 from "../assets/images/jungle2.jpg";
import jungle_3 from "../assets/images/jungle3.jpg";
import jungle_4 from "../assets/images/jungle4.jpg";
import jungle_5 from "../assets/images/jungle5.jpg";
import jungle_6 from "../assets/images/jungle6.jpg";
import jungle_7 from "../assets/images/jungle7.jpg";

import farm_1 from "../assets/images/farm_1.jpg";
import farm_2 from "../assets/images/farm_2.jpg";
import farm_3 from "../assets/images/farm_3.jpg";
import farm_4 from "../assets/images/farm_4.jpg";
import farm_5 from "../assets/images/farm_5.jpg";
import farm_6 from "../assets/images/farm_6.jpg";

import { Element } from "react-scroll";

export default function Residences() {
  const slidesData1 = [
    {
      images: [hill_1, hill_2, hill_3],
      title: "THE BUTIQ HOTEL",
      subtitle: "Bhopal",
    },
    {
      images: [hill_4, hill_1, hill_5],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [hill_2, hill_5, hill_4],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [hill_3, hill_5, hill_2],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
  ];
  const slidesData2 = [
    {
      images: [beach_1, beach_2, beach_3],
      title: "THE BUTIQ HOTEL",
      subtitle: "Bhopal",
    },
    {
      images: [beach_4, beach_5, beach_6],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [beach_7, beach_8, beach_9],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [beach_10, beach_11, beach_1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
  ];
  const slidesData3 = [
    {
      images: [vally_1, vally_2, vally_3],
      title: "THE BUTIQ HOTEL",
      subtitle: "Bhopal",
    },
    {
      images: [vally_4, vally_5, vally_6],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [vally_7, vally_8, vally_9],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [vally_10, vally_11, vally_12],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
  ];
  const slidesData4 = [
    {
      images: [city_1, city_2, city_3],
      title: "THE BUTIQ HOTEL",
      subtitle: "Bhopal",
    },
    {
      images: [city_4, city_5, city_6],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [city_7, city_8, city_1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [city_4, city_7, city_2],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
  ];
  const slidesData5 = [
    {
      images: [jungle_1, jungle_2, jungle_3],
      title: "THE BUTIQ HOTEL",
      subtitle: "Bhopal",
    },
    {
      images: [jungle_4, jungle_5, jungle_6],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [jungle_7, jungle_3, jungle_2],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [jungle_3, jungle_1, jungle_5],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
  ];
  const slidesData6 = [
    {
      images: [farm_1, farm_2, farm_3],
      title: "THE BUTIQ HOTEL",
      subtitle: "Bhopal",
    },
    {
      images: [farm_4, farm_5, farm_6],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [farm_2, farm_3, farm_5],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [farm_3, farm_1, farm_4],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
  ];
  return (
    <div className="residence_container">
      <div className="residenceSlider_container">
        <CustomSlider sliderName="residenceSlider" slidesToShow={6} />
      </div>
      <Element id="hills">
        <h1 style={{ textAlign: "center" }}>HILLS</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData1} />
        </article>
      </Element>
      <Element id="beaches">
        <h1 style={{ textAlign: "center" }}>BEACHES</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData2} />
        </article>
      </Element>
      <Element id="riverSide">
        <h1 style={{ textAlign: "center" }}>RIVERSIDE</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData3} />
        </article>
      </Element>
      <Element id="city">
        <h1 style={{ textAlign: "center" }}>CITY</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData4} />
        </article>
      </Element>
      <Element id="jungle">
        <h1 style={{ textAlign: "center" }}>JUNGLE</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData5} />
        </article>
      </Element>
      <Element id="farm">
        <h1 style={{ textAlign: "center" }}>FARM</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData6} />
        </article>
      </Element>
    </div>
  );
}
