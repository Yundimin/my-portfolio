import { NavbarWrapper } from "../styles/Headers.modules";
import { NavLink } from "react-router-dom";
export const menuItems = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "About_me" },
];

const Header = () => {
  return (
    <NavbarWrapper className="header-container">
      <div className="navLinks">
        {menuItems.map((nav, index) => (
          <NavLink
            to={nav.link}
            key={index}
            style={{ textDecoration: "none", color: "#C8C8C8" }}
          >
            <div className="links">{nav.name}</div>
          </NavLink>
        ))}
      </div>
    </NavbarWrapper>
  );
};

export default Header;
