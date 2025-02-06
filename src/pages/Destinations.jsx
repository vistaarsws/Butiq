import "../styles/Experiences.css";
import Accordion from "../components/Accordian/Customaccordion";
import expBanner from "../assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";

import hotelLocation_1 from "../assets/images/Bhopal.jpg";
import hotelLocation_2 from "../assets/images/Agra.avif";
import hotelLocation_3 from "../assets/images/Banaras.png";
import hotelLocation_4 from "../assets/images/satpura.jpg";
import hotelLocation_5 from "../assets/images/Sheikhpura.jpg";
import { useState } from "react";
import Header from "../components/Templates/Header/Header";

export default function Destinations() {
  const [expandedAccordion, setExpandedAccordion] = useState(1);

  const handleAccordionChange = (accordionId) => {
    setExpandedAccordion(accordionId);
  };

  return (
    <div className="experiencesContainer">
      <Header title="EXPERIENCES" bannerImg={expBanner} />

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
          </figure>
        </div>
        <div>
          <Accordion onAccordionChange={handleAccordionChange} />
        </div>
      </section>
    </div>
  );
}
