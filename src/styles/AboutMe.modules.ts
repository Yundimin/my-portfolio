import styled from "styled-components";

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  color: white;
  font-size: 30px;
  background: black;
`;

export const AboutMeWrapper = styled.div`
  width: 1080px;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  font-weight: 200;

  .logo-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    flex-direction: column;
    gap: 360px;
  }

  .about-me-box {
    width: 100%;
    padding: 0 190px;
    display: flex;
    flex-direction: column;
    gap: 80px;

    .about-img-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .about-img {
      }

      .about-title {
        margin-top: 10px;
      }
    }

    .about-text-box {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: white;
      .text-title {
        font-size: 28px;
        font-weight: 600;
      }

      .text-summary {
        font-size: 24px;
        font-weight: 200;
        margin: 60px 0 20px 0;
      }

      .text-content-box {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    }

    .edu-contact-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: white;

      .school-box {
        .school-title {
          font-weight: 500;
          text-align: center;
        }

        .school-info {
          margin-left: 15px;
          margin-bottom: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }

      .contact-box {
        .contact-title {
          font-weight: 500;
          text-align: center;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
    }

    .company-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      font-weight: 200;
      .title {
        font-weight: 500;
        text-align: center;
      }

      .company {
        margin-bottom: 30px;
      }

      .company h2 {
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 200;
      }

      .project {
        margin-left: 15px;
      }

      .project h3 {
        font-size: 16px;
        margin-top: 10px;
        font-weight: 200;
      }

      ul {
        padding-left: 20px;
      }

      li {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }

    .project-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      font-weight: 200;

      .title {
        font-weight: 500;
        margin-bottom: 10px;
        text-align: center;
      }

      .project-box {
        margin-bottom: 10px;
      }

      .project-box h2 {
        font-size: 16px;
        font-weight: 200;
      }

      .project {
        margin-left: 15px;
      }

      .project h3 {
        font-size: 16px;
        margin-top: 10px;
        font-weight: 200;
      }

      ul {
        padding-left: 20px;
      }

      li {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }

    .lecture-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      .title {
        font-weight: 500;
        text-align: center;
        margin-bottom: 10px;
      }

      .lecture-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .special-lecture-box {
          display: flex;
          flex-direction: column;
          .lecture-title {
            margin-bottom: 10px;
          }

          .project-box {
            margin-left: 15px;
            margin-bottom: 5px;
          }

          .project-box h2 {
            font-size: 16px;
            font-weight: 200;
          }

          .project {
            margin-left: 15px;
          }

          .project h3 {
            font-size: 16px;
            margin-top: 10px;
            font-weight: 200;
          }

          ul {
            padding-left: 20px;
          }

          li {
            font-size: 16px;
            margin-bottom: 5px;
            line-height: 15px;
          }
        }

        .exam-non-profit-box {
          display: flex;
          flex-direction: column;

          .lecture-title {
            margin-bottom: 10px;
          }

          .project-box {
            margin-left: 20px;
            margin-bottom: 5px;
          }

          .project-box h2 {
            font-size: 16px;
            font-weight: 200;
          }

          .project {
            margin-left: 15px;
          }

          .project h3 {
            font-size: 16px;
            margin-top: 10px;
            font-weight: 200;
          }

          ul {
            padding-left: 20px;
          }

          li {
            font-size: 16px;
            margin-bottom: 5px;
            line-height: 15px;
          }
        }
      }
    }

    .award-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;

      .title {
        font-weight: 500;
        text-align: center;
        margin-bottom: 10px;
      }

      .award {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .display-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      margin: auto;
      .title {
        font-weight: 500;
        text-align: center;
        margin-bottom: 10px;
      }

      .display {
        width: 100%;
        display: flex;
      }
    }
  }
`;
