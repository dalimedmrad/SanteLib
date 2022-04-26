import React from "react";
import "./SignUpDoc.css";
import { useState } from "react";
import { register1 } from "../../Redux/actions/user";
import { useHistory } from "react-router-dom";
import { useRef, useEffect } from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { useDispatch } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
// import { clearErrors, login, register } from "../../actions/userAction";
// import { useAlert } from "react-alert";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { init } from "ityped";
import axios from "axios";
import Swal from "sweetalert2";

const SignUpDoc = () => {
  const textRef = useRef();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed: 20,
  //     strings: [
  //       "améliorez la prise en charge de vos patients",
  //       "développez votre activité",
  //       "gagnez du temps au quotidien",
  //       "gagnez en confort de travail",
  //     ],
  //   });
  // });
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
  const specilaités = [
    "L’allergologie ou l’immunologie",
    "L’anesthésiologie",
    "L’andrologie",
    "cardiologie",
    "chirurgie",
    "chirurgie cardiaque",
    "chirurgie esthétique, plastique et reconstructive",
    "chirurgie générale",
    "chirurgie maxillo-faciale",
    "chirurgie pédiatrique",
    "chirurgie thoracique",
    "chirurgie vasculaire",
    "neurochirurgie",
    "dermatologie",
    "L’endocrinologie",
    "gastro-entérologie",
    "gériatrie",
    "gynécologie",
    "L’hématologie",
    "L’hépatologie",
    "L’infectiologie",
    "médecine aiguë",
    " médecine du travail",
    "médecine générale",
    "médecine interne",
    "médecine nucléaire",
    "médecine palliative",
    "médecine physique",
    "médecine préventive",
    "néonatologie",
    "néphrologie",
    "neurologie",
    "L’odontologie",
    "L’oncologie",
    "L’obstétrique",
    "L’ophtalmologie",
    "L’orthopédie",
    "L’Oto-rhino-laryngologie",
    "pédiatrie",
    "pneumologie",
    "psychiatrie",
    "radiologie",
    "radiothérapie",
    "rhumatologie",
    "L’urologie",
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
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
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
  const [particien, setParticien] = useState({
    sexe: "",
    name: "",
    lastName: "",
    datnaiss: "",
    ville: "",
    addressecab: "",
    specialite: "",
    image: "",
    image1: "",
    image2: "",
    phone: "",
    phone1: "",
    email: "",
    password: "",
    duree: "",
    isAuth: false,
    role: "particien",
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
  const [loading, setLoading] = useState();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleChange = ({ e, idx }) => {
    const newState = {
      ...particien,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, seance: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange1 = ({ e, idx }) => {
    const newState = {
      ...particien,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, start: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange2 = ({ e, idx }) => {
    const newState = {
      ...particien,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, end: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange3 = ({ e, idx }) => {
    const newState = {
      ...particien,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, startOne: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleChange4 = ({ e, idx }) => {
    const newState = {
      ...particien,
      horaire: particien.horaire.map((item, index) => {
        return idx === index ? { ...item, endOne: e.target.value } : item;
      }),
    };
    setParticien(newState);
  };
  const handleUpload = async (e) => {
    setLoading(false);
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
      setLoading(true);
      const res = await axios.post("/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      setLoading(false);
      setParticien({ ...particien, image: res.data.url });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const handleUpload1 = async (e) => {
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
      setLoading1(true);
      const res = await axios.post("/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      setLoading1(false);
      setParticien({ ...particien, image1: res.data.url });
    } catch (err) {
      alert(err.response.data.msg);
    }
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
      setParticien({ ...particien, image2: res.data.url });
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
  const handelSubmit = () => {
    const reqs = document.getElementById("check");
    if (reqs.checked && particien) {
      dispatch(register1(particien));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "SVP veuillez remplir tous les champs !",
      });
    }
  };
  return (
    <div className="SignUpBoxDoc">
      <div className="col-md-12">
        <h1 className="intro">
          La nouvelle génération de solutions
          <br /> pour les praticiens
        </h1>
        <h2 className="intro1">Equipez vous de Santélib et</h2>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">
              améliorez la prise en charge de vos patients
            </div>
            <h1 className="i-title-item">développez votre activité</h1>
            <h1 className="i-title-item">gagnez du temps au quotidien </h1>
            <h1 className="i-title-item">gagnez en confort de travail</h1>
          </div>
        </div>
      </div>
      <div className="signUpDocall col-md-12">
        <form onSubmit={handelSubmit}>
          <div className="alls">
            <h2 className="msg">
              S'il vous plait, chère docteur veuillez remplir soigneusement ce
              formulaire
            </h2>
            <div className="signUpDoc">
              <div className="signUpDoc01">
                <div className="divs1">
                  <select
                    className="inputsdoc"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, sexe: e.target.value })
                    }
                  >
                    <option className="option">-- Genre ---</option>
                    <option className="option" value="homme">
                      Homme
                    </option>
                    <option className="option" value="femme">
                      Femme
                    </option>
                  </select>
                </div>
                <div className="divs1">
                  <FaceIcon className="svg" />
                  <input
                    className="inputsdoc"
                    type="text"
                    placeholder="Prénom"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, lastName: e.target.value })
                    }
                  />
                </div>
                <div className="divs1">
                  <select
                    className="inputsdoc"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, specialite: e.target.value })
                    }
                  >
                    <option>-- Quelle est votre spécialité --</option>
                    {specilaités.map((el) => (
                      <option className="option" value={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="divs1">
                  <PhoneIcon className="svg" />
                  <input
                    maxLength={8}
                    className="inputsdoc"
                    type="number"
                    onChange={(e) =>
                      setParticien({ ...particien, phone: e.target.value })
                    }
                    placeholder="Numéro de mobile"
                    required
                  />
                </div>
                <div className="divs1">
                  <LocationOnIcon className="svg" />
                  <select
                    className="inputsdoc"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, ville: e.target.value })
                    }
                  >
                    <option>-- Ville --</option>
                    {villes.map((el) => (
                      <option className="option" value={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="divs1">
                  <EmailIcon className="svg" />
                  <input
                    className="inputsdoc"
                    onChange={(e) =>
                      setParticien({ ...particien, email: e.target.value })
                    }
                    type="email"
                    placeholder="Adresse email"
                    required
                    name="password"
                  />
                </div>
              </div>
              <div className="signUpDoc02">
                <div className="divs1">
                  <FaceIcon className="svg" />
                  <input
                    className="inputsdoc"
                    type="text"
                    placeholder="Nom"
                    required
                    name="name"
                    onChange={(e) =>
                      setParticien({ ...particien, name: e.target.value })
                    }
                  />
                </div>
                <div className="divs1">
                  <input
                    className="inputsdoc"
                    type="date"
                    placeholder="Date de naissance"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, datnaiss: e.target.value })
                    }
                  />
                </div>
                <div className="divs1">
                  <select
                    className="inputsdoc"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, duree: e.target.value })
                    }
                  >
                    <option>-- La durée moyenne du consultation ? --</option>
                    {duree.map((el) => (
                      <option className="option" value={el}>
                        {el} minutes
                      </option>
                    ))}
                  </select>
                </div>
                <div className="divs1">
                  <PhoneIcon className="svg" />
                  <input
                    className="inputsdoc"
                    type="number"
                    onChange={(e) =>
                      setParticien({ ...particien, phone1: e.target.value })
                    }
                    placeholder="Autre numéro de mobile"
                    required
                  />
                </div>
                <div className="divs1">
                  <LocationOnIcon className="svg" />
                  <input
                    className="inputsdoc"
                    onChange={(e) =>
                      setParticien({
                        ...particien,
                        addressecab: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Adresse du cabinet(Rue,étage...)"
                    required
                  />
                </div>
                <div className="divs1">
                  <LockOpenIcon className="svg" />
                  <input
                    className="inputsdoc"
                    type="password"
                    onChange={(e) =>
                      setParticien({ ...particien, password: e.target.value })
                    }
                    placeholder="Mot de passe"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="signUpDoc1">
              <div className="aptd">
                <div className="hors12">Aptitude professionnelle</div>
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "17px",
                    color: "red",
                  }}
                >
                  Pour des raisons de sécurité et afin de nous assurer de la
                  pertinence des données sur notre plateforme, nous vous prions
                  de nous envoyer des photos sur :
                </div>
              </div>
              <div className="signUpDoc11">
                <div className="registerImage">
                  <label>Carte visite tamponnée </label>
                  <input type="file" onChange={handleUpload} />
                  {loading ? (
                    <div className="ui active inline loader azerty"></div>
                  ) : (
                    <img
                      className={
                        particien?.image
                          ? "profilephoto1 w3-hover-opacity"
                          : null
                      }
                      src={particien.image ? particien.image : null}
                      onClick={() => onClick(particien.image)}
                    />
                  )}
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {particien.image && (
                    <button
                      onClick={(e) => setParticien({ ...particien, image: "" })}
                      className="btn btn-danger"
                    >
                      Annuler
                    </button>
                  )}
                </div>
                <div className="registerImage">
                  <label>Permis d'exercice</label>
                  <input type="file" onChange={handleUpload1} />
                  {loading1 && (
                    <div className="ui active inline loader azerty"></div>
                  )}
                  <img
                    className={
                      particien?.image1
                        ? "profilephoto1 w3-hover-opacity"
                        : null
                    }
                    src={particien.image1 ? particien.image1 : null}
                    onClick={() => onClick(particien.image1)}
                  />
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {particien.image1 && (
                    <button
                      onClick={() => setParticien({ ...particien, image1: "" })}
                      className="btn btn-danger"
                    >
                      Annuler
                    </button>
                  )}
                </div>
                <div className="registerImage">
                  <label>Photo de profile</label>
                  <input type="file" onChange={handleUpload2} />
                  {loading2 && <div className="ui active inline loader"></div>}
                  <img
                    className={
                      particien?.image2
                        ? "profilephoto1 w3-hover-opacity"
                        : null
                    }
                    src={particien.image2 ? particien.image2 : null}
                    onClick={() => onClick(particien.image2)}
                  />
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {particien.image2 && (
                    <button
                      onClick={(e) =>
                        setParticien({ ...particien, image2: "" })
                      }
                      className="btn btn-danger"
                    >
                      Annuler
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hors">
            <div className="horstit1">Horaire d'ouverture</div>
            <div className="horaire">
              {days.map((el, idx) => {
                return (
                  <div className="travail">
                    <div className="jour">{el}</div>
                    <div className="seance">
                      <select
                        className="inputselect1"
                        onChange={(e) => handleChange({ e, idx })}
                      >
                        <option>-- Choisir --</option>
                        <option value="unique">Séance Unique</option>
                        <option value="double">Double Séance</option>
                        <option value="ferme">Fermé</option>
                      </select>
                    </div>
                    {particien.horaire[idx].seance === "unique" ||
                    particien.horaire[idx].seance === "double" ? (
                      <>
                        <div className="debut">
                          <select
                            className="inputselect1"
                            onChange={(e) => handleChange1({ e, idx })}
                          >
                            <option>-- Début --</option>
                            {heure.map((el) => (
                              <option value={el}>{el}</option>
                            ))}
                          </select>
                        </div>
                        <div className="fin">
                          <select
                            className="inputselect1"
                            onChange={(e) => handleChange2({ e, idx })}
                          >
                            <option>-- Fin --</option>
                            {heure.map((el) => (
                              <option value={el}>{el}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    ) : null}
                    {particien.horaire[idx].seance === "double" && (
                      <>
                        <div className="debut1">
                          <select
                            className="inputselect1"
                            onChange={(e) => handleChange3({ e, idx })}
                          >
                            <option>-- Début --</option>
                            {heure.map((el) => (
                              <option value={el}>{el}</option>
                            ))}
                          </select>
                        </div>
                        <div className="fin1">
                          <select
                            className="inputselect1"
                            onChange={(e) => handleChange4({ e, idx })}
                          >
                            <option>-- Fin --</option>
                            {heure.map((el) => (
                              <option value={el}>{el}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="check1">
            <input type="checkbox" id="check" required />
            <label htmlFor="check">
              J'accepte les CGU ainsi que la politique de confidentialité du
              site
            </label>
          </div>
          <input type="submit" value="Soumettre" className="signUpBtn1" />
        </form>
      </div>
      <div id="modal01" class="w3-modal" onClick={onClick1}>
        <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">
          &times;
        </span>
        <div class="w3-modal-content w3-animate-zoom">
          <img id="img01" style={{ width: "80%", height: "80%" }} />
        </div>
      </div>
    </div>
  );
};
export default SignUpDoc;
