import "../styles/Living.css";
import Accordion from "../components/Accordian/Customaccordion";
import expBanner from "../assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";

import hotelLocation_1 from "../assets/images/Bhopal.jpg";
import hotelLocation_2 from "../assets/images/Agra.avif";
import hotelLocation_3 from "../assets/images/hot3.avif";
import hotelLocation_4 from "../assets/images/hot4.avif";
import hotelLocation_5 from "../assets/images/hot5.avif";
import hotelLocation_6 from "../assets/images/hot6.avif";
import { useState } from "react";

export default function Living() {
  const [expandedAccordion, setExpandedAccordion] = useState(1);

  const handleAccordionChange = (accordionId) => {
    setExpandedAccordion(accordionId);
  };

  return (
    <div className="livingContainer">
      <header>
        <figure>
          <img src={expBanner} alt="" />
          <h1>LIVING</h1>
          <div className="backDrop"></div>
        </figure>
      </header>

      <section className="accordionSection">
        <div>
          <figure className="md:pr-[5%]">
            <img
              src={hotelLocation_1}
              className={`${expandedAccordion === 1 ? "" : "hidden"} `}
            />
            <img
              src={hotelLocation_2}
              className={`${expandedAccordion === 2 ? "" : "hidden"} `}
            />
            <img
              src={hotelLocation_3}
              className={`${expandedAccordion === 3 ? "" : "hidden"} `}
            />
            <img
              src={hotelLocation_4}
              className={`${expandedAccordion === 4 ? "" : "hidden"} `}
            />
            <img
              src={hotelLocation_5}
              className={`${expandedAccordion === 5 ? "" : "hidden"} `}
            />
            <img
              src={hotelLocation_6}
              className={`${expandedAccordion === 6 ? "" : "hidden"} `}
            />
          </figure>
        </div>
        <div>
          <Accordion onAccordionChange={handleAccordionChange} />
        </div>
      </section>
    </div>
  );
}
