import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  flex-direction: column;
  position: relative;

  .project-slide-wrapper {
    display: flex;
    justify-content: center;

    .swiper {
      width: 90%;
      height: 90%;
      margin-bottom: 2rem;
    }

    .SwiperSlide {
      display: flex;
    }

    .swiper-slide {
      justify-content: center;
      display: flex;
    }

    .swiper-button-prev,
    .swiper-button-next {
      padding: 10;
      transform: translateY(-100%);
      color: black;
    }
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  padding: 20px 0;
`;
