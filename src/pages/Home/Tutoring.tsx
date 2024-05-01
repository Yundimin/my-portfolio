import { ProjectTitle, ProjectWrapper } from "../../styles/Tutoring.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import slideImg0 from "../../assets/slide0.png";
import slideImg1 from "../../assets/slide1.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Tutoring = () => {
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
      <ProjectTitle>Tutoring</ProjectTitle>
      <div className="project-slide-wrapper">
        <img
          src={leftArrow}
          alt={"leftArrow"}
          className="tutor-swiper-button-prev"
        ></img>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="banner"
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".tutor-swiper-button-prev",
            nextEl: ".tutor-swiper-button-next",
          }}
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
          className="tutor-swiper-button-next"
        ></img>
      </div>
    </ProjectWrapper>
  );
};

export default Tutoring;
