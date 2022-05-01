import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Rdv_card_Client from "../../components/Rdv_card_Client";
import { getallrdv } from "../../Redux/actions/rdv";
import "./MesRdv.css";
import Rdv from "./Rdv";

const MesRdv = () => {
  const currentProfile = useSelector((state) => state.userReducer.result);
  const rdvProfile = useSelector((state) => state.rdvReducer.result);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallrdv());
    setList(rdvProfile?.filter((el) => el.client_id === currentProfile?._id));
  }, [rdvProfile, currentProfile]);
  // function convertFromStringToDate(responseDate) {
  //   let dateComponents = responseDate.split("T");
  //   let datePieces = dateComponents[0].split("-");
  //   let timePieces = dateComponents[1].split(":");
  //   return new Date(
  //     datePieces[2],
  //     datePieces[1] - 1,
  //     datePieces[0],
  //     timePieces[0],
  //     timePieces[1],
  //     timePieces[2]
  //   );
  // }
  return (
    <div style={{ marginTop: "8%" }}>
      {currentProfile && rdvProfile && list ? (
        <>
          {list.length != 0 ? (
            <div className="mesrdv">
              <h1>Gérer mes rendez-vous</h1>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date / Heure</th>
                    <th>Choix</th>
                    <th>Nom {"&"} prénom du patient(e)</th>
                    <th>Nom {"&"} prénom du docteur </th>
                    <th>Spécialité</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((el) => (
                    <Rdv rdv={el} />
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="mg1">Vous n'avez aucune rendez-vous !</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MesRdv;
