import "./Navbar.css";
import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData } from "../../utils/Constant";
import { Button } from "@material-tailwind/react";
import DropdownMenu from "../Dorpdown/Dropdown";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = useRef();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Define the dropdown data for "Destinations"
  const destinationsDropdown = [
    {
      heading: "Our Hotels",
      items: [
        { text: "The Ten Bhopal", link: "/destinations" },
        { text: "The Ten Agra", link: "/destinations" },
        { text: "Baheri Benaras", link: "/destinations" },
        { text: "Kamti Kula Satpura Tiger Reserve", link: "/destinations" },
        { text: "Amrai Sheikhpura", link: "/destinations" },
        { text: "Masseria Bhopal", link: "/destinations" },
      ],
    },
    {
      heading: "Opening Soon",
      items: [
        {
          text: "The Postcard in the Himalayas, Mashobra",
          link: "/himalayas-mashobra",
        },
        { text: "The Postcard, Tirupati", link: "/tirupati" },
        { text: "The Postcard, Ranthambore", link: "/ranthambore" },
        {
          text: "The Postcard Kanha Tiger Reserve, Madhya Pradesh",
          link: "/kanha-tiger-reserve",
        },
        { text: "The Postcard, Uttarakhand", link: "/uttarakhand" },
      ],
    },
  ];

  return (
    <header className="navigation" ref={navRef}>
      <div className="brand">
        <Link to="/">
          <img src={navbarData.brandLogo} alt="Vistaar Logo" />
        </Link>
      </div>
      <nav>
        <div className="nav-mobile">
          <a
            id="navbar-toggle"
            href="#!"
            onClick={handleToggleNav}
            className={isNavOpen ? "active" : ""}
          >
            <span></span>
          </a>
        </div>
        <ul className={`nav-list ${isNavOpen ? "py-[2vh]" : "hidden"}`}>
          {navbarData.links.map((link, index) => {
            if (link.text === "Destinations") {
              return (
                <li key={index} className="dropdown-container mx-[2rem]">
                  <DropdownMenu
                    title="Destinations"
                    menuItems={destinationsDropdown}
                  />
                </li>
              );
            }
            return (
              <li key={index}>
                {link.text === "Book" ? (
                  <Button style={{ borderRadius: "0", width: "7rem" }}>
                    Book
                  </Button>
                ) : (
                  <NavLink to={link.link} onClick={() => setIsNavOpen(false)}>
                    {link.text}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
