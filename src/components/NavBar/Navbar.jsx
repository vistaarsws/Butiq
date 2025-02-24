import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData } from "../../utils/Constant";
import { button, Button } from "@material-tailwind/react";
import DropdownMenu from "../Dropdown/Dropdown";
import burgerIcon from "../../assets/images/Frame1.svg";
import crossIcon from "../../assets/images/cross-svgrepo-com.svg";
import searchIcon from "../../assets/images/iconamoon_search-thin.svg";
import MultilanguageInput from "../ui/language-input/MultilanguageInput";
import {
  destinationsDropdown,
  hotelsAndResortsDropdown,
} from "../../utils/Constant";

// import Hotel2 from "../assets/images/hotel2.jpg";
// import Hotel3 from "../assets/images/hotel3.jpg";
// import Hotel4 from "../assets/images/hotel4.jpg";
// import Hotel5 from "../assets/images/hotel5.avif";
// import Hotel6 from "../assets/images/hotel6.jpg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const sidebarRef = useRef(null);

  const [navProps, setNavProps] = useState({
    imageSize: "10rem",
    linkSize: "14px",
    btnProps: { height: "40px", font: "16px", padding: "unset" },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const imgSize = Math.max(8, 10 - scrollY * 0.02) + "rem";
      const linkSize = Math.max(12, 14 - scrollY * 0.02) + "px";
      const btnHeight = Math.max(30, 40 - scrollY * 0.02) + "px";
      const btnFont = Math.max(12, 16 - scrollY * 0.02) + "px";

      setNavProps({
        ...navProps,
        imageSize: imgSize,
        linkSize: linkSize,
        btnProps: {
          ...navProps.btnProps,
          height: btnHeight,
          font: btnFont,
        },
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const toggleSidebarHandler = () => {
  //   setIsSidebarOpen(false);
  // };

  const navRef = useRef();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //       setIsSidebarOpen(false); // Close modal when clicking outside
  //     }
  //   }

  //   if (isSidebarOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isSidebarOpen]);

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
        <div
          ref={sidebarRef}
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            alignItems: "center",
            zIndex: 8,
          }}
        >
          <figure className="burgerIcon_dropDown_container">
            <svg
              id="burgerIcon"
              // onMouseOver={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{ cursor: "pointer" }}
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H23"
                stroke="#808080"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M1 9H23"
                stroke="#808080"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M1 17H23"
                stroke="#808080"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>

            {/* <div className={`sidebar ${isSidebarOpen ? "openSidebar" : ""} `}> */}
            <div className={`sidebar`}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <ul>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/partner-with-us"}>Partner With Us</Link>
                    </li>
                    <li>
                      <Link>Offers</Link>
                    </li>
                    <li>
                      <Link>Stories</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </figure>
          <p style={{ fontSize: "0.8rem", marginInline: "28px" }}>
            <MultilanguageInput />
          </p>
          <div className="searchInputBox">
            <div className="form-control">
              {/* Search Icon */}
              <figure className="searchIcon">
                <svg
                  id="searchIconId"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  onMouseEnter={() => inputRef.current.focus()}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0322 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.9494 18.7935 8.90908 18.3914 7.93845C17.9894 6.96782 17.4001 6.08589 16.6572 5.343C15.9143 4.60011 15.0324 4.01082 14.0618 3.60877C13.0911 3.20673 12.0508 2.99979 11.0002 2.99979C9.9496 2.99979 8.90929 3.20673 7.93866 3.60877C6.96803 4.01082 6.08609 4.60011 5.34321 5.343C3.84288 6.84333 3 8.87821 3 11C3 13.1218 3.84288 15.1567 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z"
                    stroke="#808080"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </figure>

              {/* Search Input */}
              <input
                ref={inputRef}
                className="searchInput searchInput-alt"
                placeholder=""
                required
                type="text"
              />

              {/* Search Input Border */}
              <span className="searchInput-border searchInput-border-alt"></span>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}
        <div
          className={`searchbar ${
            isSearchbarOpen ? "openSearchbar" : "closeSearchbar"
          } `}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              // flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundColor: "white",

                width: "30rem",
                height: "100vh",
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <figure>
                  <img
                    src={crossIcon}
                    alt=""
                    onClick={() => setIsSearchbarOpen(false)}
                  />
                </figure>
              </div>
              <div style={{ margin: "2rem auto" }}>
                <input
                  style={{
                    width: "100%",
                    borderBottom: "1px solid #82847f",
                    backgroundColor: "transparent",
                    borderRadius: "0px",
                  }}
                  placeholder="Enter Search Term"
                  type="text"
                  name="search"
                  id="search"
                />
              </div>
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
                className="searchBtn"
              >
                <Button
                  style={{
                    borderRadius: "0",
                    width: "maxContent",
                    display: "flex",
                  }}
                >
                  SEARCH
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}
        {/* <div
          className={`sidebar ${
            isSidebarOpen ? "openSidebar" : "closeSidebar"
          } `}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <figure style={{ padding: "32px 0 32px 64px" }}>
                <img src={navbarData.brandLogo} width="100px" alt="" />
              </figure>
              <ul>
                <li>About Us</li>
                <li>Partner With Us</li>
                <li>Offers</li>
                <li>Stories</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div
              style={{
                backgroundColor: "#f3eee7",
                display: "flex",
                justifyContent: "flex-end",
                width: "30rem",
                height: "100vh",
                padding: "2rem",
              }}
            >
              <figure>
                <img src={crossIcon} alt="" onClick={toggleSidebarHandler} />
              </figure>
            </div>
          </div>
        </div> */}

        <ul className={`nav-list ${isNavOpen ? "py-[2vh]" : "hidden"}`}>
          {navbarData.links.map((link, index) => {
            if (link.text === "HOTELS & RESORTS") {
              return (
                <li
                  key={index}
                  className="dropdown-container mx-[1rem]"
                  style={{ fontSize: navProps.linkSize }}
                >
                  <DropdownMenu
                    title="HOTELS & RESORTS"
                    menuItems={hotelsAndResortsDropdown}
                  />
                </li>
              );
            }

            // Render the brand logo when index is 2
            if (index === 2) {
              return (
                <li
                  key="brand"
                  className="brand mx-[1rem]"
                  style={{ width: navProps.imageSize }}
                >
                  <Link to="/">
                    <img src={navbarData.brandLogo} alt="Vistaar Logo" />
                  </Link>
                </li>
              );
            }

            if (link.text === "DESTINATIONS") {
              return (
                <li
                  key={index}
                  className="dropdown-container mx-[1rem]"
                  style={{ fontSize: navProps.linkSize }}
                >
                  <DropdownMenu
                    title="DESTINATIONS"
                    menuItems={destinationsDropdown}
                  />
                </li>
              );
            }

            return (
              <li key={index}>
                <NavLink
                  to={link.link}
                  onClick={() => setIsNavOpen(false)}
                  style={{ fontSize: navProps.linkSize }}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}

          {/* Reserve Button */}
          <li className="reserveBtn">
            <Link to={"/booking"}>
            <Button
              style={{
                borderRadius: "0",
                width: "max-content",
                height: navProps.btnProps.height,
                fontWeight: 400,
                fontSize: navProps.btnProps.font,
                display: "flex",
                padding: "0.5rem 24px",
                alignItems: "center",
              }}
            >
              RESERVE
            </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
