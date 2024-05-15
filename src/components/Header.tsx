import React, { useState } from "react";
import { NavbarWrapper } from "../styles/Headers.modules";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import headerLogo from "../assets/headerLogo.png";

import ChangeLanguageModal from "../pages/Home/ChangeLanguageModal";

export const Header = () => {
  const { t } = useTranslation();

  const menuItems = [
    { name: "header.home", link: "/" },
    { name: "header.about", link: "About_me" },
  ];

  return (
    <NavbarWrapper className="header-container">
      <img src={headerLogo} alt="headerLogo" className="headerLogo"></img>
      <div className="navLinks">
        {menuItems.map((nav, index) => (
          <NavLink
            to={nav.link}
            key={index}
            style={{ textDecoration: "none", color: "#C8C8C8" }}
          >
            <div className="links">{t(nav.name)}</div>
          </NavLink>
        ))}
      </div>
      <ChangeLanguageModal />
    </NavbarWrapper>
  );
};

export default Header;
