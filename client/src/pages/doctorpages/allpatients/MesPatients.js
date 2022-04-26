import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import Client from "../../Adminpages/listclients/Client";
import "./Mespatients.css";
const MesPatients = () => {
  const user = useSelector((state) => state.userReducer.result);
  const patients = useSelector((state) => state.userReducer.client);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  useEffect(() => {
    setList(rdvs?.filter((el) => el.doc_id === user?._id));
    setList1(
      patients.filter(
        (el, index) =>
          el._id === list[index]?.client_id && list[index]?.approved === true
      )
    );
  }, [rdvs, patients, list, list1]);
  // console.log(list);
  // console.log(patients);
  return (
    <div>
      {rdvs && patients && list && list1 ? (
        <>
          {list1.length != 0 ? (
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
                    <Client patient={el} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="msg1">
              Vous n'avez aucune patient !
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MesPatients;
