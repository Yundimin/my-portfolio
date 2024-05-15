import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .headerLogo {
    position: absolute;
    width: 245px;
    margin-left: 65px;
  }
  .navLinks {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 77px;
    background-color: white;
    color: black;
  }

  .navLinks a.active {
    color: black !important;
  }

  .links {
    font-size: 18px;
    font-weight: 700;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.07);
    }

    &:active {
      color: black;
    }
  }

  .icon {
    position: absolute;
    right: 60px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.07);
    }
  }

  @media (max-width: 1060px) {
    .links {
      font-size: 12px;
    }
  }
`;
