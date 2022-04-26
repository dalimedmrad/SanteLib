import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./SignUpDoc.css";

const Signup2 = () => {
  // const [particien, setParticien] = useState({
  //   sexe: "",
  //   name: "",
  //   lastName: "",
  //   ville: "",
  //   addressecab: "",
  //   specialite: "",
  //   image: "",
  //   phone: "",
  //   phone1: "",
  //   email: "",
  //   password: "",
  //   role: "particien",
  //   horaire: [
  //     {
  //       "lundi": { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
  //     },
  //     {
  //       "mardi": { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
  //     },
  //     {
  //       "mercredi": { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
  //     },
  //     {
  //       "jeudi": { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
  //     },
  //     {
  //       "vendredi": { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
  //     },
  //     {
  //       "samedi": { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
  //     },
  //     {
  //       "dimache": { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
  //     },
  //   ],
  // });
  // const days = [
  //   "lundi",
  //   "mardi",
  //   "mercredi",
  //   "jeudi",
  //   "vendredi",
  //   "samedi",
  //   "dimanche",
  // ];
  // const heure = [
  //   "07:00",
  //   "07:30",
  //   "08:00",
  //   "08:30",
  //   "09:00",
  //   "09:30",
  //   "10:00",
  //   "10:30",
  //   "11:00",
  //   "11:30",
  //   "12:00",
  //   "12:30",
  //   "13:00",
  //   "13:30",
  //   "14:00",
  //   "14:30",
  //   "15:00",
  //   "15:30",
  //   "16:00",
  //   "16:30",
  //   "17:00",
  //   "17:30",
  //   "18:00",
  //   "18:30",
  //   "19:00",
  //   "19:30",
  //   "20:00",
  // ];

  // const [curentIdx, setCurentIdx] = useState(1);

  // const handleChange = ({ a, e }) => {
  //   const selectedday = particien.horaire.filter((el) => {
  //     return el[`j${a}`] !== undefined;
  //   })[0];
  //   selectedday[`j${a}`]["seance"] = e.target.value;
  //   const newhraire = [
  //     ...particien.horaire.slice(0, a - 1),
  //     selectedday,
  //     ...particien.horaire.slice(a, particien.horaire.length),
  //   ];
  //   setParticien({ ...particien, horaire: [...newhraire] });
  //   setCurentIdx(a);

  //   console.log(particien.horaire);
  // };
  const [st, setSt] = useState({
    zazza: "",
    horaire: [
      { seance: "", start: "", end: "", startOne: "", endOne: "" },
      { seance: "", start: "", end: "", startOne: "", endOne: "" },
      { seance: "", start: "", end: "", startOne: "", endOne: "" },
      { seance: "", start: "", end: "", startOne: "", endOne: "" },
      { seance: "", start: "", end: "", startOne: "", endOne: "" },
      { seance: "", start: "", end: "", startOne: "", endOne: "" },
      { seance: "", start: "", end: "", startOne: "", endOne: "" },
    ],
  });
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const heure = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];
  const handleChange = ({ e, idx }) => {
    const newState = {
      ...st,
      horaire: st.horaire.map((item, index) => {
        return idx === index ? { ...item, seance: e.target.value } : item;
      }),
    };
    setSt(newState);
  };
  const handleChange1 = ({ e, idx }) => {
    const newState = {
      ...st,
      horaire: st.horaire.map((item, index) => {
        return idx === index ? { ...item, start: e.target.value } : item;
      }),
    };
    setSt(newState);
  };
  const handleChange2 = ({ e, idx }) => {
    const newState = {
      ...st,
      horaire: st.horaire.map((item, index) => {
        return idx === index ? { ...item, end: e.target.value } : item;
      }),
    };
    setSt(newState);
  };
  const handleChange3 = ({ e, idx }) => {
    const newState = {
      ...st,
      horaire: st.horaire.map((item, index) => {
        return idx === index ? { ...item, startOne: e.target.value } : item;
      }),
    };
    setSt(newState);
  };
  const handleChange4 = ({ e, idx }) => {
    const newState = {
      ...st,
      horaire: st.horaire.map((item, index) => {
        return idx === index ? { ...item, endOne: e.target.value } : item;
      }),
    };
    setSt(newState);
  };
  return (
    <div className="flex">
      {days.map((el, idx) => {
        return (
          <tr>
            <td>{el}</td>
            <td>
              <select onChange={(e)=>handleChange({e,idx})}>
                <option>choisir</option>
                <option value="unique">Séance Unique</option>
                <option value="double">Double Séance</option>
                <option value="ferme">Fermé</option>
              </select>
            </td>
            <td>
              {st.horaire[idx].seance === "unique" ||
              st.horaire[idx].seance === "double" ? (
                <>
                  <select onChange={(e)=>handleChange1({e,idx})}>
                    <option>--Début--</option>
                    {heure.map((el) => (
                      <option value={el}>{el}</option>
                    ))}
                  </select>
                  <select onChange={(e)=>handleChange2({e,idx})}>
                    <option>--Fin--</option>
                    {heure.map((el) =><option value={el}>{el}</option>)}
                  </select>
                </>
              ) : null}
            </td>
            <td>
              {st.horaire[idx].seance === "double" && (
                <>
                  <select onChange={(e)=>handleChange3({e,idx})}>
                    <option>--Début--</option>
                    {heure.map((el) => (
                      <option value={el}>{el}</option>
                    ))}
                  </select>
                  <select onChange={(e)=>handleChange4({e,idx})}>
                    <option>--Début--</option>
                    {heure.map((el) => <option value={el}>{el}</option>)}
                  </select>
                </>
              )}
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default Signup2;
