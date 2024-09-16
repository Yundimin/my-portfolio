import styled from "styled-components";

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin-bottom: 40px;
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  max-width: 2000px;
  margin: auto;
  height: 1180px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: transparent;
  padding: 90px 0;

  .project-slide-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .video-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
    }

    .swiper-wrapper {
      display: flex;
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      width: 600px;
      justify-content: center;
      transition: opacity 0.5s ease;
    }

    .video-swiper-button-prev,
    .video-swiper-button-next {
      z-index: 3;
      position: absolute;
      cursor: pointer;
      width: 48px;
    }

    .video-swiper-button-prev {
      left: 20px;
    }

    .video-swiper-button-next {
      right: 20px;
    }

    .gradient-box-left {
      position: absolute;
      z-index: 2;
      width: 20%;
      left: 0;
      height: 67%;
      background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    }

    .gradient-box-right {
      position: absolute;
      z-index: 2;
      width: 20%;
      right: 0;
      height: 67%;
      background: linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    }

    @media (max-width: 1400px) {
      .swiper-slide {
        width: 500px;
      }
    }

    @media (max-width: 767px) {
      .swiper-slide {
        width: 300px;
      }
      .video-swiper-button-prev,
      .video-swiper-button-next {
        width: 25px;
      }

      .video-swiper-button-prev {
        left: 10px;
      }

      .video-swiper-button-next {
        right: 10px;
      }
    }
  }
`;
