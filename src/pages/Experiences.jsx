import "../styles/Experiences.css";
import Hotel1 from "../assets/images/hotel1.jpg";
import Hotel2 from "../assets/images/hotel2.jpg";
import ExperienceComponent from "../components/Templates/Experience/Experience.jsx";
import expBanner from "../assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";


export default function Experiences() {
  const hotels = [
    {
      id: 1,
      title: "LIVING",
      description:
        "Whether it’s the Planters’ Bungalow or a Luxury Chalet, each of our twelve rooms come with the luxuries you’ve come to expect. Each of the rooms preserves their original spirit, offering a connection to the early origins of the tea trade.",
      buttonText: "Explore",
      imageUrl: Hotel1,
    },
    {
      id: 2,
      title: "EXPERIENCE",
      description:
        "Immerse yourself in the tranquility of nature. Our hotel offers activities like guided tours, yoga sessions, and an unforgettable view of the sunrise.",
      buttonText: "Discover",
      imageUrl: Hotel2,
    },
    {
      id: 3,
      title: "EXPERIENCE",
      description:
        "Immerse yourself in the tranquility of nature. Our hotel offers activities like guided tours, yoga sessions, and an unforgettable view of the sunrise.",
      buttonText: "Discover",
      imageUrl: Hotel2,
    }, {
      id: 4,
      title: "EXPERIENCE",
      description:
        "Immerse yourself in the tranquility of nature. Our hotel offers activities like guided tours, yoga sessions, and an unforgettable view of the sunrise.",
      buttonText: "Discover",
      imageUrl: Hotel2,
    },
  ];

  return (
    <>
     <header>
            <figure>
              <img src={expBanner} alt="" />
            </figure>
          </header>
      {hotels.map((hotel, index) => (
        <ExperienceComponent
        isRight={index % 2 === 1}
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
