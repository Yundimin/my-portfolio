import { ProjectTitle, ProjectWrapper } from "../../styles/KeyProject.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import slideImg0 from "../../assets/slide0.png";
import slideImg1 from "../../assets/slide1.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const KeyProject = () => {
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
      <div className="project-slide-wrapper">
        <img
          src={leftArrow}
          alt={"leftArrow"}
          className="key-swiper-button-prev"
        ></img>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="banner"
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".key-swiper-button-prev",
            nextEl: ".key-swiper-button-next",
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slideImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} className="slide-img" />
              <div className="slide-caption">Your Caption Here</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src={rightArrow}
          alt={"rightArrow"}
          className="key-swiper-button-next"
        ></img>
      </div>
    </ProjectWrapper>
  );
};

export default KeyProject;
