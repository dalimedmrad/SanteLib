import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import Doctors from "./Doctors";
import "./AdminDashboard.css";

const NouveauDocs = () => {
  const [inputText, settext] = useState("");
  const Docteurs = useSelector((state) => state.userReducer.Doc);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(Docteurs?.filter((el) => el.isDoctor === false));
  }, []);
  return (
    <div className="row">
      {list.length != 0 ? (
        <div className="docs">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              className="form-control"
              type="text"
              placeholder="Chercher par nom, par prénom ou par ville"
              onChange={(e) => settext(e.target.value)}
              style={{ width: "500px" }}
            />
          </div>

          <table className="ui celled table">
            <thead>
              <tr>
                <th style={{ fontSize: "20px", textAlign: "center" }}>Photo</th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>Genre</th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>
                  Nom {"&"} prénom
                </th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>
                  Numéro de mobile
                </th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>
                  Adresse email
                </th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>
                  Specialité
                </th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>Ville</th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>Autre</th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>
                  Action
                </th>
                <th style={{ fontSize: "20px", textAlign: "center" }}>
                  Statistique
                </th>
              </tr>
            </thead>

            <tbody>
              {list &&
                list
                  ?.filter(
                    (el) =>
                      el.name.toLowerCase().includes(inputText.toLowerCase()) ||
                      el.lastName
                        .toLowerCase()
                        .includes(inputText.toLowerCase()) ||
                      el.ville.toLowerCase().includes(inputText.toLowerCase())
                  )
                  .map((el) => <Doctors doctor={el} />)}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="msg1">Vous n'avez aucun docteur non confirmé !</div>
      )}
    </div>
  );
};

export default NouveauDocs;
