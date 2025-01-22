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
          The Ten Bhopal
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            More than just a hotel—it’s an experience where every corner tells a
            story, and every moment feels special. Housed in a 50-year-old
            designer couple's home, this intimate property offers ten
            thoughtfully designed suites and artistic living spaces. Each suite
            is a blend of timeless elegance and contemporary comforts, promising
            a stay that feels both luxurious and homely. Here, you’ll savor a
            delightful mix of local Bhopali delicacies and global culinary
            creations, a true favorite among the locals. Whether you’re here for
            a cozy meal or a memorable evening, the atmosphere is always
            welcoming. Come, and discover the essence of Bhopal at its finest.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon isOpen={open === 2} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="accordionHeader font-[Raleway]"
        >
          The Ten Agra
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Discover the timeless allure located in the heart of this historic
            city, Agra. With 10 beautifully designed suites and artistic living
            spaces, each room offers a serene blend of luxury and style, your
            stay is both comfortable and memorable. Our property features two
            exceptional F&B experiences: an al-fresco Verandah café, perfect for
            a relaxed meal amidst the breeze, and a rooftop lounge offering
            stunning views of the city. Whether you’re an in-house guest or a
            global traveler visiting the iconic Taj Mahal, these spaces are
            designed to be the perfect retreat after a day of exploration.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon isOpen={open === 3} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="accordionHeader font-[Raleway]"
        >
          Baheri Benaras
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Step into the heart of Benaras at our 40-year-old property, where 12
            thoughtfully designed rooms capture the essence of the city’s rich
            history and the legacy of its family owners. Each space is a tribute
            to tradition and heritage, offering a unique experience for every
            guest. Relish an exclusive, handcrafted du jour menu, carefully
            curated and available only to in-house guests, adding a personal
            touch to your stay.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon isOpen={open === 4} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="accordionHeader font-[Raleway]"
        >
          KAMTI KULA Satpura Tiger Reserve
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            Set on 42 acres of land within Madhya Pradesh's first biosphere
            reserve, Kamti Kula promises a luxurious escape. With 8 opulent
            suites, a community-driven Indian restaurant, a pool bar, and a
            range of unique experiences both within the resort and its
            surrounding nature, your stay will be nothing short
            of unforgettable.
          </p>
          <a className="my-1 text-[#0000EE]">Explore more &rarr;</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon isOpen={open === 5} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="accordionHeader font-[Raleway]"
        >
          AMRAI Sheikhpura
        </AccordionHeader>
        <AccordionBody>
          <p className="text-justify font-[now]">
            With only 10 luxurious villas, each providing unparalleled comfort
            and privacy, this serene sanctuary is designed to rejuvenate your
            mind, body, and soul. Indulge in a holistic wellness center, where
            healing and relaxation are prioritized, or dine at our unique
            restaurant that serves both local and royal cuisines, crafted from
            house-grown raw materials. Set amidst 12 acres of lush greenery,
            including over 10,000 Mango, Guava, and other fruit trees, this is a
            haven where nature and luxury coexist in harmony.
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
