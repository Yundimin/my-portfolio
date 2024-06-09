import { ProjectTitle, ProjectWrapper } from "../../styles/KeyProject.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import KeyProjectDetailModal from "./KeyProjectDetailModal";
import { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { getKeyProjectInfo } from "../../firebaseFunctions";
import { KeyProjectType } from "../../types/keyProject";

function KeyProject() {
  const [keyProject, setKeyProject] = useState<KeyProjectType[]>([]);
  useEffect(
    () =>
      onSnapshot(getKeyProjectInfo, (snapshot: QuerySnapshot<DocumentData>) => {
        setKeyProject(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string | undefined>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  const handleImageClick = (imgSrc: string | undefined, imgAlt: string) => {
    setModalImage(imgSrc);
    setModalAlt(imgAlt);
    setModalShow(true);
  };

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
        >
          {keyProject && keyProject.length ? (
            keyProject?.map((keyProject) => (
              <SwiperSlide key={keyProject.id}>
                <img
                  src={keyProject.detailImg}
                  alt={`Slide Img`}
                  className="slide-img"
                />
                <div
                  className="slide-caption"
                  onClick={() =>
                    handleImageClick(keyProject.detailImg, `Slide Img`)
                  }
                >
                  {keyProject.title}
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div>ss</div>
          )}
        </Swiper>
        <img
          src={rightArrow}
          alt={"rightArrow"}
          className="key-swiper-button-next"
        ></img>
      </div>
      <KeyProjectDetailModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        imgSrc={modalImage}
        imgAlt={modalAlt}
      />
    </ProjectWrapper>
  );
}

export default KeyProject;
