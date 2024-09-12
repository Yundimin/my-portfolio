import styled from "styled-components";

export const ClientWrapper = styled.div`
  /* background-image: url("../assets/background.png");
  background-size: cover;
  background-position: top;
  background-color: rgba(0, 0, 0, 0.5); */
  width: 100%;
  max-width: 1400px;
  height: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  margin: auto;

  @media (max-width: 1685px) {
    height: 1000px;
  }

  @media (max-width: 1385px) {
    height: 600px;
  }

  @media (max-width: 980px) {
    height: 500px;
  }

  @media (max-width: 690px) {
    height: 400px;
  }
`;

export const ClientImg = styled.img`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
`;
