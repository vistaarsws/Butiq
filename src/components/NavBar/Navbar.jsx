import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData } from "../../utils/Constant";
import { Button } from "@material-tailwind/react";
import DropdownMenu from "../Dorpdown/Dropdown";
import burgerIcon from "../../assets/images/Frame1.svg";
import crossIcon from "../../assets/images/cross-svgrepo-com.svg";
import searchIcon from "../../assets/images/iconamoon_search-thin.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const [logoSize, setLogoSize] = useState("10rem"); // Initial size in rem

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSize = Math.max(5, 10 - scrollY * 0.02) + "rem"; // Shrinks smoothly
      setLogoSize(newSize);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      heading: "HOTELS",
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
              style={{ cursor: "pointer" }}
              onMouseOver={() => setIsSidebarOpen(true)}
            />
          </figure>
          <p style={{ fontSize: "0.8rem", marginInline: "28px" }}>EN</p>
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
                <Button style={{ borderRadius: "0", width: "maxContent" }}>
                  SEARCH
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}
        <div
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
        </div>

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
                  <div className="brand" style={{ width: `${logoSize}` }}>
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
          <li className="reserveBtn">
            <Button
              style={{
                borderRadius: "0",
                width: "max-content",
                fontWeight: 400,
                fontSize: "16px",
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
