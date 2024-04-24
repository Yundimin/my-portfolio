import styled from "styled-components";

export const LogoWrapper = styled.div`
  background-image: url("../assets/background.png");
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DarkOverlay = styled.div`
  position: absolute;
  width: 25%;
  height: 17px;
  background-color: rgba(
    0,
    0,
    0,
    0.3
  ); /* 어두운 배경의 색상과 투명도 조절 가능 */
  z-index: 0; /* 로고 컨텐츠 뒤로 이동 */
`;

export const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
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
`;
