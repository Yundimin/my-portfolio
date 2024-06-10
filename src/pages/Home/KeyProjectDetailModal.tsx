import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

interface ImageModalProps {
  show: boolean;
  handleClose: () => void;
  imgSrc?: string;
  imgAlt: string;
  title?: string;
  description?: string;
}

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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgSrc} alt={imgAlt} style={{ width: "100%" }} />
          <div style={{ marginTop: 20 }}>{description}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default KeyProjectDetailModal;
