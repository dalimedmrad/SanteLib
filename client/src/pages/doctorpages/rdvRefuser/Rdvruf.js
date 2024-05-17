import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { getToken, sendSMS } from "../../../orangeSMS";
import { editrdv } from "../../../Redux/actions/rdv";
import MotifConsult from "../demandeRdv/MotifConsult";

const Rdvruf = ({ rdv, key, jrs }) => {
  const [Heure, setHeure] = useState({
    update: false,
    heure: rdv.heure,
  });
  const [date, setDate] = useState(new Date(rdv.date1));
  const [mode, setMode] = useState(rdv.mode);
  const sendMail = async () => {
    const message = `Bonjour chèr(e) patient ${
      rdv.client_name
    } votre rendez-vous avec Dr ${
      rdv.doc_name
    } a été modifié à le ${date.toLocaleDateString()} ${mode} à ${Heure.heure}`;

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
    } a été modifié à le ${date.toLocaleDateString()} ${mode} à ${Heure.heure}`;
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
  const handleUpdate = () => {
    setHeure({ ...Heure, update: false });
    const dat = date.toDateString();
    dispatch(
      editrdv(rdv._id, {
        approved: true,
        isRefuser: false,
        date1: new Date(dat + " 03:00:00 GMT"),
        heure: Heure.heure,
        mode: mode,
      })
    );
    sendMail();
    sendMsgp();
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
        <DatePicker
          minDetail="month"
          minDate={new Date()}
          onChange={setDate}
          value={date}
          tileDisabled={Function}
        />
      </td>
      <td className="tthh1">
        <select
          value={mode}
          className="input11"
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="Matin">Matin</option>
          <option value="Après-midi">Après-midi</option>
        </select>
      </td>
      <td className="tthh1">
        <select
          value={Heure.heure}
          className="input11"
          onChange={(e) =>
            setHeure({ ...Heure, heure: e.target.value, update: true })
          }
        >
          <option>-- Choisir --</option>
          {heur.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </td>
      <td className="tthh1">
        <button
          disabled={
            Date.parse(date) !== Date.parse(new Date(rdv.date1)) || Heure.update
              ? false
              : true
          }
          className="btn btn-success"
          onClick={handleUpdate}
        >
          Modifier
        </button>{" "}
      </td>
      <td style={{ textAlign: "center" }}>
        <MotifConsult rdv={rdv} />
      </td>
    </tr>
  );
};

export default Rdvruf;
