import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import "./ProfileDoc.css";
import { useDispatch } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FaceIcon from "@material-ui/icons/Face";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { editprofile } from "../../../Redux/actions/user";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const ProfileDoc = () => {
  const user = useSelector((state) => state.userReducer.result);
  const [particien, setParticien] = useState({
    update: false,
  });
  const posgabes = [33.8892778, 10.0851486];
  const posmednine = [33.2365402, 10.2689769];
  const postataouin = [32.9245782, 10.4074854];
  const posgbeli = [33.7036675, 8.9560029];
  const postozeur = [33.9162871, 8.1007728];
  const possfax = [34.7613744, 10.6630584];
  const possousse = [35.8283295, 10.5830349];
  const posmestir = [35.7256967, 10.73772];
  const posmehdia = [35.504731, 11.0345474];
  const posgafsa = [34.4286553, 8.7374206];
  const posgasrine = [35.1702616, 8.8072583];
  const poskeroine = [35.6733929, 10.0694277];
  const possilyena = [36.0868049, 9.3564891];
  const poskef = [36.1668561, 8.6673017];
  const posbeja = [36.7297086, 9.1700926];
  const posnebel = [36.4064394, 10.351228];
  const posjandouba = [36.5032858, 8.7613819];
  const postunis = [36.7948624, 10.0732375];
  const posariane = [36.8688529, 10.1353404];
  const posmanouba = [36.8098832, 10.0601505];
  const posbnarouse = [36.7464825, 10.2171373];
  const posbnzarte = [37.281068, 9.8264848];
  const poszagoine = [36.4088749, 10.1187425];
  const possidibouzid = [35.0363883, 9.4595281];
  const searchPodition = () => {
    if (particien?.ville === "Medenine") {
      setParticien({ ...particien, position: posmednine });
    }
    if (particien?.ville === "Tunis") {
      setParticien({ ...particien, position: postunis });
    }
    if (particien?.ville === "Sfax") {
      setParticien({ ...particien, position: possfax });
    }
    if (particien?.ville === "Ariana") {
      setParticien({ ...particien, position: posariane });
    }
    if (particien?.ville === "Ben arous") {
      setParticien({ ...particien, position: posbnarouse });
    }
    if (particien?.ville === "Manouba") {
      setParticien({ ...particien, position: posmanouba });
    }
    if (particien?.ville === "Benzart") {
      setParticien({ ...particien, position: posbnzarte });
    }
    if (particien?.ville === "Kef") {
      setParticien({ ...particien, position: poskef });
    }
    if (particien?.ville === "Jendouba") {
      setParticien({ ...particien, position: posjandouba });
    }
    if (particien?.ville === "Seliana") {
      setParticien({ ...particien, position: possilyena });
    }
    if (particien?.ville === "Nabeul") {
      setParticien({ ...particien, position: posnebel });
    }
    if (particien?.ville === "Sousse") {
      setParticien({ ...particien, position: possousse });
    }
    if (particien?.ville === "Mestir") {
      setParticien({ ...particien, position: posmestir });
    }
    if (particien?.ville === "Mehdia") {
      setParticien({ ...particien, position: posmehdia });
    }
    if (particien?.ville === "Kairouane") {
      setParticien({ ...particien, position: poskeroine });
    }
    if (particien?.ville === "Gafsa") {
      setParticien({ ...particien, position: posgafsa });
    }
    if (particien?.ville === "Guebili") {
      setParticien({ ...particien, position: posgbeli });
    }
    if (particien?.ville === "Tozeur") {
      setParticien({ ...particien, position: postozeur });
    }
    if (particien?.ville === "Tataouine") {
      setParticien({ ...particien, position: postataouin });
    }
    if (particien?.ville === "Zaghouane") {
      setParticien({ ...particien, position: poszagoine });
    }
    if (particien?.ville === "Sidi bouzid") {
      setParticien({ ...particien, position: possidibouzid });
    }
    if (particien?.ville === "Gabes") {
      setParticien({ ...particien, position: posgabes });
    }
    if (particien?.ville === "Guasrine") {
      setParticien({ ...particien, position: posgasrine });
    }
    if (particien?.ville === "Béja") {
      setParticien({ ...particien, position: posbeja });
    }
  };
  useEffect(() => {
    setParticien(user);
  }, [user]);
  useEffect(() => {
    searchPodition();
  }, [particien?.ville]);
  const dispatch = useDispatch();
  const villes = [
    "Tunis",
    "Ariana",
    "Ben arous",
    "Manouba",
    "Benzart",
    "Kef",
    "Jendouba",
    "Guasrine",
    "Jendouba",
    "Seliana",
    "Nabeul",
    "Sfax",
    "Sousse",
    "Mestir",
    "Mehdia",
    "Kairouane",
    "Gafsa",
    "Gabes",
    "Guebili",
    "Tozeur",
    "Medenine",
    "Tataouine",
    "Zaghouane",
    "Sidi bouzid",
  ];
  // const specilaités = [
  //   "L’allergologie ou l’immunologie",
  //   "L’anesthésiologie",
  //   "L’andrologie",
  //   "cardiologie",
  //   "chirurgie",
  //   "chirurgie cardiaque",
  //   "chirurgie esthétique, plastique et reconstructive",
  //   "chirurgie générale",
  //   "chirurgie maxillo-faciale",
  //   "chirurgie pédiatrique",
  //   "chirurgie thoracique",
  //   "chirurgie vasculaire",
  //   "neurochirurgie",
  //   "dermatologie",
  //   "L’endocrinologie",
  //   "gastro-entérologie",
  //   "gériatrie",
  //   "gynécologie",
  //   "L’hématologie",
  //   "L’hépatologie",
  //   "L’infectiologie",
  //   "médecine aiguë",
  //   " médecine du travail",
  //   "médecine générale",
  //   "médecine interne",
  //   "médecine nucléaire",
  //   "médecine palliative",
  //   "médecine physique",
  //   "médecine préventive",
  //   "néonatologie",
  //   "néphrologie",
  //   "neurologie",
  //   "L’odontologie",
  //   "L’oncologie",
  //   "L’obstétrique",
  //   "L’ophtalmologie",
  //   "L’orthopédie",
  //   "L’Oto-rhino-laryngologie",
  //   "pédiatrie",
  //   "pneumologie",
  //   "psychiatrie",
  //   "radiologie",
  //   "radiothérapie",
  //   "rhumatologie",
  //   "L’urologie",
  // ];
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
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const duree = [
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "50",
    "55",
    "60",
  ];
  const [loading2, setLoading2] = useState(false);

  const handleChange = ({ e, idx }) => {
    const newState = {
      ...particien,
      update: true,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, seance: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange1 = ({ e, idx }) => {
    const newState = {
      ...particien,
      update: true,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, start: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange2 = ({ e, idx }) => {
    const newState = {
      ...particien,
      update: true,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, end: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange3 = ({ e, idx }) => {
    const newState = {
      ...particien,
      update: true,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, startOne: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange4 = ({ e, idx }) => {
    const newState = {
      ...particien,
      update: true,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, endOne: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleUpload2 = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);
      setLoading2(true);
      const res = await axios.post("/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      setLoading2(false);
      setParticien({ ...particien, image2: res.data.url, update: true });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const onClick = (element) => {
    document.getElementById("img01").src = element;
    document.getElementById("modal01").style.display = "block";
    document.getElementById("modal01").style.zIndex = "999";
  };
  const onClick1 = () => {
    document.getElementById("modal01").style.display = "none";
  };
  const handleUpdateDoc = (e) => {
    e.preventDefault();
    if (particien.phone.length != 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Votre numéro de télèphone est invalide`,
      });
    } else if (particien.phone1.length != 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Votre numéro de télèphone est invalide`,
      });
    } else if (particien.image2 === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Le photo de profile est obligatoire`,
      });
    } else {
      setParticien({ ...particien, update: false });
      dispatch(editprofile(particien._id, particien));
    }
  };
  return (
    <div className="row">
      {user ? (
        <div className="profilDocall">
          <form onSubmit={handleUpdateDoc}>
            <div className="alls">
              <div className="profilDoc">
                <div className="profilDoc1">
                  <div className="divs">
                    <FaceIcon className="svg" />
                    <input
                      className="inputs11"
                      type="text"
                      placeholder="Nom du famille"
                      required
                      name="name"
                      value={particien?.name}
                      disabled
                      // onChange={(e) =>
                      //   setParticien({ ...particien, name: e.target.value,update:true })
                      // }
                    />
                  </div>
                  <div className="divs">
                    <input
                      className="inputs11"
                      value={particien?.datnaiss}
                      disabled
                    />
                  </div>
                  <div className="divs">
                    <select
                      className="inputs"
                      required
                      value={particien?.duree}
                      onChange={(e) =>
                        setParticien({
                          ...particien,
                          duree: e.target.value,
                          update: true,
                        })
                      }
                    >
                      <option value="">
                        -- Quelle est la durée moyenne du consultation ? --
                      </option>
                      {duree.map((el) => (
                        <option className="option" value={el}>
                          {el} minutes
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="divs">
                    <PhoneIcon className="svg" />
                    <input
                      className="inputs"
                      type="number"
                      value={particien?.phone1}
                      onChange={(e) =>
                        setParticien({
                          ...particien,
                          phone1: e.target.value,
                          update: true,
                        })
                      }
                      placeholder="Autre numéro de mobile"
                      required
                    />
                  </div>
                  <div className="divs">
                    <LocationOnIcon className="svg" />
                    <input
                      className="inputs"
                      onChange={(e) =>
                        setParticien({
                          ...particien,
                          addressecab: e.target.value,
                          update: true,
                        })
                      }
                      type="text"
                      value={particien?.addressecab}
                      placeholder="Adresse du cabinet(Rue,étage...)"
                      required
                    />
                  </div>
                </div>
                <div className="profilDoc2">
                  <div className="divs">
                    <FaceIcon className="svg" />
                    <input
                      className="inputs11"
                      type="text"
                      placeholder="Prénom"
                      value={particien?.lastName}
                      disabled
                    />
                  </div>
                  <div className="divs">
                    <input
                      className="inputs11"
                      disabled
                      value={particien?.specialite}
                    />
                  </div>
                  <div className="divs">
                    <PhoneIcon className="svg" />
                    <input
                      className="inputs"
                      type="number"
                      value={particien?.phone}
                      onChange={(e) =>
                        setParticien({
                          ...particien,
                          phone: e.target.value,
                          update: true,
                        })
                      }
                      placeholder="Numéro de mobile"
                      required
                    />
                  </div>
                  <div className="divs">
                    <LocationOnIcon className="svg" />
                    <select
                      className="inputs"
                      required
                      value={particien?.ville}
                      onChange={(e) =>
                        setParticien({
                          ...particien,
                          ville: e.target.value,
                          update: true,
                        })
                      }
                    >
                      <option value="">-- Ville --</option>
                      {villes.map((el) => (
                        <option className="option" value={el}>
                          {el}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="divs">
                    <EmailIcon className="svg" />
                    <input
                      className="inputs11"
                      value={particien?.email}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="Docpf1">
                <div className="registerImage">
                  <label>Photo de profile</label>
                  <input type="file" onChange={handleUpload2} />
                </div>
                {loading2 ? (
                  <div className="ui active inline loader gggg"></div>
                ) : (
                  <div>
                    <img
                      className={
                        particien?.image2
                          ? "docprofilephoto w3-hover-opacity"
                          : null
                      }
                      required
                      src={particien?.image2 ? particien?.image2 : null}
                      onClick={() => onClick(particien?.image2)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {particien?.image2 ? (
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          setParticien({
                            ...particien,
                            image2: "",
                            update: true,
                          })
                        }
                      >
                        Retirer
                      </button>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
            <div className="horsdoc">
              <div className="horstit1">Horaire d'ouverture</div>
              <table className="horaire1">
                {days.map((el, idx) => {
                  return (
                    <tr>
                      <td className="jour">{el}</td>
                      <td>
                        <select
                          className="inputs1"
                          onChange={(e) => handleChange({ e, idx })}
                          value={particien?.horaire[idx].seance}
                        >
                          <option value="">-- Choisir --</option>
                          <option value="unique">Séance Unique</option>
                          <option value="double">Double Séance</option>
                          <option value="ferme">Fermé</option>
                        </select>
                      </td>
                      {particien?.horaire[idx].seance === "unique" ||
                      particien?.horaire[idx].seance === "double" ? (
                        <>
                          <td className="tds1">
                            <select
                              className="inputs1"
                              onChange={(e) => handleChange1({ e, idx })}
                              value={particien?.horaire[idx].start}
                            >
                              <option value="">-- Début --</option>
                              {heure.map((el) => (
                                <option value={el}>{el}</option>
                              ))}
                            </select>
                          </td>
                          <td className="tds1">
                            <select
                              className="inputs1"
                              onChange={(e) => handleChange2({ e, idx })}
                              value={particien?.horaire[idx].end}
                            >
                              <option value="">-- Fin --</option>
                              {heure.map((el) => (
                                <option value={el}>{el}</option>
                              ))}
                            </select>
                          </td>
                        </>
                      ) : null}
                      {particien?.horaire[idx].seance === "double" && (
                        <>
                          <td className="tds1">
                            <select
                              className="inputs1"
                              onChange={(e) => handleChange3({ e, idx })}
                              value={particien?.horaire[idx].startOne}
                            >
                              <option value="">-- Début --</option>
                              {heure.map((el) => (
                                <option value={el}>{el}</option>
                              ))}
                            </select>
                          </td>
                          <td className="tds1">
                            <select
                              className="inputs1"
                              onChange={(e) => handleChange4({ e, idx })}
                              value={particien?.horaire[idx].endOne}
                            >
                              <option value="">-- Fin --</option>
                              {heure.map((el) => (
                                <option value={el}>{el}</option>
                              ))}
                            </select>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </table>
            </div>
            <input
              disabled={particien?.update ? false : true}
              type="submit"
              value="Modifier"
              className="docbtn1 btn btn-success rounded-pill"
            />
          </form>
          <div id="modal01" class="w3-modal" onClick={onClick1}>
            <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">
              &times;
            </span>
            <div class="w3-modal-content w3-animate-zoom">
              <img id="img01" style={{ width: "80%", height: "80%" }} />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProfileDoc;
