import React, { useState, useEffect, useRef } from "react";
import {
  DarkOverlay,
  LogoContent,
  LogoWrapper,
  NameImg,
} from "../../styles/Home.modules";
import textImg from "../../assets/text-rotate.png";
import nameImg from "../../assets/CWJ.png";

function Logo() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundImageSize = 100 + scrollPosition * 0.1 + "%";

  return (
    <LogoWrapper
      style={{
        backgroundSize: backgroundImageSize,
      }}
    >
      <LogoContent>
        <img src={textImg} alt="textImg" className="item" />
      </LogoContent>
      <DarkOverlay />
      <NameImg src={nameImg} alt="textImg" />
    </LogoWrapper>
  );
}

export default Logo;
