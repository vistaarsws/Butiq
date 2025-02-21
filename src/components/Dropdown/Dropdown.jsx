import { Link } from "react-router-dom";
import "./Dropdown.css";
export default function DropdownMenu({ title, menuItems }) {
  return (
    <div
      className={`dropdown ${
        title == "DESTINATIONS" ? "destinationStyle" : ""
      } `}
    >
      <button className="dropdown-title">{title}</button>
      <ul className="dropdown-menu">
        {menuItems.map((section, index) => (
          <li key={index} className="dropdown-section">
            <strong>{section.heading}</strong>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={
                      title === "DESTINATIONS"
                        ? `/destination${item.link}`
                        : item.link
                    }
                    state={{ data: item }} // This should work in React Router v6
                    style={{
                      cursor:
                        section.heading === "OPENING SOON"
                          ? "default"
                          : "pointer",
                    }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
