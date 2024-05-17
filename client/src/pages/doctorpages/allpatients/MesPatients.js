import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import "./Mespatients.css";
import Patient from "./Patient";
const MesPatients = () => {
  const user = useSelector((state) => state.userReducer.result);
  const patients = useSelector((state) => state.userReducer.client);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [list] = useState([]);
  const [list1, setList1] = useState([]);

  const filterPatient = useCallback(() => {
    const obj = [];
    const clientNames = new Set();
    for (const rdv of rdvs) {
      if (
        rdv?.doc_id === user?._id &&
        rdv?.approved === true &&
        rdv?.isAnnuler === false &&
        rdv?.isRefuser === false &&
        !clientNames.has(rdv?.client_name)
      ) {
        clientNames.add(rdv?.client_name);
        obj.push(rdv);
      }
    }
    setList1(obj);
  }, [rdvs, user]);

  useEffect(() => {
    if (rdvs && user) {
      filterPatient();
    }
  }, [rdvs, user, filterPatient]);
  return (
    <div>
      {rdvs && patients && list && list1 ? (
        <>
          {list1.length !== 0 ? (
            <div className="patientsAll">
              <table className="ui celled table">
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
                  </tr>
                </thead>

                <tbody>
                  {list1?.map((el) => (
                    <Patient patient={el} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="msg1">Vous n'avez aucune patient !</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MesPatients;
