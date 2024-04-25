import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  background-color: gold;
  flex-direction: column;

  .swiper {
    width: 90%;
    height: 100%;
    position: relative;
    z-index: 1;
    margin-bottom: 2rem;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .swiper-slide img {
    width: 100%;
  }

  .swiper-button-prev {
    left: -20px;
  }

  .banner .swiper-button-next {
    right: 50px;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  padding: 20px 0;
`;
