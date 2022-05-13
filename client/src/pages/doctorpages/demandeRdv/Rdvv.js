import "date-fns";
import React, { useState } from "react";
import axios from "axios";
import { getToken, sendSMS } from "../../../orangeSMS";
import { editrdv, editrdv1 } from "../../../Redux/actions/rdv";
import { useDispatch, useSelector } from "react-redux";
import MotifConsult from "./MotifConsult";
import Swal from "sweetalert2";
import DatePicker from "react-date-picker";

const Rdvv = ({ rdv, key, jrs }) => {
  const [heure, setHeure] = useState("");
  const [date, setDate] = useState(new Date(rdv.date1));
  const doc = useSelector((state) => state.userReducer.result);
  const sendMail = async () => {
    const message = `Bonjour chèr(e) patient(e) ${
      rdv.client_name
    } votre rendez-vous avec Dr ${
      rdv.doc_name
    } est le ${date.toLocaleDateString()} à ${heure}`;

    const email = rdv.emailPatient;
    const data = { email, message };
    await axios.post("/api/user/sendmail", data);
  };
  const sendMsgp = async () => {
    const token = await getToken();
    const address = `+216${rdv.phone}`;
    const message = `Bonjour chèr(e) patient(e) ${
      rdv.client_name
    } votre rendez-vous avec Dr ${
      rdv.doc_name
    } est le ${date.toLocaleDateString()} à ${heure}`;
    await sendSMS(address, message, token);
  };
  const dispatch = useDispatch();
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
    const dat = date.toDateString();
    dispatch(
      editrdv(rdv._id, {
        approved: true,
        date1: new Date(dat + " 03:00:00 GMT"),
        heure: heure,
      })
    );
    sendMail();
    sendMsgp();
  };
  const sendMail1 = async () => {
    const message = `Bonjour chèr(e) patient(e) ${rdv.client_name}, votre demande de rendez-vous avec Dr ${rdv.doc_name} a été refusé vous pouvez me contacter directemant le docteur sur ses numéros ${doc.phone} / ${doc.phone1}`;

    const email = rdv.emailPatient;
    const data = { email, message };
    await axios.post("/api/user/sendmail", data);
  };
  const sendMsgp1 = async () => {
    const token = await getToken();
    const address = `+216${rdv.phone}`;
    const message = `Bonjour chèr(e) patient(e) ${rdv.client_name}, votre demande de rendez-vous avec Dr ${rdv.doc_name} a été refusé vous pouvez contacter directemant le docteur sur ces numéros ${doc.phone} / ${doc.phone1}`;
    await sendSMS(address, message, token);
  };
  const handleUpdate1 = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Es-tu sûr?",
      text: "Vous allez refuser ce rendez-vous.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(editrdv1(rdv._id, { isRefuser: true }));
        sendMail1();
        sendMsgp1();
        Swal.fire("Annulé!", "Ce rendez-vous est annulé.", "success");
      }
    });
  };
  const Function = ({ activeStartDate, date, view }) =>
    date.getDay() === jrs[0] ||
    date.getDay() === jrs[1] ||
    date.getDay() === jrs[2] ||
    date.getDay() === jrs[3] ||
    date.getDay() === jrs[4] ||
    date.getDay() === jrs[5] ||
    date.getDay() === jrs[6];
  return (
    <tr key={key}>
      <td className="tthh1">{rdv.client_name}</td>
      <td className="tthh1">{rdv.sexe}</td>
      <td className="tthh1">{rdv.phone}</td>
      <td className="tthh1">
        {/* <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={classes.textField}
        /> */}
        <DatePicker
          minDetail="month"
          minDate={new Date()}
          onChange={setDate}
          value={date}
          tileDisabled={Function}
        />
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
        <button className="btn btn-warning" onClick={handleUpdate1}>
          Refuser
        </button>
      </td>
      <td style={{ textAlign: "center" }}>
        <MotifConsult rdv={rdv} />
      </td>
    </tr>
  );
};

export default Rdvv;
