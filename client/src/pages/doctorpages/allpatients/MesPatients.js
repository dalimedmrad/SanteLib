import React, { useEffect, useState } from "react";
// import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import Client from "../../Adminpages/listclients/Client";
import "./Mespatients.css";
import Patient from "./Patient";
const MesPatients = () => {
  const user = useSelector((state) => state.userReducer.result);
  const patients = useSelector((state) => state.userReducer.client);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  // const filterPatient = () => {
  //   const obj = [];
  //   for (let index = 0; index < patients?.length; index++) {
  //     for (let i = 0; i < list?.length; i++) {
  //       if (
  //         patients[index]?._id === list[i].client_id &&
  //         obj.indexOf(patients[index]) === -1
  //       ) {
  //         obj.push(patients[index]);
  //       }
  //     }
  //   }
  //   setList1(obj);
  // };
  const filterPatient = () => {
    const obj = [];
    for (let index = 0; index < rdvs?.length; index++) {
      if (
        rdvs[index]?.doc_id === user?._id &&
        rdvs[index]?.approved === true &&
        rdvs[index]?.isAnnuler === false &&
        rdvs[index]?.isRefuser === false &&
        obj.indexOf(rdvs[index]?.client_name) === -1
      ) {
        obj.push(rdvs[index]);
      }
    }
    setList1(obj);
  };

  useEffect(() => {
    // setList(
    //   rdvs?.filter((el) => el.doc_id === user?._id && el.approved === true)
    // );
    filterPatient();
  }, [rdvs, patients, list, list1]);
  // console.log(list);
  // console.log(list1);
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
