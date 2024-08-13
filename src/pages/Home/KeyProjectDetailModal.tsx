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
        <Modal.Body style={{ padding: "0 50px 50px 50px" }}>
          <img
            src={imgSrc}
            alt={imgAlt}
            style={{
              width: "100%",
              minHeight: "540px",
              objectFit: "scale-down",
            }}
          />
          <div style={{ marginTop: 20 }}>{description}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default KeyProjectDetailModal;
