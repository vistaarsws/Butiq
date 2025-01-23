import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import collapseIcon from "../../assets/images/minus-svgrepo-com.svg";
import expandIcon from "../../assets/images/plus-large-svgrepo-com.svg";
import PropTypes from "prop-types";

export default function Customaccordion({ onAccordionChange }) {
  const [open, setOpen] = useState(1);
  function Icon({ isOpen }) {
    return isOpen ? (
      <img src={collapseIcon} alt="Collapse" />
    ) : (
      <img src={expandIcon} alt="Expand" />
    );
  }

  const handleOpen = (value) => {
    const newOpenValue = open === value ? 0 : value;
    setOpen(newOpenValue);
    console.log(newOpenValue, "oooo");
    onAccordionChange(newOpenValue);
  };

  return (
    <>
      <Accordion open={open === 1} icon={<Icon isOpen={open === 1} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="accordionHeader font-[Raleway]"
        >
          Bhopal
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Experience Bhopal like never before at our intimate property that’s
            more than just a hotel—it’s a story waiting to be told. With ten
            thoughtfully curated suites, blending timeless elegance with
            contemporary comforts, every moment here is designed to make you
            feel at home. Indulge in the city’s flavors with a mix of authentic
            Bhopali delicacies and global cuisines, prepared with a local touch.
            Every corner here exudes charm, and every experience leaves you with
            a deep connection to the city.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon isOpen={open === 2} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="accordionHeader font-[Raleway]"
        >
          Agra
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Discover a unique perspective on Agra with a stay in the heart of
            this historic city. With ten beautifully designed suites, your
            experience is infused with luxury, style, and tranquility. Enjoy two
            distinct dining spaces: an al-fresco café perfect for relaxed meals
            and a rooftop lounge offering sweeping views of the city, including
            glimpses of the Taj Mahal. Whether you're here for history or
            leisure, Agra welcomes you with a perfect blend of comfort and
            charm.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon isOpen={open === 3} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="accordionHeader font-[Raleway]"
        >
          Benaras
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Welcome to the heart of Benaras, where our heritage property offers
            a truly local experience. With 12 rooms steeped in history and
            charm, each space reflects the rich traditions of the city. Guests
            can indulge in an exclusive handcrafted menu, thoughtfully curated
            and available only to in-house visitors, ensuring a culinary
            experience as personal as the city’s stories.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon isOpen={open === 4} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="accordionHeader font-[Raleway]"
        >
          Satpura
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Set within the pristine expanse of the Satpura Tiger Reserve, our
            retreat offers an unrivaled experience of luxury and nature. Spread
            across 42 acres, it features eight opulent suites, a
            community-focused Indian restaurant, and a host of immersive
            experiences. Whether you’re enjoying the serenity of the reserve or
            exploring the wild, this destination promises unforgettable
            memories.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon isOpen={open === 5} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="accordionHeader font-[Raleway]"
        >
          Sheikhpura
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Amidst 12 acres of lush greenery, including orchards of mango and
            guava trees, lies a tranquil escape. Our property boasts ten
            luxurious villas, each offering unmatched privacy and comfort.
            Rejuvenate at the holistic wellness center, or savor farm-to-table
            royal and local cuisines crafted from our homegrown produce. Here,
            luxury and nature come together to create a harmonious retreat.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon isOpen={open === 6} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="accordionHeader font-[Raleway]"
        >
          Masseria Bhopal
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Whether you're seeking a peaceful getaway or an adventurous retreat,
            this is your sanctuary to unwind and explore. Bringing you rustic
            charm and modern luxury nestled in the peaceful countryside of
            Bhopal featuring 6 cottages with tranquil pools, 15 opulent
            bedrooms, a gourmet restaurant, and an expansive banqueting space.
            Masseria, meaning “farmhouse” in Italian, offers the beauty of the
            countryside and all the comforts of modern living.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
    </>
  );
}

Customaccordion.propTypes = {
  isOpen: PropTypes.bool,
  onAccordionChange: PropTypes.func,
};
