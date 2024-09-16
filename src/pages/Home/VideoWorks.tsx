import { ProjectTitle, ProjectWrapper } from "../../styles/VideoWorks.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState, useEffect } from "react";
import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import YouTube, { YouTubeProps } from "react-youtube";
import leftArrow from "../../assets/left-arrow-white.png";
import rightArrow from "../../assets/right-arrow-white.png";
import {
  getVideoWorksFirst,
  getVideoWorksSecond,
} from "../../firebaseFunctions";

const useVideoWorks = (query: any) => {
  const [videoWorks, setVideoWorks] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setVideoWorks(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );

    return () => unsubscribe();
  }, [query]);

  return videoWorks;
};

const VidowWorks = () => {
  const keyVideoWorks = useVideoWorks(getVideoWorksFirst);
  const keyVideoWorkSecond = useVideoWorks(getVideoWorksSecond);

  console.log(keyVideoWorkSecond);
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
        <div className="gradient-box-left"></div>
        <div className="gradient-box-right"></div>
        <img
          src={leftArrow}
          alt={"leftArrow"}
          className="video-swiper-button-prev"
        ></img>
        <img
          src={rightArrow}
          alt={"rightArrow"}
          className="video-swiper-button-next"
        ></img>
        <div className="video-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="banner"
            spaceBetween={10}
            cssMode={true}
            slidesPerView={"auto"}
            navigation={{
              prevEl: ".video-swiper-button-prev",
              nextEl: ".video-swiper-button-next",
            }}
          >
            {keyVideoWorks.map((videoWork, index) => (
              <SwiperSlide key={index}>
                <YouTube
                  videoId={videoWork.id}
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
            {keyVideoWorkSecond.map((videoWork, index) => (
              <SwiperSlide key={index}>
                <YouTube
                  videoId={videoWork.id}
                  opts={opts}
                  onReady={onPlayerReady}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default VidowWorks;
