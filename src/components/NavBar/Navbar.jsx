import "./Navbar.css";
import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData } from "../../utils/Constant";
import { Button } from "@material-tailwind/react";
import DropdownMenu from "../Dorpdown/Dropdown";
import burgerIcon from "../../assets/images/hamburger-menu-svgrepo-com.svg";
import crossIcon from "../../assets/images/cross-svgrepo-com.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setIsSidebarOpen(false);
  };

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
        { text: "The Edge, Malwan", link: "/destinations" },
        {
          text: "The Element Earth, Jaipur",
          link: "/destinations",
        },
        { text: "The Bosque, Siolim, Goa", link: "/destinations" },
      ],
    },
  ];

  return (
    <header className="navigation" ref={navRef}>
      <nav>
        {/* <div className="nav-mobile">
          <a
            id="navbar-toggle"
            href="#!"
            onClick={handleToggleNav}
            className={isNavOpen ? "active" : ""}
          >
            <span></span>
          </a>
        </div> */}
        <figure>
          <img
            src={burgerIcon}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => setIsSidebarOpen(true)}
          />
        </figure>
        <div className={`${isSidebarOpen ? "openSidebar" : ""} sidebar`}>
          <figure>
            <img src={crossIcon} alt="" onClick={toggleSidebarHandler} />
          </figure>
          <ul>
            <li>Destinations</li>
            <li>Hotels & Resorts</li>
            <li>Experiences</li>
            <li>Exclusive Offers</li>
            <li>Villas</li>
            <li>Residences</li>
            <li>Stories</li>
            <li>About Us</li>
            <li>Gift Card</li>
          </ul>
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
              <>
                {index === 2 && (
                  <div className="brand">
                    <Link to="/">
                      <img src={navbarData.brandLogo} alt="Vistaar Logo" />
                    </Link>
                  </div>
                )}
                <li key={index}>
                  <NavLink to={link.link} onClick={() => setIsNavOpen(false)}>
                    {link.text}
                  </NavLink>
                </li>
              </>
            );
          })}
          <li>
            <Button
              style={{ borderRadius: "0", width: "7rem", fontWeight: 400 }}
            >
              RESERVE
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
