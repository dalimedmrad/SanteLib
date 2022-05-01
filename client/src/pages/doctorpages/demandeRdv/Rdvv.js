import "date-fns";
import React, { useState } from "react";
import axios from "axios";

import { getToken, sendSMS } from "../../../orangeSMS";

import { makeStyles, TextField } from "@material-ui/core";
import { editrdv } from "../../../Redux/actions/rdv";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),

    width: 180,
  },
}));
const Rdvv = ({ rdv, key }) => {
  const [heure, setHeure] = useState("");
  const [date, setDate] = useState(new Date(Date.parse(rdv.date1)));
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

  return (
    <tr key={key}>
      <td className="tthh1">{rdv.client_name}</td>
      <td className="tthh1">{rdv.phone}</td>
      <td className="tthh1">
        <TextField
          id="date"
          // label="Birthday"
          type="date"
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
          // defaultValue="2017-05-24"
          className={classes.textField}
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        {rdv.date1}
      </td>
      <td className="tthh1">{rdv.mode}</td>
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
        <button
          className="btn btn-warning"
          // onClick={handleUpdate}
        >
          Refuser
        </button>
      </td>
    </tr>
  );
};

export default Rdvv;
