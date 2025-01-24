import "../styles/Experiences.css";

import ExperienceComponent from "../components/Templates/Experience/Experience.jsx";
import expBanner from "../assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";
import Header from "../components/Templates/Header/Header.jsx";

import Hotel1 from "../assets/images/hotelRoom_1.avif";
import Hotel2 from "../assets/images/hotelRoom_2.avif";
import Hotel3 from "../assets/images/hotelRoom_3.avif";
import Hotel4 from "../assets/images/hotelRoom_4.avif";
import Hotel5 from "../assets/images/hotelRoom_5.avif";
import Hotel6 from "../assets/images/hotelRoom_6.avif";

export default function Experiences() {
  const hotels = [
    {
      id: 1,
      title: "Masseria Bhopal",
      subTitle: "A luxurious serving Modern India",
      description:
        "Imagine relaxing in one of our spacious, standalone cottages, each offering a modern, artistic living space with a serene pool to unwind in. The atmosphere here is peaceful, surrounded by lush outdoors. You could enjoy a meal at our modern Indian restaurant, savoring exquisite flavors, or host an intimate event in our stylish banqueting spaces. With 15 luxurious bedrooms and beautiful, secluded surroundings, it’s the ideal place for both relaxation and memorable gatherings.",
      buttonText: "Explore",
      imageUrl: Hotel1,
    },
    {
      id: 2,
      title: "Amrai Sheikhpura",
      subTitle: "A Sanctuary for Art, Nature, and Wellness",
      description:
        "Each villa is your personal retreat amidst nature. You can relax and rejuvenate at the wellness center, or indulge in local and royal cuisines at the restaurant, where everything is made using house-grown ingredients. The 12-acre estate, filled with over 10,000 Mango and Guava trees, offers a perfect backdrop for farming activities, village dining, and immersing yourself in creativity at the Art House.",
      buttonText: "Discover",
      imageUrl: Hotel2,
    },
    {
      id: 3,
      title: "Kamti Kula Satpura Tiger Reserve",
      subTitle: "A Serene Promise of Nature",
      description:
        "Set on a vast 42-acre land in the heart of a biosphere reserve, this place promises a unique and peaceful retreat. The property features luxurious suites designed for relaxation and comfort, surrounded by lush greenscapes that offer a calm, natural atmosphere. Enjoy a community-driven dining experience and unwind at the pool bar. The resort is also home to several natural water bodies, providing an environment for various activities and experiences, all combined to enhance your stay.",
      buttonText: "Discover",
      imageUrl: Hotel3,
    },
    {
      id: 4,
      title: "Baheri Benaras",
      subTitle: "A Heritage Stay, Handcrafted",
      description:
        "Reflecting the rich history of Agra and the deeply rooted family heritage of the property owners. The suites are distinctly designed, blending tradition with modern comforts. The property also features an alfresco global cuisine cafe, offering a limited, handcrafted menu exclusive to in-house guests. With lush outdoors, the setting invites relaxation and a deep connection to the cultural essence of the city.",
      buttonText: "Discover",
      imageUrl: Hotel4,
    },
    {
      id: 5,
      title: "The Ten Bhopal",
      subTitle: "A Contemporary Luxury in Bhopal",
      description:
        "Once home to a designer couple, located in the heart of Bhopal, India. This charming property captures the essence of both tradition and modern design. The highlight of the property is the award-winning alfresco restaurant. With lush outdoor spaces, it’s the perfect place to relax, dine, and enjoy the vibrant atmosphere of Bhopal.",
      buttonText: "Discover",
      imageUrl: Hotel5,
    },
    {
      id: 6,
      title: "The Ten Agra",
      subTitle: "An Exceptional Experience of Artistic Comfort",
      description:
        "You can enjoy a variety of dining options, including an alfresco café and a rooftop lounge, perfect for relaxing. The property also provides thoughtful services like complimentary breakfast & Wi-Fi, room service, and 24-hour concierge to enhance your stay, making it a great choice for those looking to experience the charm of Agra.",
      buttonText: "Discover",
      imageUrl: Hotel6,
    },
  ];

  return (
    <>
      <Header title={"LIVING"} bannerImg={expBanner} />
      {hotels.map((hotel, index) => (
        <ExperienceComponent
          isRight={index % 2 === 1}
          key={hotel.id}
          title={hotel.title}
          subTitle={hotel.subTitle}
          description={hotel.description}
          buttonText={hotel.buttonText}
          imageUrl={hotel.imageUrl}
        />
      ))}
    </>
  );
}
