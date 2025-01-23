import { useState } from "react";
import Accordion from "../components/Accordian/Customaccordion";
import expBanner from "../assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";
import "../styles/Experience.css";

import hotelNo_1 from "../assets/images/hot1.avif";
import hotelNo_2 from "../assets/images/hot2.avif";
import hotelNo_3 from "../assets/images/hot3.avif";
import hotelNo_4 from "../assets/images/hot4.avif";
import hotelNo_5 from "../assets/images/hot5.avif";
import hotelNo_6 from "../assets/images/hot6.avif";

export default function Experience() {
  const [expandedAccordion, setExpandedAccordion] = useState(1);

  const handleAccordionChange = (accordionId) => {
    setExpandedAccordion(accordionId);
  };

  return (
    <div className="experienceContainer">
      <header>
        <figure>
          <img src={expBanner} alt="" />
          <h1>Experience</h1>
        </figure>
      </header>

      <section className="accordionSection">
        <div>
          <figure className="md:pr-[5%]">
            <img
              src={hotelNo_1}
              className={`${expandedAccordion === 1 ? "" : "hidden"} `}
            />
            <img
              src={hotelNo_2}
              className={`${expandedAccordion === 2 ? "" : "hidden"} `}
            />
            <img
              src={hotelNo_3}
              className={`${expandedAccordion === 3 ? "" : "hidden"} `}
            />
            <img
              src={hotelNo_4}
              className={`${expandedAccordion === 4 ? "" : "hidden"} `}
            />
            <img
              src={hotelNo_5}
              className={`${expandedAccordion === 5 ? "" : "hidden"} `}
            />
            <img
              src={hotelNo_6}
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
