import "../styles/About.css";

import AboutCard from "../components/Card/AboutCard/AboutCard";
import { Link } from "react-router-dom";
import CustomSlider from "../components/Slider/CustomSlider";

export default function About() {
  const aboutCard = [
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-1.png",
      description: "We help you share your ideas with the world.",
    },
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-2.png",
      description: "We help you share your ideas with the world.",
    },
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-3.png",
      description: "We help you share your ideas with the world.",
    },
    {
      picture:
        "https://socialpanga.com/wp-content/uploads/2020/11/customer-delight-icon-4.png",
      description: "We help you share your ideas with the world.",
    },
  ];

  return (
    <div className="aboutContainer">
      <article>
        <h1>Vistaar</h1>
        <p>
          The quintessential villain who brings out the best in the hero and is
          the sole reason for his existence – the Joker to Batman, the Gabbar
          Singh to Thakur, the Darth Vader to Luke Skywalker. These are the guys
          and girls whose punchlines and schemes are remembered forever.
        </p>
      </article>
      <article>
        <h1>Plan, Create and Connect.</h1>
        <p>
          We are an award-winning creative marketing and advertising agency. We
          ideate, curate and execute marketing strategies to engage with our
          clients’ intended audience, all while integrating their brand with the
          digital world. We take thoughts for ideas and create remarkable
          moments. We are always well prepared – with a bunch of crazy people,
          endless cups of chai and beautiful hideouts in Bengaluru, Delhi and
          Mumbai.
        </p>
        <span>
          <Link to="/services">
            <svg
              width="60px"
              height="60px"
              className="roundArrow"
              viewBox="0 0 91 91"
              id="Layer_1"
              version="1.1"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <style type="text/css"> </style>
                <g>
                  <path
                    className="st0"
                    d="M81.9,10.2c-14,3.4-27.9,1.2-41.7-2c-3.1-0.7-5.5,4-2.3,5.4c6.6,3,13.1,5.2,19.8,6.4 c-11.1,5.2-21,12.7-25.5,23.9c-18.7,0.7-29.9,15-28,33.7c0.3,2.7,4.4,2.9,4.3,0c-0.1-10,6.6-21.6,16.4-24.3c1.5-0.4,3.2-0.7,5-0.9 c-1,8,0.9,15.8,6.7,21.9c5.7,6,13.5,5.5,19.9,0.3c6.7-5.6,5.9-13.8,1.3-20.6c-3.7-5.5-9-8.1-14.8-9.3c1.9-2.8,4.2-5.3,7.1-7.3 c6.2-4.4,13.4-7.6,20.7-10.2c-3.4,7.2-6,14.9-5.8,21.8c0.2,6.5,9.6,6.4,10,0c0.7-11,6.3-22.9,12.1-32.1 C89.4,13.5,85.7,9.3,81.9,10.2z M53.2,61.6c1.7,5.4-3.7,12.2-9.8,8.9c-5.7-3.1-5.4-12.5-4-18c1.8,0.2,3.6,0.6,5.1,1.1 C48.1,54.9,52,57.8,53.2,61.6z"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </span>
      </article>
      <CustomSlider
        sliderName="aboutSlider"
        slidesToShow={6}
        mask={false}
        swipeToSlide={true}
        pauseOnHover={true}
        slideSpeed={4000}
        breakpointSlidesToShow={{ lg: 3, md: 2, sm: 2 }}
      />
      <article>
        <h1>Customer Delight</h1>
        <h2>
          We make the customers orgasm when we lay out our ideas and creatives
          in front of them.
        </h2>
        <p>
          At Social Panga, we are driven by a strong innate desire to delight
          the customer to an extent that they want to give us virtual hugs. BTW,
          we live for occasional fatty foods, intoxicating liquids, and jalebis
          (yes, we&apos;re a bunch of nice kids!)
        </p>
      </article>
      <article>
        {aboutCard.map((e, index) => {
          return (
            <AboutCard
              key={index}
              picture={e.picture}
              description={e.description}
            />
          );
        })}
      </article>
    </div>
  );
}
