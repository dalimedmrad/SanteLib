// import React from "react";
// import { useState } from "react";

// const SignUp = () => {
 

//   const [particien, setParticien] = useState({
//     sexe: "",
//     name: "",
//     lastName: "",
//     ville: "",
//     addressecab: "",
//     specialite: "",
//     phone: "",
//     email: "",
//     password: "",
//     role: "particien",
//     horaire: [
//       {
//         j1: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j2: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j3: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j4: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j5: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j6: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j7: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//     ],
//   });
 
//  const handdleChange=(e)=>{
//   particien.horaire[0].j1.seance=e.target.value
//   console.log(particien.horaire[0].j1.seance)
//  }
//   return (
   
//         <div >
      
//                 <select
//                   onChange={handdleChange}
                                               
//                   >
//                   <option value="unique">Séance Unique</option>
//                   <option value="double">Double Séance</option>
//                   <option value="ferme">Fermé</option>
//                 </select>
//         </div>
             
//   );
// };

// export default SignUp;

// horaire: [
//       {
//         j1: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j2: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j3: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j4: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j5: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j6: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//       {
//         j7: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" },
//       },
//     ],



//       // const [horaire, setHoraire] = useState([
//   //   { j1: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" } },
//   //   { j2: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" } },
//   //   { j3: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" } },
//   //   { j4: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" } },
//   //   { j5: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" } },
//   //   { j6: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" } },
//   //   { j7: { seance: "", datedeb: "", datefn: "", datedeb1: "", datefn2: "" } },
//   // ]);
//   // const handdleChange = (e) => {
//   //   particien.horaire[0].j1.seance = e.target.value;
//   //   console.log(particien);
//   // };


//   setState({...praticien,houraire:[...praticien.horaire,
//   j1: {
//    ...praticien.horaire.j1,
//   // hna 7ot les valeurs jdods
//  } 
// ] 
// })


// onChange={(e) => setParticien({...particien,horaire:[...particien.horaire,
//                   {j1: {
//                    ...particien.horaire.j1,
//                    seance:e.target.value
//                  } }
//                 ]})}

// onChange={(e) => setParticien({...particien,[particien.horaire.filter(el=>el.seance)]:e.target.value})}




//  <tr>
//             <td className="jour">
//               <strong>Lundi</strong>
//             </td>
//             <td>
//               <select
//                 onChange={(e) => setJ1({ ...j1, seance: e.target.value })}
//               >
//                 <option>-- Séance --</option>
//                 <option value="unique">Séance Unique</option>
//                 <option value="double">Double Séance</option>
//                 <option value="ferme">Fermé</option>
//               </select>
//             </td>
//             {j1.seance === "unique" || j1.seance === "double" ? (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ1({ ...j1, datedeb: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ1({ ...j1, datefn: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//               </>
//             ) : null}
//             {j1.seance === "double" && (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ1({ ...j1, datedeb1: e.target.value })}
//                   >
//                     <option>-- Début --</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ1({ ...j1, datefn1: e.target.value })}
//                   >
//                     <option>-- Fin --</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//               </>
//             )}
//           </tr>
//           <tr>
//             <td className="jour">
//               <strong>Mardi</strong>
//             </td>
//             <td>
//               <select
//                 onChange={(e) => setJ2({ ...j2, seance: e.target.value })}
//               >
//                 <option>-- Séance --</option>
//                 <option value="unique">Séance Unique</option>
//                 <option value="double">Double Séance</option>
//                 <option value="ferme">Fermé</option>
//               </select>
//             </td>
//             {j2.seance === "unique" || j2.seance === "double" ? (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ2({ ...j2, datdep: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ2({ ...j2, datefn: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//               </>
//             ) : null}
//             {j2.seance === "double" && (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ2({ ...j2, datedeb1: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ2({ ...j2, datefn1: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//               </>
//             )}
//           </tr>
//           <tr>
//             <td className="jour">
//               <strong>Mercredi</strong>
//             </td>
//             <td>
//               <select
//                 onChange={(e) => setJ3({ ...j3, seance: e.target.value })}
//               >
//                 <option>-- Séance --</option>
//                 <option value="unique">Séance Unique</option>
//                 <option value="double">Double Séance</option>
//                 <option value="ferme">Fermé</option>
//               </select>
//             </td>
//             {j3.seance === "unique" || j3.seance === "double" ? (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ6({ ...j6, datefn1: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ3({ ...j3, datefn: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//               </>
//             ) : null}
//             {j3.seance === "double" && (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ3({ ...j3, datedeb1: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ3({ ...j3, datefn1: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//               </>
//             )}
//           </tr>
//           <tr>
//             <td className="jour">
//               <strong>Jeudi</strong>
//             </td>
//             <td>
//               <select
//                 onChange={(e) => setJ4({ ...j4, seance: e.target.value })}
//               >
//                 <option>-- Séance --</option>
//                 <option value="unique">Séance Unique</option>
//                 <option value="double">Double Séance</option>
//                 <option value="ferme">Fermé</option>
//               </select>
//             </td>
//             {j4.seance === "unique" || j4.seance === "double" ? (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ4({ ...j4, datedeb: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ4({ ...j4, datefn: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => (
//                       <option value={el}>{el}</option>
//                     ))}
//                   </select>
//                 </td>
//               </>
//             ) : null}
//             {j4.seance === "double" && (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ4({ ...j4, datedeb1: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ4({ ...j4, datefn1: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//               </>
//             )}
//           </tr>
//           <tr>
//             <td className="jour">
//               <strong>Vendredi</strong>
//             </td>
//             <td>
//               <select
//                 onChange={(e) => setJ5({ ...j5, seance: e.target.value })}
//               >
//                 <option>-- Séance --</option>
//                 <option value="unique">Séance Unique</option>
//                 <option value="double">Double Séance</option>
//                 <option value="ferme">Fermé</option>
//               </select>
//             </td>
//             {j5.seance === "unique" ||
//               (j5.seance === "double" ? (
//                 <>
//                   <td>
//                     <select
//                       onChange={(e) =>
//                         setJ5({ ...j5, datedeb: e.target.value })
//                       }
//                     >
//                       <option>--Début--</option>
//                       {heure.map((el) => (
//                         <option value={el}>{el}</option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>
//                     <select
//                       onChange={(e) => setJ5({ ...j5, datefn: e.target.value })}
//                     >
//                       <option>--Fin--</option>
//                       {heure.map((el) => (
//                         <option value={el}>{el}</option>
//                       ))}
//                     </select>
//                   </td>
//                 </>
//               ) : null)}
//             {j5.seance === "double" && (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ5({ ...j5, datedeb1: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ5({ ...j5, datefn1: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//               </>
//             )}
//           </tr>
//           <tr>
//             <td>
//               <strong>Samedi</strong>
//             </td>
//             <td>
//               <select
//                 onChange={(e) => setJ6({ ...j6, seance: e.target.value })}
//               >
//                 <option>-- Séance --</option>
//                 <option value="unique">Séance Unique</option>
//                 <option value="double">Double Séance</option>
//                 <option value="ferme">Fermé</option>
//               </select>
//             </td>
//             {j6.seance === "unique" || j6.seance === "double" ? (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ6({ ...j6, datedep: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ6({ ...j6, datefn: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//               </>
//             ) : null}
//             {j6.seance === "double" && (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ6({ ...j6, datedeb1: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ6({ ...j6, datefn1: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//               </>
//             )}
//           </tr>
//           <tr>
//             <td className="jour">
//               <strong>Dimanche</strong>
//             </td>
//             <td>
//               <select
//                 onChange={(e) => setJ7({ ...j7, seance: e.target.value })}
//               >
//                 <option>-- Séance --</option>
//                 <option value="unique">Séance Unique</option>
//                 <option value="double">Double Séance</option>
//                 <option value="ferme">Fermé</option>
//               </select>
//             </td>
//             {j7.seance === "unique" || j7.seance === "double" ? (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ7({ ...j7, datedep: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ7({ ...j7, datefn: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//               </>
//             ) : null}
//             {j7.seance === "double" && (
//               <>
//                 <td>
//                   <select
//                     onChange={(e) => setJ7({ ...j7, datedep1: e.target.value })}
//                   >
//                     <option>--Début--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//                 <td>
//                   <select
//                     onChange={(e) => setJ7({ ...j7, datefn1: e.target.value })}
//                   >
//                     <option>--Fin--</option>
//                     {heure.map((el) => {
//                       <option value={el}>{el}</option>;
//                     })}
//                   </select>
//                 </td>
//               </>
//             )}
//           </tr>



  // const[role,setRole]=useState("particien");
  // const [genre, setGenre] = useState("");
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [ville, setVille] = useState("");
  // const [addressecab, setAddressecab] = useState("");
  // const [specialite, setSpecialite] = useState("");
  // const [img1, setImg1] = useState("");
  // const [img2, setImg2] = useState("");
  // const [img3, setImg3] = useState("");
  // const[phone,setPhone]=useState();
  // const[phone1,setPhone1]=useState();
  // const[password,setPassword]=useState();

  // const [j1, setJ1] = useState({
  //   seance: "",
  //   datedeb: "",
  //   datefn: "",
  //   datedeb1: "",
  //   datefn1: "",
  // });
  // const [j2, setJ2] = useState({
  //   seance: "",
  //   datedeb: "",
  //   datefn: "",
  //   datedeb1: "",
  //   datefn1: "",
  // });
  // const [j3, setJ3] = useState({
  //   seance: "",
  //   datedeb: "",
  //   datefn: "",
  //   datedeb1: "",
  //   datefn1: "",
  // });
  // const [j4, setJ4] = useState({
  //   seance: "",
  //   datedeb: "",
  //   datefn: "",
  //   datedeb1: "",
  //   datefn1: "",
  // });
  // const [j5, setJ5] = useState({
  //   seance: "",
  //   datedeb: "",
  //   datefn: "",
  //   datedeb1: "",
  //   datefn1: "",
  // });
  // const [j6, setJ6] = useState({
  //   seance: "",
  //   datedeb: "",
  //   datefn: "",
  //   datedeb1: "",
  //   datefn1: "",
  // });
  // const [j7, setJ7] = useState({
  //   seance: "",
  //   datedeb: "",
  //   datefn: "",
  //   datedeb1: "",
  //   datefn1: "",
  // });