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
  width: 100%;
  max-width: 1080px;
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
    margin: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 60px;

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

    .choo-img-box {
      display: flex;
      gap: 60px;
      justify-content: normal;

      flex-wrap: wrap;

      .choo-text-box {
        display: flex;
        flex-direction: column;
        color: white;
        justify-content: center;

        .choo-title-box {
          display: flex;
          margin-bottom: 30px;
          .choo-title {
            font-size: 36px;
            font-weight: 500;
            width: 130px;
          }
          .choo-birth {
            font-size: 30px;
            font-weight: 300;
            display: flex;
            align-items: center;
          }
        }

        .choo-info-box {
          display: flex;

          .choo-info-name {
            width: 130px;
            font-size: 20px;
            font-weight: 500;
            color: #6e6e6e;
          }
        }
      }
    }

    .about-text-box {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: white;
      padding: 40px 15px;
      border-top: 2px solid white;
      border-bottom: 2px solid white;

      .text-title {
        font-size: 24px;
        font-weight: 600;
        align-self: self-start;
        margin-bottom: 10px;
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
      flex-direction: column;
      justify-content: space-between;
      color: white;
      padding: 0 15px;

      .school-title {
        font-weight: 600;
        margin-bottom: 20px;
      }

      .school-wrapper {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding-left: 10px;

        .school-box {
          width: 400px;
          .school-name {
            font-weight: 600;
          }

          .school-info {
            margin-left: 15px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            .school-major {
              width: 185px;
            }

            .school-honor-education-box {
              display: flex;
              padding-left: 20px;
              gap: 15px;
            }
          }
        }
      }

      .contact-box {
        .contact-title {
          font-weight: 500;
          text-align: center;
          margin-bottom: 20px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }

    .company-wrapper {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      color: white;
      font-weight: 200;
      .title {
        font-weight: 500;
        margin-bottom: 20px;
      }

      .company {
        margin-bottom: 30px;

        .company-name {
          font-weight: 500;
        }

        .company-position {
          padding-left: 15px;
          margin-bottom: 20px;
        }

        .company-project {
          font-size: 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .project {
            margin-left: 15px;
            width: 400px;
          }

          .project h3 {
            font-size: 16px;
            margin-top: 10px;
            font-weight: 200;
          }

          ul {
            padding-left: 20px;
            font-size: 15px;
            font-weight: 200;
          }

          li {
            font-size: 14px;
            margin-bottom: 5px;
            font-weight: 200;
          }
        }
      }

      .company h2 {
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 200;
      }
    }

    .project-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      color: white;
      font-weight: 200;
      padding: 0 15px;
      flex-direction: column;

      .title {
        font-weight: 500;
        margin-bottom: 10px;
      }

      .project-box {
        margin-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 15px;
        .project {
          display: flex;
          flex-direction: column;
          width: 400px;

          .project-title {
            font-weight: 500;
            margin: 10px 0 5px 0;
          }

          .project-description {
            margin-left: 20px;
            font-size: 15px;
          }
        }
      }
    }

    .lecture-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 15px;
      color: white;

      .title {
        font-weight: 500;
        margin-bottom: 10px;
      }

      .lecture-box {
        display: flex;
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 15px;

        .project {
          display: flex;
          flex-direction: column;
          width: 400px;

          .project-title {
            font-weight: 500;
            margin: 10px 0 5px 0;
          }

          .project-description {
            font-size: 15px;
          }
        }
      }
    }

    .award-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 15px;
      color: white;

      .title {
        font-weight: 500;
        margin-bottom: 10px;
      }

      .award {
        padding-left: 15px;
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .display-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 15px;
      color: white;

      .title {
        font-weight: 500;
        margin-bottom: 10px;
      }

      .display {
        width: 100%;
        padding-left: 15px;
        display: flex;
      }
    }

    .extra-wrapper {
      width: 100%;
      max-width: 800px;
      display: flex;
      padding: 0 15px;
      flex-direction: column;
      color: white;

      .title {
        font-weight: 500;
        margin-bottom: 10px;
      }

      .extra-box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 15px;

        .exam-non-profit-box {
          display: flex;
          flex-direction: column;

          .non-profit-title {
            margin: 10px 0;
            font-weight: 500;
          }

          .exam-art-title {
            margin-bottom: 10px;
            font-weight: 500;
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
  }

  @media (max-width: 767px) {
    .about-me-box {
      .choo-img-box {
        justify-content: center;

        .choo-text-box {
          .choo-title-box {
            display: flex;
            margin-bottom: 30px;
            .choo-title {
              font-size: 28px;
              font-weight: 500;
              width: 130px;
            }
            .choo-birth {
              font-size: 25px;
              font-weight: 300;
              display: flex;
              align-items: center;
            }
          }

          .choo-info-box {
            display: flex;
            font-size: 15px;
            .choo-info-name {
              min-width: 130px;
              font-size: 15px;
              font-weight: 500;
              color: #6e6e6e;
            }
          }
        }
      }

      .edu-contact-wrapper {
        .school-title {
          margin-bottom: 10px;
        }

        .school-box {
          .school-name {
            margin: 10px 0 5px 0;
          }

          .school-info {
            margin-left: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
      }

      /* .lecture-wrapper {
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
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;

          .exam-non-profit-box {
            display: flex;
            flex-direction: column;

            .non-profit-title {
              margin-top: 30px;
              margin-bottom: 10px;
            }

            .exam-art-title {
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
      } */

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
          flex-direction: column;
          justify-content: center;
          margin-bottom: 10px;
        }
      }
    }
  }
`;
