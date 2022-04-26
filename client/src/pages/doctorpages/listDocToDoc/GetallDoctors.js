import React from "react";
import "./GetAllDoctors.css";
import { getalldoctors } from "../../../Redux/actions/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Docard from "../../../components/doccard/Docard";
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getalldoctors());
  }, []);

  const doc = useSelector((state) => state.userReducer.Doc);
  const user = useSelector((state) => state.userReducer.result);

  return (
    <div className="alldoctor">
      {user ? (
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
              {doc
                ?.filter((el) => el.isDoctor === true && el._id != user._id)
                .map((el) => (
                  <Doc key={el._id} el={el} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GetallDoctors;
