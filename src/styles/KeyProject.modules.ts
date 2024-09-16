import styled from "styled-components";

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #ffffff;
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 840px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 70px 0;
  margin: auto;

  .project-slide-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-wrapper {
      display: flex;
    }

    .swiper {
      width: 100%;
      height: 100%;
      margin-bottom: 2rem;
    }

    .swiper-slide {
      width: 360px;
      height: 500px;
      justify-content: center;
      display: flex;
      transition: opacity 0.5s ease;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }

      .slide-img {
        width: 100%;
      }

      .slide-caption {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #ffffff;

        opacity: 0;
        justify-content: center;
        display: flex;
        align-items: center;
        transition: opacity 0.3s ease;
        flex-direction: column;

        .slide-title {
          color: black;
          font-weight: 600;
          font-size: 24px;
        }

        .slide-subtitle {
          font-size: 18px;
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }

    .key-swiper-button-prev,
    .key-swiper-button-next {
      cursor: pointer;
      width: 40px;
      height: 40px;
      color: black;
      margin: 20px;
    }

    @media (max-width: 1060px) {
      .swiper-slide {
        width: 300px;
        margin: 0 10px;
      }
    }

    @media (max-width: 767px) {
      .swiper-slide {
        width: 360px;
        height: 500px;
        margin: 0 10px;

        .slide-img {
          width: 360px;
        }

        .slide-caption {
          position: absolute;
          height: 100%;
          width: 360px;
          background-color: #ffffff;

          opacity: 0;
          justify-content: center;
          display: flex;
          align-items: center;
          transition: opacity 0.3s ease;
          flex-direction: column;

          .slide-title {
            color: black;
            font-weight: 600;
            font-size: 24px;
          }

          .slide-subtitle {
            font-size: 18px;
          }

          &:hover {
            opacity: 0.7;
          }
        }
      }
      .key-swiper-button-prev,
      .key-swiper-button-next {
        cursor: pointer;
        width: 25px;
        height: 25px;
        color: black;
        margin: 5px;
      }
    }
  }
`;
