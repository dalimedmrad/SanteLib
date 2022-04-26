import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Stas = ({doc}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="info" onClick={handleShow}>
        Voir
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ textAlign: "center", paddingLeft: "200px" }}
            id="example-custom-modal-styling-title"
          >
            Statistique sur Dr {doc.lastName} {doc.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="inps"></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Stas;
