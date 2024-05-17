import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import "./listrdv.css";
import Rdv from "./Rdv";

const ListRdv = () => {
  const user = useSelector((state) => state.userReducer.result);
  const rdvs = useSelector((state) => state.rdvReducer.result);
  const [list, setList] = useState([]);
  const [ind] = useState([]);
  const [inputText, settext] = useState("");
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
  }, [rdvs,ind,user]);
  const handleChange = (e) => {
    settext(e.target.value.toLowerCase());
  };
  return (
    <div className="allpage">
      {list ? (
        <>
          {list.length !== 0 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "50px",
                  marginTop: "50px",
                }}
              >
                <input
                  className="form-control"
                  type="text"
                  placeholder="Chercher par nom ou par prénom"
                  onChange={handleChange}
                  style={{ width: "500px" }}
                />
                {/* <DatePicker
                  minDetail="month"
                  minDate={new Date()}
                  onChange={setDate}
                  value={date}
                /> */}
              </div>
              <div>
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
                    {list
                      ?.filter(
                        (el) =>
                          el.client_name.toLowerCase().includes(inputText) 
                          // ||
                          // Date.parse(new Date(el.date1)) ===
                          //   Date.parse(new Date(ddd + " 04:00:00 GMT"))
                      )

                      .map((el, index) => (
                        <Rdv jrs={ind} rdv={el} key={index} />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="msg111">
              Vous n'avez aucune rendez-vous confirmés !
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
