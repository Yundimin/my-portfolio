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
  height: 720px;
  display: flex;
  flex-direction: column;
  position: relative;

  .project-slide-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper {
      width: 88%;
      height: 90%;
      margin-bottom: 2rem;
    }

    .swiper-slide {
      width: 360px;
      justify-content: center;
      display: flex;
      transition: opacity 0.5s ease;

      &:hover {
        opacity: 0.7;
      }

      .slide-img {
        width: 100%;
      }

      .slide-caption {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #ffffff;
        color: black;
        font-weight: 700;
        opacity: 0;
        justify-content: center;
        display: flex;
        align-items: center;
        transition: opacity 0.3s ease;
        cursor: default;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .key-swiper-button-prev,
    .key-swiper-button-next {
      cursor: pointer;
      width: 40px;
      height: 40px;
      color: black;
      padding: 20px;
    }

    @media (max-width: 1060px) {
      .swiper-slide {
        width: 300px;
        margin: 0 10px;
      }
    }
  }
`;
