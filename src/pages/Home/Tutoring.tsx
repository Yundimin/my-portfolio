import { ProjectTitle, ProjectWrapper } from "../../styles/Tutoring.modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import leftArrow from "../../assets/left-arrow-white.png";
import rightArrow from "../../assets/right-arrow-white.png";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { getTutoringInfo } from "../../firebaseFunctions";
import { KeyProjectType } from "../../types/keyProject";
import KeyProjectDetailModal from "./KeyProjectDetailModal";

const Tutoring = () => {
  const [tutoring, setTutoring] = useState<KeyProjectType[]>([]);
  useEffect(
    () =>
      onSnapshot(getTutoringInfo, (snapshot: QuerySnapshot<DocumentData>) => {
        setTutoring(
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
  const [modalTitle, setModalTitle] = useState<string | undefined>("");
  const [modalDescription, setModalDescription] = useState<string | undefined>(
    ""
  );

  const handleImageClick = (
    imgSrc: string | undefined,
    imgAlt: string,
    title: string | undefined,
    description: string | undefined
  ) => {
    setModalImage(imgSrc);
    setModalAlt(imgAlt);
    setModalTitle(title);
    setModalDescription(description);
    setModalShow(true);
  };

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
          spaceBetween={10}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".tutor-swiper-button-prev",
            nextEl: ".tutor-swiper-button-next",
          }}
        >
          {tutoring && tutoring.length ? (
            tutoring.map((tutoring, index) => (
              <SwiperSlide
                key={index}
                onClick={() =>
                  handleImageClick(
                    tutoring.detailImg,
                    "Slide Img",
                    tutoring.detailTitle,
                    tutoring.detailDescription
                  )
                }
              >
                <img
                  src={tutoring.titleImg}
                  alt={`Slide ${index}`}
                  className="slide-img"
                />
                <div className="slide-caption">
                  <div className="slide-title"> {tutoring.title}</div>
                  <div className="slide-subtitle">{tutoring.subtitle}</div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div></div>
          )}
        </Swiper>
        <img
          src={rightArrow}
          alt={"rightArrow"}
          className="tutor-swiper-button-next"
        ></img>
      </div>
      <KeyProjectDetailModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        imgSrc={modalImage}
        imgAlt={modalAlt}
        title={modalTitle}
        description={modalDescription}
      />
    </ProjectWrapper>
  );
};

export default Tutoring;
