import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .navLinks {
    margin-left: auto;
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

  @media (max-width: 1060px) {
    .links {
      font-size: 12px;
    }
  }
`;
