import styled from "styled-components";

export const LogoWrapper = styled.div`
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: top;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  @media (max-width: 1685px) {
    height: 1000px;
  }

  @media (max-width: 1400px) {
    height: 850px;
  }

  @media (max-width: 1175px) {
    height: 650px;
  }

  @media (max-width: 920px) {
    height: 500px;
  }
`;

export const DarkOverlay = styled.div`
  position: absolute;
  width: 40%;
  height: 17px;
  background-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.7) 20%,
    rgba(0, 0, 0, 0) 50%
  );

  z-index: 0;
`;

export const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17px;
  width: 100%;
  overflow: hidden;

  @keyframes moveRightToLeft {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-33%);
    }
  }

  .item {
    margin: 0 auto;
    position: relative;
    transform: translate3d(0, 0, 0);
    height: 100%;
    color: black;
    animation: moveRightToLeft 15s linear infinite;
  }
`;

export const NameImg = styled.img`
  position: absolute;

  @media (max-width: 690px) {
    width: 200px;
  }
`;
