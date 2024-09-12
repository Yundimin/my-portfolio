import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import KeyProject from "./KeyProject";
import VideoWorks from "./VideoWorks";
import Tutoring from "./Tutoring";
import Clients from "./Clients";
import { Wrapper } from "../../styles/Home.modules";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

async function getImageUrl(img: string) {
  try {
    const storageRef = ref(storage, `assets/aboutMe/${img}`);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL", error);
    return null;
  }
}

const Home = () => {
  const [bgImg, setBgImg] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundSize, setBackgroundSize] = useState("100%");
  const [backgroundPosition, setBackgroundPosition] = useState("top");

  useEffect(() => {
    async function fetchResources() {
      const imageUrl = await getImageUrl("aboutMeBg.png");
      if (imageUrl) setBgImg(imageUrl);

      if (window.innerWidth <= 760) {
        setBackgroundSize("cover");
      }
    }
    fetchResources();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (window.innerWidth <= 760) {
        setBackgroundSize("cover");
        setBackgroundPosition("top");
      } else {
        const newSize = 100 + position * 0.03 + "%";
        setBackgroundSize(newSize);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Wrapper
          style={{
            backgroundSize: backgroundSize,
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: backgroundPosition,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >
          <Logo />
          <KeyProject />
          <VideoWorks />
          <Tutoring />
          <Clients />
        </Wrapper>
      </div>
    </>
  );
};

export default Home;
