import styled from "styled-components";

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  padding: 40px 0;
  margin-top: 100px;
  color: #ffffff;

  @media (max-width: 767px) {
    margin-top: 60px;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  max-width: 2000px;
  margin: auto;
  height: 840px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 767px) {
    height: 640px;
  }

  .project-slide-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-wrapper {
      display: flex;
    }

    .swiper {
      width: 90%;
      height: 90%;
      margin-bottom: 2rem;
    }

    .swiper-slide {
      width: 640px;
      justify-content: center;
      display: flex;
      transition: opacity 0.5s ease;
      flex-direction: column;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }

      .slide-img {
        width: 100%;
        height: 360px;
      }

      .slide-caption {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #ffffff;
        opacity: 0;
        color: black;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: opacity 0.3s ease;
        cursor: default;
        font-size: 20px;

        .slide-title {
          font-weight: 600;
        }
        .slide-subtitle {
          font-weight: 300;
        }

        &:hover {
          opacity: 0.9;
          cursor: pointer;
        }
      }
    }

    .tutor-swiper-button-prev,
    .tutor-swiper-button-next {
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

        .slide-caption {
          height: 100%;
          width: 100%;
          background-color: #ffffff;
          color: black;
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: opacity 0.3s ease;
          cursor: default;
          font-size: 15px;

          .slide-title {
            font-weight: 600;
          }
          .slide-subtitle {
            font-weight: 300;
          }
        }
      }
    }

    @media (max-width: 767px) {
      height: 340px;
      .swiper-slide {
        width: 100%;

        .slide-img {
          width: 100%;
          height: 250px;
          /* object-fit: cover; */
        }

        .slide-caption {
          height: 250px;
        }
      }

      .tutor-swiper-button-prev,
      .tutor-swiper-button-next {
        width: 25px;
        height: 25px;
        color: black;
        margin: 5px;
      }
    }
  }
`;
