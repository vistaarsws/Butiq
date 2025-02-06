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

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      const imgSize = Math.max(5, 10 - scrollY * 0.02) + "rem";
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

  // Define the dropdown data for "Destinations"
  const destinationsDropdown = [
    {
      heading: "NOW HOSTING AT",
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
      heading: "OPENING SOON",
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Close modal when clicking outside
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

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
          <figure>
            <img
              src={burgerIcon}
              alt=""
              id="burgerIcon"
              style={{ cursor: "pointer" }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div className={`sidebar ${isSidebarOpen ? "openSidebar" : ""} `}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <ul>
                    <li>About Us</li>
                    <li>Partner With Us</li>
                    <li>Offers</li>
                    <li>Stories</li>
                    <li>Contact Us</li>
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
                <img
                  src={searchIcon}
                  alt="Search"
                  onMouseEnter={() => inputRef.current.focus()}
                />
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
                <li key={index} className="dropdown-container mx-[1rem]">
                  <DropdownMenu
                    title="HOTELS & RESORTS"
                    menuItems={destinationsDropdown}
                  />
                </li>
              );
            }
            return (
              <>
                {index === 2 && (
                  <div
                    className="brand"
                    style={{ width: `${navProps.imageSize}` }}
                  >
                    <Link to="/">
                      <img src={navbarData.brandLogo} alt="Vistaar Logo" />
                    </Link>
                  </div>
                )}
                <li key={index}>
                  <NavLink
                    to={link.link}
                    onClick={() => setIsNavOpen(false)}
                    style={{ fontSize: navProps.linkSize }}
                  >
                    {link.text}
                  </NavLink>
                </li>
              </>
            );
          })}
          <li className="reserveBtn">
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
          </li>
        </ul>
      </nav>
    </header>
  );
}
