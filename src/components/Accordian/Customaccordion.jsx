import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
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
            An eclectic mix of Mughal, Persian and Afghan culture, that
            flourished in green landscapes with rich architecture and royal
            culinary. Bhopal, is home to vivid cascades of life. The air here
            breathes regalness, while the water spills art to every corner of
            the city. The home of Nawabs has further evolved into a modern age
            city with the right mix of nature and city life. It still houses
            contemporary art forms of theatre, poetry, fine arts while also
            serving a diverse taste of homegrown crops alongside the regal
            delicacies of old. Making it a must visit for every traveller. The
            only Indian city to be ruled by women - The Begums. (watch raja
            rasoi aur anya kahaniyan, episode-bhopal)
          </p>
          <Button className="my-2 !rounded-[0]">Explore more &rarr;</Button>
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
            The city that is home to one of the seven wonders of the world is
            nothing short of astonishing. Blessed with numerous architectural
            marvels, the city is studded with fine arts of the Mughals while
            being blessed by the pious river Yamuna. The city innately holds the
            true spirit of our cultural fabric of harmony, peace, and
            socio-cultural exchange. Agra is a culinary canvas for a food
            explorer. The city has Mughlai delicacies passed through
            generations, the early morning snacking breakfasts, and of course
            the Petha desserts that are never to be missed.
          </p>
          <Button className="my-2 !rounded-[0]">Explore more &rarr;</Button>
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
          <Button className="my-2 !rounded-[0]">Explore more &rarr;</Button>
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
          <Button className="my-2 !rounded-[0]">Explore more &rarr;</Button>
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
          <Button className="my-2 !rounded-[0]">Explore more &rarr;</Button>
        </AccordionBody>
      </Accordion>
    </>
  );
}

Customaccordion.propTypes = {
  isOpen: PropTypes.bool,
  onAccordionChange: PropTypes.func,
};
