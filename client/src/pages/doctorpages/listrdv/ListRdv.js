import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import "./listrdv.css";
import Rdv from "./Rdv";

const ListRdv = () => {
  const user = useSelector((state) => state.userReducer.result);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [list, setList] = useState([]);
  const [ind, setInd] = useState([]);
  useEffect(() => {
    setList(
      rdvs?.filter(
        (el) =>
          el.doc_id === user?._id &&
          el.approved === true &&
          el.isAnnuler === false &&
          el.isRefuser === false
      )
    );
    user?.horaire?.filter((el, index) => {
      if (el.seance === "ferme") {
        ind.push(index);
      }
    });
  }, [rdvs]);
  return (
    <div>
      {list ? (
        <>
          {list.length != 0 ? (
            <div className="allpage">
              <table class="table align-middle bg-white ttt">
                <thead class="bg-light">
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
                    <Rdv jrs={ind} rdv={el} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="msg1">Vous n'avez aucune rendez-vous !</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ListRdv;