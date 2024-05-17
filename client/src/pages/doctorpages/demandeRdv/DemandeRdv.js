import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./DemandeRdv.css";
import Loader from "../../../components/Loader/Loader";
import Rdvv from "./Rdvv";

const DemandeRdv = () => {
  const user = useSelector((state) => state.userReducer.result);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [ind, setInd] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(
      rdvs?.filter(
        (el) =>
          el.doc_id === user?._id &&
          el.approved === false &&
          el.isAnnuler === false &&
          el.isRefuser === false
      )
    );
    const closedSeances = [];
    user.horaire?.forEach((el, index) => {
      if (el.seance === "ferme") {
        closedSeances.push(index);
      }
    });
    setInd(closedSeances);
  }, [rdvs, user, ind]);
  return (
    <div className="rdvv">
      {list ? (
        <>
          {list.length !== 0 ? (
            <div>
              <table className="table align-middle m-1 bg-white ahhhhh">
                <thead className="bg-light">
                  <tr>
                    <th className="tthh">Nom {"&"} prénom</th>
                    <th className="tthh">Genre</th>
                    <th className="tthh">Numéro du mobile</th>
                    <th className="tthh">Date(jour)</th>
                    <th className="tthh">Choix </th>
                    <th className="tthh">Heure</th>
                    <th className="tthh">Actions</th>
                    <th className="tthh">Autre</th>
                  </tr>
                </thead>
                <tbody>
                  {list?.map((el, index) => (
                    <Rdvv jrs={ind} rdv={el} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="msg11">
              Vous n'avez aucune demande de rendez-vous !
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default DemandeRdv;
