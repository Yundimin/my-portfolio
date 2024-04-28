import { ProjectTitle, ProjectWrapper } from "../../styles/KeyProject.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import slideImg0 from "../../assets/slide0.png";
import slideImg1 from "../../assets/slide1.png";
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
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="banner"
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
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
      </div>
    </ProjectWrapper>
  );
};

export default KeyProject;
