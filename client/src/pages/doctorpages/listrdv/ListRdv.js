import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import "./listrdv.css";
import Rdv from "./Rdv";

const ListRdv = () => {
  const user = useSelector((state) => state.userReducer.result);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(
      rdvs?.filter(
        (el) =>
          el.doc_id === user?._id &&
          el.approved === true &&
          el.isAnnuler === false
      )
    );
  }, [rdvs]);
  return (
    <div>
      {list ? (
        <>
          {list.length != 0 ? (
            <div className="allpage">
              <table class="table align-middle mb-0 bg-white ttt">
                <thead class="bg-light">
                  <tr>
                    <th>Nom {"&"} prénom du patient</th>
                    <th>Numéro du mobile</th>
                    <th>Motif de consultation</th>
                    <th>Date(jour)</th>
                    <th>Choix </th>
                    <th>Choisir l'heure</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {list?.map((el,index) => (
                    <Rdv rdv={el} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="msg1">
              Vous n'avez aucune rendez-vous !
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ListRdv;
