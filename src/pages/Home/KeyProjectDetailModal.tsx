import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

interface ImageModalProps {
  show: boolean;
  handleClose: () => void;
  imgSrc?: string;
  imgAlt: string;
}

const KeyProjectDetailModal: React.FC<ImageModalProps> = ({
  show,
  handleClose,
  imgSrc,
  imgAlt,
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
          <Modal.Title>쿠쿠르 삥뽕</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default KeyProjectDetailModal;
