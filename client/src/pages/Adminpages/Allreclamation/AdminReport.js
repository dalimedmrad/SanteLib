import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleterec, getallrec } from "../../../Redux/actions/rec";
import DeleteIcon from "@material-ui/icons/Delete";
import Loader from "../../../components/Loader/Loader";
import Rec from "./Rec";

const AdminReport = () => {
  const dispatch = useDispatch();

  const [inputText, settext] = useState("");
  const recall = useSelector((state) => state.recReducer.result);
  useEffect(() => {
    dispatch(getallrec());
  }, [recall]);
  return (
    <div style={{ width: "80%", marginLeft: "17%" }}>
      <div>
        {recall ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                className="form-control"
                onChange={(e) => settext(e.target.value)}
                style={{ marginTop: "120px", width: "400px" }}
              />
            </div>
            <div className="m-5">
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th>Nom {'&'} prénom</th>
                    <th>Objet</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {recall
                    .filter((el) =>
                      el.client_name
                        .toLowerCase()
                        .includes(inputText.toLowerCase())
                    )
                    .map((el) => (
                      <Rec el={el}/>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default AdminReport;
