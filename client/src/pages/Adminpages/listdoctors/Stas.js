import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Stas = ({ doc }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rst, setRst] = useState([]);
  const [rst1, setRst1] = useState([]);
  const [rst2, setRst2] = useState([]);
  const [rst3, setRst3] = useState([]);
  const [rst4, setRst4] = useState([]);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  useEffect(() => {
    setRst(rdvs?.filter((el) => el.doc_id === doc._id));
    setRst1(
      rdvs?.filter((el) => el.doc_id === doc._id && el.approved === true)
    );
    setRst2(
      rdvs?.filter((el) => el.doc_id === doc._id && el.isAnnuler === true)
    );
    setRst3(rdvs?.filter((el) => el.doc_id === doc._id));
    setRst4(
      rdvs?.filter(
        (el) =>
          el.doc_id === doc._id &&
          el.isRefuser === false &&
          el.approved === true &&
          el.isAnnuler === true
      )
    );
  }, [rdvs,doc]);
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
        <Modal.Body className="inps">
          {" "}
          <div>
            <Table striped bordered hover style={{ marginBottom: "3%" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    Le nombre de consultation en total
                  </td>
                  <td style={{ fontWeight: "bold" }}>{rst?.length}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    Le nombre de consultation accepté et n'est pas annuler{" "}
                  </td>
                  <td style={{ fontWeight: "bold" }}>{rst1?.length}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    Le nombre de consultation annulé et n'est pas accepter
                  </td>
                  <td style={{ fontWeight: "bold" }}>{rst2?.length}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    Le nombre de consultation accepté et annulé
                  </td>
                  <td style={{ fontWeight: "bold" }}>{rst4?.length}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    Le nombre de consultation refusé
                  </td>
                  <td style={{ fontWeight: "bold" }}>{rst3?.length}</td>
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

export default Stas;
