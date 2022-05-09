import "date-fns";
import React, { useState } from "react";
import axios from "axios";

import { getToken, sendSMS } from "../../../orangeSMS";

import { makeStyles, TextField } from "@material-ui/core";
import { editrdv } from "../../../Redux/actions/rdv";
import { useDispatch, useSelector } from "react-redux";
import MotifConsult from "./MotifConsult";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),

    width: 180,
  },
}));
const Rdvv = ({ rdv, key }) => {
  const [heure, setHeure] = useState("");
  const [date, setDate] = useState(new Date(Date.parse(rdv.date1)));
  const doc = useSelector((state) => state.userReducer.result);
  const sendMail = async () => {
    const message = `Bonjour chére patient ${rdv.client_name} votre rendez-vous avec Dr ${rdv.doc_name} est le ${date} à ${heure}`;

    const email = rdv.emailPatient;
    const data = { email, message };
    await axios.post("/api/user/sendmail", data);
  };
  const sendMsgp = async () => {
    const token = await getToken();
    // console.log(token)
    // const senderAdress = "+21656813222";
    const address = `+216${rdv.phone}`;
    const message = `Bonjour chére patient ${rdv.client_name} votre rendez-vous avec Dr ${rdv.doc_name} est le ${date} à ${heure}`;
    const res = await sendSMS(address, message, token);
    // console.log(res);
  };
  const dispatch = useDispatch();
  const classes = useStyles();
  const heur = [
    "07h00",
    "07h30",
    "08h00",
    "08h30",
    "09h00",
    "09h30",
    "10h00",
    "10h30",
    "11h00",
    "11h30",
    "12h00",
    "12h30",
    "13h00",
    "13h30",
    "14h00",
    "14h30",
    "15h00",
    "15h30",
    "16h00",
    "16h30",
    "17h00",
    "17h30",
    "18h00",
    "18h30",
    "19h00",
    "19h30",
    "20h00",
  ];

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editrdv(rdv._id, { approved: true, date: date, heure: heure }));
    sendMail();
    sendMsgp();
  };
  // console.log(date);
  const sendMail1 = async () => {
    const message = `Bonjour chèr(e) patient(e) ${rdv.client_name}, votre demande de rendez-vous avec Dr ${rdv.doc_name} a été refusé vous pouvez me contacter directemant le docteur sur ses numéros ${doc.phone} / ${doc.phone1}`;

    const email = rdv.emailPatient;
    const data = { email, message };
    await axios.post("/api/user/sendmail", data);
  };
  const sendMsgp1 = async () => {
    const token = await getToken();
    // console.log(token)
    // const senderAdress = "+21656813222";
    const address = `+216${rdv.phone}`;
    const message = `Bonjour chèr(e) patient(e) ${rdv.client_name}, votre demande de rendez-vous avec Dr ${rdv.doc_name} a été refusé vous pouvez me contacter directemant le docteur sur ses numéros ${doc.phone} / ${doc.phone1}`;
    const res = await sendSMS(address, message, token);
    // console.log(res);
  };
  const handleUpdate1 = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Es-tu sûr?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(editrdv(rdv._id, { isRefuser: true }));
        sendMail1();
        sendMsgp1();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <tr key={key}>
      <td className="tthh1">{rdv.client_name}</td>
      <td className="tthh1">{rdv.phone}</td>
      <td className="tthh1">
        {/* <TextField
          id="date"
          type="date"
          value={Date.parse(date.getDate())}
          onChange={(e) => setDate(e.target.value)}
          
          className={classes.textField}
        /> */}
        {rdv.date1.substring(0,15)}
      </td>
      <td className="tthh1">
        <select className="input11" value={rdv.mode} placeholder="Model de voiture">
          <option>--- Choisir ---</option>
          <option>Matin</option>
          <option>Aprés midi</option>
        </select>
      </td>
      <td className="tthh1">
        <select className="input11" onChange={(e) => setHeure(e.target.value)}>
          <option>-- Choisir --</option>
          {heur.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </td>
      <td className="tthh1">
        <button
          disabled={date && heure ? false : true}
          className="btn btn-success"
          onClick={handleUpdate}
        >
          Confirmer
        </button>{" "}
        &nbsp;
        <button className="btn btn-warning" onClick={handleUpdate1}>
          Refuser
        </button>
      </td>
      <td style={{textAlign:"center"}}>
        <MotifConsult rdv ={rdv} />
      </td>
    </tr>
  );
};

export default Rdvv;
