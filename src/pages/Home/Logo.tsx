import React, { useState, useEffect } from "react";
import {
  DarkOverlay,
  LogoContent,
  LogoWrapper,
  NameImg,
} from "../../styles/Home.modules";
import textImg from "../../assets/text-rotate.svg";
import nameImg from "../../assets/CWJ.png";

function Logo() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundSize, setBackgroundSize] = useState("cover");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Check the width and adjust background size
      if (window.innerWidth <= 760) {
        setBackgroundSize("cover");
      } else {
        const newSize = 110 + position * 0.1 + "%";
        setBackgroundSize(newSize);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LogoWrapper>
      {/* <LogoContent>
        <img src={textImg} alt="text" className="item" />
      </LogoContent> */}
      {/* <DarkOverlay /> */}
      <NameImg src={nameImg} alt="textImg" />
    </LogoWrapper>
  );
}

export default Logo;
