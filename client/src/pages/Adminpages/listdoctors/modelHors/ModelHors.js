import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import "./ModelHors.css";

const ModelHors = ({
  hors,
  duree,
  adresse,
  datnaiss,
  phone1,
  name,
  ls,
  doctor,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
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
            Autre informations sur Dr {name} {ls}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="inps">
          <div>
            <Table striped bordered hover style={{ marginBottom: "3%" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>L'adresse du cabinet</td>
                  <td>{adresse}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>
                    La durée moyenne du consultation
                  </td>
                  <td>{duree} minutes</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Autre numéro de mobile</td>
                  <td>{phone1}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Date de naissance</td>
                  <td>{datnaiss}</td>
                </tr>
              </tbody>
            </Table>
            <Table striped bordered hover style={{ marginBottom: "3%" }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Carte visite tamponnée</td>
                  <td>
                    <a href={doctor.image} target="_blank">
                      Click ici
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Permis d'exercice</td>
                  <td>
                    <a href={doctor.image1} target="_blank">
                      Click ici
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4 style={{ textAlign: "center", marginBottom: "1.5%" }}>
              Horaire du travail
            </h4>
            <Table>
              <tbody>
                {days.map((elm, index) => (
                  <>
                    {hors[index]?.seance?.toString() != "ferme" && (
                      <tr>
                        <td style={{ fontWeight: "bold" }}>{elm}</td>
                        <td>Séance {hors[index]?.seance}</td>
                        <td>
                          {hors[index]?.start?.toString() === "" ? null : (
                            <QueryBuilderIcon style={{ color: "blue" }} />
                          )}{" "}
                          {hors[index].start}
                        </td>
                        <td>
                          {hors[index].end?.toString() === "" ? null : (
                            <QueryBuilderIcon style={{ color: "blue" }} />
                          )}{" "}
                          {hors[index].end}
                        </td>
                        <td
                          className={
                            !hors[index].startOne?.toString() && "hvrd"
                          }
                        >
                          {hors[index].startOne?.toString() && (
                            <QueryBuilderIcon style={{ color: "blue" }} />
                          )}{" "}
                          {hors[index].startOne}
                        </td>
                        <td
                          className={!hors[index]?.endOne?.toString() && "hvrd"}
                        >
                          {hors[index]?.endOne?.toString() && (
                            <QueryBuilderIcon style={{ color: "blue" }} />
                          )}{" "}
                          {hors[index]?.endOne}
                        </td>
                      </tr>
                    )}
                  </>
                ))}
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

export default ModelHors;
