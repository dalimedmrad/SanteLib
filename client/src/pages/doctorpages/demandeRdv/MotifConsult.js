import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const MotifConsult = ({ rdv }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Consulter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{rdv.client_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {rdv.motif ? (
            <div>{rdv.motif}</div>
          ) : (
            <div>Il n'y a pas un motif de consultation</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MotifConsult;
