import HotelCarousel from "../components/AAA/ResidenceSliderSection";
import CustomSlider from "../components/Slider/CustomSlider";
import "../styles/Residences.css";
import exampleImage from "../assets/images/Banaras.png";
import ImageSlider from "../components/AAA/ResidenceSliderSection";
import img1 from "../assets/images/hotelRoom_5.avif";

export default function Residences() {
  const slidesData = [
    {
      images: [img1, img1, img1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Bhopal",
    },
    {
      images: [img1, img1, img1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [img1, img1, img1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [img1, img1, img1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [img1, img1, img1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
    {
      images: [img1, img1, img1],
      title: "THE BUTIQ HOTEL",
      subtitle: "Jaipur",
    },
  ];
  return (
    <div>
      <div className="residenceSlider_container">
        <CustomSlider sliderName="residenceSlider" slidesToShow={5} />
      </div>
      <section>
        <h1 style={{ textAlign: "center" }}>HILLS</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData} />
        </article>
      </section>
      <section>
        <h1 style={{ textAlign: "center" }}>BEACHES</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData} />
        </article>
      </section>
      <section>
        <h1 style={{ textAlign: "center" }}>VALLEYS</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData} />
        </article>
      </section>
      <section>
        <h1 style={{ textAlign: "center" }}>DESERTS</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData} />
        </article>
      </section>
      <section>
        <h1 style={{ textAlign: "center" }}>JUNGLE</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData} />
        </article>
      </section>
      <section>
        <h1 style={{ textAlign: "center" }}>SNOWY LANDSCAPES</h1>
        <article style={{ margin: "2% auto 5%" }}>
          <ImageSlider slides={slidesData} />
        </article>
      </section>
    </div>
  );
}
