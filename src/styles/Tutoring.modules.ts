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

    .swiper-wrapper {
      display: flex;
      justify-content: space-evenly;
    }

    .swiper {
      width: 90%;
      height: 90%;
      margin-bottom: 2rem;
    }

    .swiper-slide {
      width: 400px;
      justify-content: center;
      display: flex;
      transition: opacity 0.5s ease;
      flex-direction: column;

      &:hover {
        opacity: 0.7;
      }

      .slide-img {
        width: 100%;
        height: 400px;
      }

      .slide-caption {
        height: 100px;
        width: 100%;
        background-color: #ff7c7c;
        color: black;
        font-weight: 700;
        justify-content: center;
        display: flex;
        align-items: center;
        transition: opacity 0.3s ease;
        cursor: default;
      }
    }

    .tutor-swiper-button-prev,
    .tutor-swiper-button-next {
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
