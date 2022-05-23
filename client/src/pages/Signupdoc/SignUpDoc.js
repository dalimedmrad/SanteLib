import React, { useEffect } from "react";
import "./SignUpDoc.css";
import { useState } from "react";
import { SaveDoc } from "../../Redux/actions/user";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import axios from "axios";
import Swal from "sweetalert2";
import WcIcon from "@material-ui/icons/Wc";
import { useNavigate } from "react-router-dom";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TodayIcon from "@material-ui/icons/Today";

const SignUpDoc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const villes = [
    "Tunis",
    "Ariana",
    "Ben arous",
    "Manouba",
    "Benzart",
    "Kef",
    "Béja",
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
  const [particien, setParticien] = useState({
    sexe: "",
    position: [],
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
      if (!file) return alert("Le fichier n'existe pas.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Taille trop grande!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("Le format de fichier est incorrect.");

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
      if (!file) return alert("Le fichier n'existe pas.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Taille trop grande!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("Le format de fichier est incorrect.");

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
      if (!file) return alert("Le fichier n'existe pas.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Taille trop grande!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("Le format de fichier est incorrect.");

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
  const handelSubmit = (e) => {
    e.preventDefault();
    const reqs = document.getElementById("check");
    if (reqs.checked && particien) {
      dispatch(SaveDoc(particien, navigate));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "SVP veuillez remplir tous les champs !",
      });
    }
  };
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
    if (particien.ville === "Medenine") {
      setParticien({ ...particien, position: posmednine });
    }
    if (particien.ville === "Tunis") {
      setParticien({ ...particien, position: postunis });
    }
    if (particien.ville === "Sfax") {
      setParticien({ ...particien, position: possfax });
    }
    if (particien.ville === "Ariana") {
      setParticien({ ...particien, position: posariane });
    }
    if (particien.ville === "Ben arous") {
      setParticien({ ...particien, position: posbnarouse });
    }
    if (particien.ville === "Manouba") {
      setParticien({ ...particien, position: posmanouba });
    }
    if (particien.ville === "Benzart") {
      setParticien({ ...particien, position: posbnzarte });
    }
    if (particien.ville === "Kef") {
      setParticien({ ...particien, position: poskef });
    }
    if (particien.ville === "Jendouba") {
      setParticien({ ...particien, position: posjandouba });
    }
    if (particien.ville === "Seliana") {
      setParticien({ ...particien, position: possilyena });
    }
    if (particien.ville === "Nabeul") {
      setParticien({ ...particien, position: posnebel });
    }
    if (particien.ville === "Sousse") {
      setParticien({ ...particien, position: possousse });
    }
    if (particien.ville === "Mestir") {
      setParticien({ ...particien, position: posmestir });
    }
    if (particien.ville === "Mehdia") {
      setParticien({ ...particien, position: posmehdia });
    }
    if (particien.ville === "Kairouane") {
      setParticien({ ...particien, position: poskeroine });
    }
    if (particien.ville === "Gafsa") {
      setParticien({ ...particien, position: posgafsa });
    }
    if (particien.ville === "Guebili") {
      setParticien({ ...particien, position: posgbeli });
    }
    if (particien.ville === "Tozeur") {
      setParticien({ ...particien, position: postozeur });
    }
    if (particien.ville === "Tataouine") {
      setParticien({ ...particien, position: postataouin });
    }
    if (particien.ville === "Zaghouane") {
      setParticien({ ...particien, position: poszagoine });
    }
    if (particien.ville === "Sidi bouzid") {
      setParticien({ ...particien, position: possidibouzid });
    }
    if (particien.ville === "Gabes") {
      setParticien({ ...particien, position: posgabes });
    }
    if (particien.ville === "Guasrine") {
      setParticien({ ...particien, position: posgasrine });
    }
    if (particien.ville === "Béja") {
      setParticien({ ...particien, position: posbeja });
    }
  };
  useEffect(() => {
    searchPodition();
  }, [particien.ville]);
  const [check, setCheck] = useState({
    password: false,
    phone: false,
    phone1: false,
  });
  const checkpassword = () => {
    if (
      !/[a-z]/.test(particien.password) ||
      !/[0-9]/.test(particien.password) ||
      !/[A-Z]/.test(particien.password) ||
      !/[!@#$€%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(particien.password) ||
      8 <= particien.password.length >= 20
    ) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `Mot de pase doit contenir des lettres miniscules,des lettres majuscules,des chiffres,des symboles et de longueur au minimum 8 caractères`,
      });
    } else {
      setCheck({ ...check, password: true });
    }
  };
  const checkphone = () => {
    if (particien.phone.length != 8) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `Vérifier votre numéro de télèphone`,
      });
    } else {
      setCheck({ ...check, phone: true });
    }
  };
  const checkphone1 = () => {
    if (particien.phone1.length != 8) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `Vérifier votre numéro de télèphone`,
      });
    } else {
      setCheck({ ...check, phone1: true });
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
              améliorez la prise en charge de vos particiens
            </div>
            <h1 className="i-title-item">développez votre activité</h1>
            <h1 className="i-title-item">gagnez du temps au quotidien </h1>
            <h1 className="i-title-item">gagnez en confort de travail</h1>
          </div>
        </div>
      </div>
      <div className="signUpDocall col-md-12">
        <h2 className="msg">
          Remplissez ce formulaire pour être contacté par l'un de nos experts
        </h2>
        <form onSubmit={handelSubmit}>
          <div className="alls">
            <div className="signUpDoc">
              <div className="signUpDoc01">
                <div>
                  <WcIcon className="svg" />
                  <select
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
                <div>
                  <PersonIcon />
                  <input
                    type="text"
                    placeholder="Prénom"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, lastName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <i class="fas fa-user-md svg"></i>
                  <select
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
                <div>
                  <PhoneIcon className="svg" />
                  <input
                    // onBlur={checkphone}
                    type="number"
                    onChange={(e) =>
                      setParticien({ ...particien, phone: e.target.value })
                    }
                    placeholder="Numéro de mobile"
                    required
                  />
                </div>
                <div>
                  <LocationOnIcon className="svg" />
                  <select
                    required
                    onChange={(e) => {
                      setParticien({ ...particien, ville: e.target.value });
                    }}
                  >
                    <option>-- Ville --</option>
                    {villes.map((el) => (
                      <option className="option" value={el}>
                        {el}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <EmailIcon className="svg" />
                  <input
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
                <div>
                  <PersonIcon />
                  <input
                    type="text"
                    placeholder="Nom"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <TodayIcon className="svg" />
                  <input
                    type="date"
                    placeholder="Date de naissance"
                    required
                    onChange={(e) =>
                      setParticien({ ...particien, datnaiss: e.target.value })
                    }
                  />
                </div>
                <div>
                  <ScheduleIcon />
                  <select
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
                <div>
                  <PhoneIcon className="svg" />
                  <input
                    // onBlur={checkphone1}
                    type="number"
                    onChange={(e) =>
                      setParticien({ ...particien, phone1: e.target.value })
                    }
                    placeholder="Autre numéro de mobile"
                    required
                  />
                </div>
                <div>
                  <LocationOnIcon className="svg" />
                  <input
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
                <div>
                  <LockOpenIcon className="svg" />
                  <input
                    type="password"
                    onChange={(e) =>
                      setParticien({ ...particien, password: e.target.value })
                    }
                    placeholder="Mot de passe"
                    required
                    onBlur={checkpassword}
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
                    letterSpacing: "1.5px",
                  }}
                >
                  Pour des raisons de sécurité et afin de nous assurer de la
                  pertinence des données sur notre plateforme,
                  <br /> nous vous prions de nous envoyer des photos sur :
                </div>
              </div>
              <div className="signUpDoc11">
                <div className="registerImage1">
                  <label>Carte visite tamponnée </label>
                  <input type="file" required onChange={handleUpload} />
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
                <div className="registerImage1">
                  <label>Permis d'exercice</label>
                  <input type="file" required onChange={handleUpload1} />
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
                <div className="registerImage1">
                  <label>Photo de profile</label>
                  <input type="file" required onChange={handleUpload2} />
                  {loading2 && (
                    <div className="ui active inline loader azerty"></div>
                  )}
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
                        required
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
                            required={
                              particien.horaire[idx].seance === "unique" ||
                              particien.horaire[idx].seance === "double"
                                ? true
                                : false
                            }
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
                            required={
                              particien.horaire[idx].seance === "unique" ||
                              particien.horaire[idx].seance === "double"
                                ? true
                                : false
                            }
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
                            required={
                              particien.horaire[idx].seance === "double"
                                ? true
                                : false
                            }
                          >
                            <option>-- Début --</option>
                            {heure.map((el) => (
                              <option value={el}>{el}</option>
                            ))}
                          </select>
                        </div>
                        <div className="fin1">
                          <select
                            required={
                              particien.horaire[idx].seance === "double"
                                ? true
                                : false
                            }
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
          <span style={{ fontWeight: "bold" }}>
            NB :
            <b style={{ color: "red" }}> tous les champs sont obligatoire</b>
          </span>
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
