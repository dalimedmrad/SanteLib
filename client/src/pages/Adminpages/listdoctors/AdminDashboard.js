import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import {
  deleteuser,
  editprofile,
  getalldoctors,
} from "../../../Redux/actions/user";
import Loader from "../../../components/Loader/Loader";
import "./AdminDashboard.css";
import Doctors from "./Doctors";

const AdminDashboard = () => {

  const [inputText, settext] = useState("");
  const Docteurs = useSelector((state) => state.userReducer.Doc);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(Docteurs?.filter((el) => el.isDoctor === true));
  }, [Docteurs]);
  return (
    <div className="row">
      {Docteurs ? (
        <div className="docs">
          {list != 0 && (
            <div style={{ display: "flex", justifyContent: "center",marginBottom:"50px",marginTop:"50px" }}>
              <input
                className="form-control"
                type="text"
                placeholder="Chercher par nom, par prénom ou par ville"
                onChange={(e) => settext(e.target.value)}
                style={{ width: "500px" }}
              />
            </div>
          )}

          <table className="table align-middle mb-0 bg-white">
            {list != 0 && (
              <thead class="bg-light">
                <tr>
                  <th style={{ textAlign: "center" }}>Photo</th>
                  <th style={{ textAlign: "center" }}>Genre</th>
                  <th style={{ textAlign: "center" }}>Nom & prénom</th>
                  <th style={{ textAlign: "center" }}>Numéro de mobile</th>
                  <th style={{ textAlign: "center" }}>Adresse email</th>
                  <th style={{ textAlign: "center" }}>Specialité</th>
                  <th style={{ textAlign: "center" }}>Ville</th>
                  <th style={{ textAlign: "center" }}>Autre</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                  <th style={{ textAlign: "center" }}>Statistique</th>
                </tr>
              </thead>
            )}

            <tbody>
              {list?.length === 0 ? (
                <div className="msg">
                  Vous n'avez aucun compte verifié !
                </div>
              ) : (
                list
                  ?.filter(
                    (el) =>
                      el.name.toLowerCase().includes(inputText.toLowerCase()) ||
                      el.lastName
                        .toLowerCase()
                        .includes(inputText.toLowerCase()) ||
                      el.ville.toLowerCase().includes(inputText.toLowerCase())
                  )
                  .map((el) => <Doctors doctor={el} />)
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AdminDashboard;
