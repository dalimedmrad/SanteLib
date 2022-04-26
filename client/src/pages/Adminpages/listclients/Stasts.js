import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getallrdv } from "../../../Redux/actions/rdv";

const Stasts = ({ patient }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [rst, setRst] = useState([]);
  const [rst1, setRst1] = useState([]);
  const [rst2, setRst2] = useState([]);
  const [rst3, setRst3] = useState([]);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  useEffect(() => {
    dispatch(getallrdv());
    setRst(rdvs?.filter((el) => el.client_id === patient._id));
    setRst1(rdvs?.filter((el) => el.client_id === patient._id && el.approved === true));
    setRst2(rdvs?.filter((el) => el.client_id === patient._id && el.isAnnuler === true));
    setRst3(rdvs?.filter((el) => el.client_id === patient._id));
  }, [rdvs]);
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
            Statistique sur Ms/Mme {patient.lastName} {patient.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="inps">
          <div>
            <Table striped bordered hover style={{ marginBottom: "3%" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    Le nombre consultation demandé 
                  </td>
                  <td style={{ fontWeight: "bold" }}>{rst?.length}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Le nombre consultation accepté </td>
                  <td>{rst1?.length}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Le nombre consultation refusé</td>
                  <td>{rst2?.length}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Stasts;
