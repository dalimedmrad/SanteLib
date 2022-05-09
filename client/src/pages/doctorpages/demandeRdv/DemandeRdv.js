import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./DemandeRdv.css";
import Loader from "../../../components/Loader/Loader";
import Rdvv from "./Rdvv";

const DemandeRdv = () => {
  const user = useSelector((state) => state.userReducer.result);
  const rdvs = useSelector((state) => state.rdvReducer.result);
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
  }, [rdvs]);
  //   const compare = () => {
  //     for (let i = 0; i < getMat.length; i++) {
  //       for (let j = 0; j < user.mat_id.length; j++) {
  //         if (getMat[i]._id === user.mat_id[j]._id) {
  //           listMat.push(getMat[i]);
  //         }
  //       }
  //     }
  //   };
  return (
    <div>
      {list ? (
        <>
          {list.length != 0 ? (
            <div className="rdvv">
              <table className="table align-middle m-1 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th className="tthh">Nom {"&"} prénom</th>
                    <th className="tthh">Numéro du mobile</th>
                    <th className="tthh">Date(jour)</th>
                    <th className="tthh">Choix </th>
                    <th className="tthh">Choisir l'heure</th>
                    <th className="tthh">Actions</th>
                    <th className="tthh">Motif de consultation</th>
                  </tr>
                </thead>
                <tbody>
                  {list?.map((el, index) => (
                    <Rdvv rdv={el} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="msg1">
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
