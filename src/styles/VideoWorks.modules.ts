import styled from "styled-components";

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  padding: 40px 0;
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #c8c8c8;

  .project-slide-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper {
      width: 88%;
      height: 100%;
    }

    .swiper-slide {
      justify-content: center;
      display: flex;
      transition: opacity 0.5s ease;
    }

    .video-swiper-button-prev,
    .video-swiper-button-next {
      cursor: pointer;
      width: 40px;
      height: 40px;
      color: black;
      padding: 20px;
    }

    @media (max-width: 1060px) {
    }
  }
`;
