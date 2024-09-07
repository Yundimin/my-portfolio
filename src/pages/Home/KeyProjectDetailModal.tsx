import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

interface ImageModalProps {
  show: boolean;
  handleClose: () => void;
  imgSrc?: string;
  imgAlt: string;
  title?: string;
  description?: string;
}

const StyledModal = styled(Modal)`
  .modal-xl {
    max-width: 1140px;
  }

  img {
    width: 100%;
    min-height: 540px;
    object-fit: "scale-down";
  }

  .modal-body {
    padding: 10px;
    margin: auto;
  }

  @media (max-width: 768px) {
    .custom-modal {
      padding: 0 !important;
    }
    .modal-xl {
      max-width: 100%;
      margin: 0;
      height: 100%;
    }

    .modal-content {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    }

    .modal-body {
      padding: 10px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    img {
      min-height: 300px !important;
      object-fit: contain;
    }
  }
`;

const KeyProjectDetailModal: React.FC<ImageModalProps> = ({
  show,
  handleClose,
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <>
      <StyledModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="xl"
        className="custom-modal"
      >
        <Modal.Header>
          <Modal.Title style={{ borderBottom: "none", marginLeft: "20px" }}>
            {title}
          </Modal.Title>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
            style={{ marginRight: "10px" }}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <img src={imgSrc} alt={imgAlt} />
          <div style={{ marginTop: 20 }}>{description}</div>
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default KeyProjectDetailModal;
