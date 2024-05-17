import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import "./rdvAnnuler.css";
import RRDDVV from "./RRDDVV";

const RdvAnnuler = () => {
  const user = useSelector((state) => state.userReducer.result);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(
      rdvs?.filter(
        (el) =>
          el.doc_id === user?._id &&
          el.approved === true &&
          el.isAnnuler === true
      )
    );
  }, [rdvs, user]);
  return (
    <div className="allpage">
      {list ? (
        <>
          {list.length !== 0 ? (
            <div>
              <table class="table align-middle mb-0 bg-white ttt">
                <thead class="bg-light">
                  <tr>
                    <th>Nom {"&"} prénom du patient</th>
                    <th>Numéro du mobile</th>
                    <th>Choix </th>
                    <th>Date(jour) / Heure</th>
                  </tr>
                </thead>
                <tbody>
                  {list?.map((el, index) => (
                    <RRDDVV rdv={el} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="msg11">Vous n'avez aucune rendez-vous annulé !</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RdvAnnuler;
