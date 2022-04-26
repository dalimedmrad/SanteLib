import { Avatar,  TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { Button } from "react-bootstrap";

const Doc = ({el,key}) => {
  return (
    <TableRow key={key}>
      <TableCell component="th" scope="row">
      <Avatar className="inter" src={el.image2}/>
      </TableCell>
      
      <TableCell align="center">{el.name} {el.lastName}</TableCell>
      <TableCell align="center">{el.phone}</TableCell>
      <TableCell align="center">{el.phone1}</TableCell>
      <TableCell align="center">{el.specialite}</TableCell>
      <TableCell align="center">{el.ville}</TableCell>
      <TableCell align="center">{el.addressecab}</TableCell>
      <TableCell align="center"><Button  href={`mailto:${el.email}`}className="btn btn-success">Contacter</Button></TableCell>
    </TableRow>
  );
};

export default Doc;
