import { ProjectTitle, ProjectWrapper } from "../../styles/VideoWorks.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import YouTube, { YouTubeProps } from "react-youtube";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

const KeyProject = () => {
  const videoId1 = [
    "atfDG8dTV50",
    "WLoOTz_7l3s",
    "WLoOTz_7l3s",
    "WLoOTz_7l3s",
    "WLoOTz_7l3s",
    "WLoOTz_7l3s",
  ];
  const videoId2 = ["atfDG8dTV50", "WLoOTz_7l3s", "WLoOTz_7l3s", "WLoOTz_7l3s"];

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "390px",
    width: "100%",
  };

  return (
    <ProjectWrapper>
      <ProjectTitle>Video Works</ProjectTitle>
      <div className="project-slide-wrapper">
        <img
          src={leftArrow}
          alt={"leftArrow"}
          className="video-swiper-button-prev"
        ></img>
        <div className="video-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="banner"
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation={{
              prevEl: ".video-swiper-button-prev",
              nextEl: ".video-swiper-button-next",
            }}
          >
            {videoId1.map((videoId, index) => (
              <SwiperSlide key={index}>
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onReady={onPlayerReady}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="banner"
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation={{
              prevEl: ".video-swiper-button-prev",
              nextEl: ".video-swiper-button-next",
            }}
          >
            {videoId1.map((videoId, index) => (
              <SwiperSlide key={index}>
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onReady={onPlayerReady}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img
          src={rightArrow}
          alt={"rightArrow"}
          className="video-swiper-button-next"
        ></img>
      </div>
    </ProjectWrapper>
  );
};

export default KeyProject;
