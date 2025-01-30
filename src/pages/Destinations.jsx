import "../styles/Destinations.css";

import HotelComponent from "../components/Templates/HotelComponent/HotelComponent ";
import expBanner from "../assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";
import Header from "../components/Templates/Header/Header";

export default function Destinations() {
  return (
    <>
      <Header title="DESTINATIONS" bannerImg={expBanner} />
      <br />
      <br />
      <br />
      {hotels.map((hotel, index) => (
        <HotelComponent
          isRight={index % 2 === 0}
          key={hotel.id}
          title={hotel.title}
          description={hotel.description}
          buttonText={hotel.buttonText}
          imageUrl={hotel.imageUrl}
        />
      ))}
    </>
  );
}
