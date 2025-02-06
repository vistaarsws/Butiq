import user1 from "../assets/images/portrait.jpg";

import butiqForYouLogo from "../assets/images/ButiQ Black SVG.svg";

const testimonials = [
  {
    title: "Travel Blogger",
    description: `The attention to detail in every corner of the property reflects true luxury. I particularly enjoyed the wellness spa treatments—they were divine!`,
    fullName: "Emily",
    designation: `Travel Blogger`,
    picture: user1,
  },

  {
    title: "Cultural Journalist",
    description: `The architectural design pays homage to traditional aesthetics while ensuring guest comfort.`,
    fullName: "Maya Singh",
    designation: `Cultural Journalist`,
    picture: user1,
  },

  {
    title: "Lifestyle Influencer",
    description: `I must say, it is a spectacular retreat! The design is modern yet inviting, and I could not enough of the stunning views of the Taj Mahal from my room.`,
    fullName: "Sofia Patel",
    designation: `Lifestyle Influencer`,
    picture: user1,
  },
  {
    title: "Luxury Travel Expert",
    description: `With an emphasis on holistic wellness and natural beauty, this retreat is for those looking for a tranquil escape.`,
    fullName: "Suresh Reddy",
    designation: `Luxury Travel Expert`,
    picture: user1,
  },

  {
    title: "Nature Enthusiast",
    description: `Its commitment to sustainability and eco-friendly practices sets it apart from other retreats.`,
    fullName: "Nisha Verma",
    designation: `Nature Enthusiast`,
    picture: user1,
  },

  {
    title: "Wellness Advocate",
    description: `It seems poised to offer guests a unique experience that nurtures both body and soul`,
    fullName: "Meera Choudhary",
    designation: `Wellness Advocate`,
    picture: user1,
  },

  {
    title: "Travel Consultant",
    description: `The location is perfect for those seeking peace and spirituality amidst nature.`,
    fullName: "Vikram Desai",
    designation: `Travel Consultant`,
    picture: user1,
  },
];

const navbarData = {
  brandLogo: butiqForYouLogo,
  links: [
    { text: "HOTELS & RESORTS", link: "/living" },
    { text: "RESIDENCES", link: "/residences" },

    // { text: "DESTINATIONS", link: "/destinations" },
    { text: "DESTINATIONS", link: "/destinations" },
    // { text: "EXPERIENCE", link: "/experiences" },
    { text: "EXPERIENCES", link: "/experiences" },
  ],
};

export { testimonials, navbarData };
