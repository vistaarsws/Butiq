import user1 from "../assets/images/portrait.jpg";

// import vistaarBlack from "../assets/images/Vistaar_Webx_black.png";
import butiqForYouLogo from "../assets/images/ButiqForYou2.jpg";

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

const aboutSliderImagesArray = [
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery2.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery3.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery2.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery3.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery4.jpg",
  "https://socialpanga.com/wp-content/uploads/2021/04/socialpanga-about-gallery1.jpg",
];

const services = {
  ourServices:
    "We help businesses reach their full potential by creating a brand identity that is authentic and reflective of them. We understand that every brand comes with its own unique challenges, and hence requires expertise. We join hands with you as your growth partners and focus on delivering a power-packed panga each time!",
  services: [
    {
      title: `Creative &
Digital Strategy`,
      description:
        "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/01-service-social-media-creative-srtategy.png",
    },
    {
      title: `Media Planning
& Buying`,
      description:
        "We help you profitably define your marketing goals with our expertise in media planning and buying.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/02-service-media-planning-buying.png",
    },
    {
      title: `Analytics & SEO`,
      description:
        "The P in Panga stands for performance and our SEO and Analytics team delivers it with appropriate insights that have the ability to transform your business.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/03-service-analytics-seo.png",
    },
    {
      title: `Branding & Marketing
Communications`,
      description:
        "When we say we give your brand a VOICE we mean – V : Versatile, O : Omnipotent, I : Impressional, C : Captivating, E : Empowered way of branding and communicating your business.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/04-service-branding-marketing-communications.png",
    },
    {
      title: `Mobile & Website
UI/UX`,
      description:
        "From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/05-service-mobile-website-ui-ux.png",
    },
    {
      title: `Influencer
Management`,
      description:
        "To make your idea come to life, we dive into a pool of talent and find the right influencer(s) for the task in hand.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/06-service-influencer-management.png",
    },
    {
      title: `Video
Production`,
      description:
        "A perfect storyline is incomplete without the right set of shots taken from the perfect angles.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/07-service-videio-production.png",
    },
    {
      title: `Consulting
Services`,
      description:
        "We do a thorough research and integrate industry insights with internet trends to give you the best advice.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/08-service-consulting-services.png",
    },
    {
      title: `Technology
`,
      description:
        "Only unrealistic aspect of us using technology is the experience we create for you outside our daily lives using the best of tech and tools.",
      picture:
        "https://socialpanga.com/wp-content/uploads/2021/04/09-service-technology.png",
    },
  ],
};

const navbarData = {
  brandLogo: butiqForYouLogo,
  links: [
    { text: "Destinations", link: "/about" },
    { text: "Living", link: "/services" },
    { text: "Experiences", link: "/experience" },
    { text: "Offers", link: "/work" },
    { text: "Gallery", link: "/clients" },
    { text: "Contact Us", link: "/contact" },
    { text: "Book", link: "/Book" },
  ],
};

//------------------------------------------------------------------------------------- Define individual category arrays
const branding = [
  {
    title: "Umang Shridhar",
    category: "UI/UX",
    website: "https://usdpl.com/",
    picture:
      "https://vistaarwebx.com/wp-content/uploads/2024/01/screencapture-usdpl-2023-11-22-22_21_15-7-e1713606318973.webp",
    description:
      "USDPL was established to promote traditional handloom weaving and empower rural artisans in India, recognizing the importance of preserving cultural heritage and supporting local communities.",
    video: "",
    images: [],
  },
  {
    picture:
      "https://socialpanga.com/wp-content/uploads/2021/05/SP-website-design-project-036.png",
  },
  {
    picture:
      "https://socialpanga.com/wp-content/uploads/2021/05/SP-website-design-project-035.png",
  },
];

const caseStudies = [
  {
    picture:
      "https://socialpanga.com/wp-content/uploads/2024/07/KitKat_Thumbnail.jpg",
  },
];

const creativeHub = [
  {
    picture:
      "https://socialpanga.com/wp-content/uploads/2024/03/SP-Miniklub-Thumbnail-Website-template.jpeg",
  },
];

const performanceMarketing = [
  {
    picture:
      "https://socialpanga.com/wp-content/uploads/2021/08/Thumbnail_Awards-Page-07.png",
  },
];

const production = [
  {
    picture:
      "https://socialpanga.com/wp-content/uploads/2022/01/SP-website-design-project-Thumbnail-08.jpg",
  },
];

const uiUx = [
  {
    picture: "https://socialpanga.com/wp-content/uploads/2021/08/33.png",
  },
];

// Create the 'ourWork' object
const ourWork = {
  title: "Our Brand Raids",
  description:
    "The Mafias love to talk about their conquests over a freshly brewed pitcher of beer. Client satisfaction is significant to them, as they strive for nothing short of creative excellence. Here are a few smart goals that were set and smashed successfully.",
  works: {
    all: [
      ...branding,
      ...caseStudies,
      ...creativeHub,
      ...performanceMarketing,
      ...production,
      ...uiUx,
    ],
    branding,
    caseStudies,
    creativeHub,
    performanceMarketing,
    production,
    uiUx,
  },
};

const workNavbarArray = [
  "All",
  "Branding",
  "Case Studies",
  "Creative Hub",
  "Performance Marketing",
  "Production",
  "UI/UX",
];

const ourTeams = [
  {
    empName: "Abinash kumar",
    empTitle: "Backend Developer",
    empDescriptions: [
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
      "Ever ready to help someone out, Manan remains cool as a cucumber in the most tense scenarios. In the Panga Wildlife Reserve, you can always find him by following the sound of people groaning and facepalming at his endless puns.",
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
    ],
    empPictures:
      "https://socialpanga.com/wp-content/uploads/2024/03/Rohit-Singh.png",
  },
  {
    empName: "Abinash kumar",
    empTitle: "Backend Developer",
    empDescriptions: [
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
      "Ever ready to help someone out, Manan remains cool as a cucumber in the most tense scenarios. In the Panga Wildlife Reserve, you can always find him by following the sound of people groaning and facepalming at his endless puns.",
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
    ],
    empPictures:
      "https://socialpanga.com/wp-content/uploads/2024/03/Rohit-Singh.png",
  },
  {
    empName: "Abinash kumar",
    empTitle: "Backend Developer",
    empDescriptions: [
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
      "Ever ready to help someone out, Manan remains cool as a cucumber in the most tense scenarios. In the Panga Wildlife Reserve, you can always find him by following the sound of people groaning and facepalming at his endless puns.",
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
    ],
    empPictures:
      "https://socialpanga.com/wp-content/uploads/2024/03/Rohit-Singh.png",
  },
  {
    empName: "Abinash kumar",
    empTitle: "Backend Developer",
    empDescriptions: [
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
      "Ever ready to help someone out, Manan remains cool as a cucumber in the most tense scenarios. In the Panga Wildlife Reserve, you can always find him by following the sound of people groaning and facepalming at his endless puns.",
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
    ],
    empPictures:
      "https://socialpanga.com/wp-content/uploads/2024/03/Rohit-Singh.png",
  },
  {
    empName: "Abinash kumar",
    empTitle: "Backend Developer",
    empDescriptions: [
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
      "Ever ready to help someone out, Manan remains cool as a cucumber in the most tense scenarios. In the Panga Wildlife Reserve, you can always find him by following the sound of people groaning and facepalming at his endless puns.",
      "Manan aka Punan aka Kabir, known as the ‘Akhand Sorted Mahaapurush’ at the Delhi Office, is a man of a million tales that flow like poetry through his words and his photographs. A radiant ray of sunshine who always has a smile on his face, he is notorious for his iconic tagline – ‘Yaar feel nahi aa Rahi hai’.",
    ],
    empPictures:
      "https://socialpanga.com/wp-content/uploads/2024/03/Rohit-Singh.png",
  },
];

const blogs = [
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "29th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "27th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "22th July 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "21th Jan 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "20th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "20th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "20th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "20th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "20th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
  {
    blogTitle: "Next.js crash course by KhateykoBan",
    blogTime: "20th June 2019",
    blogDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          temporibus iste esse, magni nostrum.`,
    blogTags: ["snippet", "Javascript"],
    blogPicture:
      "https://a-us.storyblok.com/f/1017006/770x1000/9b73cd4ab5/humaan-feed.jpg/m/385x500/filters:quality(80)",
  },
];

// ----------------------------------------------------------PRIVACY POLICY-------------------------------------------------------------------------------------

// const privacyPolicy = [];

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

export {
  testimonials,
  services,
  ourWork,
  ourTeams,
  blogs,
  navbarData,
  aboutSliderImagesArray,
  workNavbarArray,
};
