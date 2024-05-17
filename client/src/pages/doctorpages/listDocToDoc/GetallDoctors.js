import React, { useState } from "react";
import "./GetAllDoctors.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Doc from "./Doc";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const GetallDoctors = () => {
  const classes = useStyles();
  const [inputText, settext] = useState("");
  const [list, setList] = useState([]);
  const doc = useSelector((state) => state.userReducer.Doc);
  const user = useSelector((state) => state.userReducer.result);
  useEffect(() => {
    setList(doc?.filter((el) => el.isDoctor === true && el._id !== user?._id));
  }, [doc, user, list]);
  const handleChange = (e) => {
    settext(e.target.value.toLowerCase());
  };
  return (
    <div className="alldoctor">
      {user ? (
        <>
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
              placeholder="Chercher par nom, par prénom ou par ville"
              onChange={handleChange}
              style={{ width: "500px" }}
            />
          </div>
          <TableContainer className="alldoos" component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Photo</TableCell>
                  <TableCell align="center">Nom {"&"} Prénom</TableCell>
                  <TableCell align="center">Numéro de mobile</TableCell>
                  <TableCell align="center">Autre Numéro de mobile</TableCell>
                  <TableCell align="center">Specialité</TableCell>
                  <TableCell align="center">Ville</TableCell>
                  <TableCell align="center">L'adresse du cabinet </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list
                  ?.filter(
                    (el) =>
                      el.lastName.toLowerCase().includes(inputText) ||
                      el.name.toLowerCase().includes(inputText) ||
                      el.ville.toLowerCase().includes(inputText)
                  )
                  .map((el) => (
                    <Doc key={el._id} el={el} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GetallDoctors;
