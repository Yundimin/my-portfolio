import React, { useState } from "react";
import { NavbarWrapper } from "../styles/Headers.modules";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const menuItems = [
    { name: "header.home", link: "/" },
    { name: "header.about", link: "About_me" },
  ];

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    setShowModal(false);
  };

  return (
    <NavbarWrapper className="header-container">
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
      <div className="icon">
        <FontAwesomeIcon icon={faGlobe} onClick={() => setShowModal(true)} />
      </div>
    </NavbarWrapper>
  );
};

export default Header;
