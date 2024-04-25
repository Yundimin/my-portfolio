import { ProjectTitle, ProjectWrapper } from "../../styles/KeyProject.modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slideImg0 from "../../assets/slide0.png";
import slideImg1 from "../../assets/slide1.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const KeyProject: React.FC = () => {
  const slideImages = [
    slideImg0,
    slideImg1,
    slideImg0,
    slideImg1,
    slideImg0,
    slideImg1,
  ];
  return (
    <ProjectWrapper>
      <ProjectTitle>KEY PROJECTS</ProjectTitle>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {slideImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ProjectWrapper>
  );
};

export default KeyProject;
