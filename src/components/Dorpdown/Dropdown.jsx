import { Link } from "react-router-dom";
import "./Dropdown.css"
export default function DropdownMenu({ title, menuItems }) {
  return (
    <div className="dropdown">
      <button className="dropdown-title">{title}</button>
      <ul className="dropdown-menu">
        {menuItems.map((section, index) => (
          <li key={index} className="dropdown-section">
            <strong>{section.heading}</strong>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
