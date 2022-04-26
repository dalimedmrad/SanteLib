import React, {useState } from "react";
import { Row, Col } from "react-bootstrap";
import {useSelector } from "react-redux";
import "./allClients.css";
import Loader from "../../../components/Loader/Loader";
import Client from "./Client";
const AdminClient = () => {

  const Clients = useSelector((state) => state.userReducer.client);
  const [inputText, settext] = useState("");
  return (
    <div>
      {Clients ? (
        <div className="allpatients">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              className="form-control mb-2"
              type="text"
              placeholder="Chercher par nom, par prénom ou par ville"
              onChange={(e) => settext(e.target.value)}
              style={{width: "500px"}}
            />
          </div>
          <Row>
            <Col className="m-5">
              <table className="ui celled table p-1">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Genre</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Date de naissance</th>
                    <th>Numéro de mobile</th>
                    <th>Email</th>
                    <th>Ville</th>
                    <th>Status de compte</th>
                    <th>Action</th>
                    <th>Statistique</th>
                  </tr>
                </thead>

                <tbody>
                  {Clients.filter(
                    (el) =>
                      el.name.toLowerCase().includes(inputText.toLowerCase()) ||
                      el.lastName
                        .toLowerCase()
                        .includes(inputText.toLowerCase()) ||
                      el.ville.toLowerCase().includes(inputText.toLowerCase())
                  ).map((el) => (
                    <Client patient={el} />
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AdminClient;
