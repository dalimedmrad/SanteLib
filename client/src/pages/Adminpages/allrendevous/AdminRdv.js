import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleterdv, getallrdv } from "../../../Redux/actions/rdv";
import Loader from "../../../components/Loader/Loader";
import DeleteIcon from "@material-ui/icons/Delete";

import { Row, Col } from "react-bootstrap";

const AdminRdv = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getallrdv());
  }, []);

  const rdvadmin = useSelector((state) => state.rdvReducer.result);

  const [inputText, settext] = useState("");

  return (
    <div style={{ width: "85%", marginLeft: "15%" }}>
      <div>
        {rdvadmin ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                onChange={(e) => settext(e.target.value)}
                className="form-control"
                style={{ marginTop: "100px", width: "400px", height: "25px" }}
              />
            </div>

            <Row>
              <Col className="my-5 mx-5">
                <table className="ui celled table">
                  <thead>
                    <tr>
                      <th>Nom du patient</th>
                      <th>Nom du docteur</th>
                      <th>Date du rendez-vous</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {rdvadmin
                      .filter(
                        (el) =>
                          el.client_name
                            .toLowerCase()
                            .includes(inputText.toLowerCase()) ||
                          el.doc_name
                            .toLowerCase()
                            .includes(inputText.toLowerCase())
                      )
                      .map((el) => (
                        <tr>
                          <td>{el.client_name}</td>
                          <td>{el.doc_name}</td>
                          <td>{el.date.toString()}</td>
                          <td>{el.approved.toString()}</td>
                          <td>
                            <DeleteIcon
                              titleAccess="Supprimer ce rendez-vous"
                              className="dlt"
                              style={{ fontSize: "30px" }}
                              onClick={() => dispatch(deleterdv(el._id))}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Col>
            </Row>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default AdminRdv;
