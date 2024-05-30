import React, { useCallback, useEffect } from "react";
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
import { specialite, villes, heure, days, duree } from "../../data";

const SignUpDoc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const searchPosition = useCallback(() => {
    if (particien.ville === "Medenine") {
      setParticien({ ...particien, position: [33.2365402, 10.2689769] });
    }
    if (particien.ville === "Tunis") {
      setParticien({ ...particien, position: [36.7948624, 10.0732375] });
    }
    if (particien.ville === "Sfax") {
      setParticien({ ...particien, position: [34.7613744, 10.6630584] });
    }
    if (particien.ville === "Ariana") {
      setParticien({ ...particien, position: [36.8688529, 10.1353404] });
    }
    if (particien.ville === "Ben arous") {
      setParticien({ ...particien, position: [36.7464825, 10.2171373] });
    }
    if (particien.ville === "Manouba") {
      setParticien({ ...particien, position: [36.8098832, 10.0601505] });
    }
    if (particien.ville === "Benzart") {
      setParticien({ ...particien, position: [37.281068, 9.8264848] });
    }
    if (particien.ville === "Kef") {
      setParticien({ ...particien, position: [36.1668561, 8.6673017] });
    }
    if (particien.ville === "Jendouba") {
      setParticien({ ...particien, position: [36.5032858, 8.7613819] });
    }
    if (particien.ville === "Seliana") {
      setParticien({ ...particien, position: [36.0868049, 9.3564891] });
    }
    if (particien.ville === "Nabeul") {
      setParticien({ ...particien, position: [36.4064394, 10.351228] });
    }
    if (particien.ville === "Sousse") {
      setParticien({ ...particien, position: [35.8283295, 10.5830349] });
    }
    if (particien.ville === "Mestir") {
      setParticien({ ...particien, position: [35.7256967, 10.73772] });
    }
    if (particien.ville === "Mehdia") {
      setParticien({ ...particien, position: [35.504731, 11.0345474] });
    }
    if (particien.ville === "Kairouane") {
      setParticien({ ...particien, position: [35.6733929, 10.0694277] });
    }
    if (particien.ville === "Gafsa") {
      setParticien({ ...particien, position: [34.4286553, 8.7374206] });
    }
    if (particien.ville === "Guebili") {
      setParticien({ ...particien, position: [33.7036675, 8.9560029] });
    }
    if (particien.ville === "Tozeur") {
      setParticien({ ...particien, position: [33.9162871, 8.1007728] });
    }
    if (particien.ville === "Tataouine") {
      setParticien({ ...particien, position: [32.9245782, 10.4074854] });
    }
    if (particien.ville === "Zaghouane") {
      setParticien({ ...particien, position: [36.4088749, 10.1187425] });
    }
    if (particien.ville === "Sidi bouzid") {
      setParticien({ ...particien, position: [35.0363883, 9.4595281] });
    }
    if (particien.ville === "Gabes") {
      setParticien({ ...particien, position: [33.8892778, 10.0851486] });
    }
    if (particien.ville === "Guasrine") {
      setParticien({ ...particien, position: [35.1702616, 8.8072583] });
    }
    if (particien.ville === "Béja") {
      setParticien({ ...particien, position: [36.7297086, 9.1700926] });
    }
  }, [particien]);
  useEffect(() => {
    searchPosition();
  }, [particien.ville,searchPosition]);

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
      !/[!@#$€%^&*()_+\-=[\]{};:'"\\|,.<>/?]/.test(particien.password) ||
      !(8 <= particien.password.length && particien.password.length <= 20)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `Le mot de passe doit contenir des lettres minuscules, des lettres majuscules, des chiffres, des symboles et avoir une longueur d'au moins 8 caractères et au plus 20 caractères.`,
      });
    } else {
      setCheck({ ...check, password: true });
    }
  };

  // const checkphone = () => {
  //   if (particien.phone.length !== 8) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oups...",
  //       text: `Vérifier votre numéro de télèphone`,
  //     });
  //   } else {
  //     setCheck({ ...check, phone: true });
  //   }
  // };
  // const checkphone1 = () => {
  //   if (particien.phone1.length !== 8) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oups...",
  //       text: `Vérifier votre numéro de télèphone`,
  //     });
  //   } else {
  //     setCheck({ ...check, phone1: true });
  //   }
  // };
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
                    {specialite.map((el) => (
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
                      alt=""
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
                    alt=""
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
                    alt=""
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
          <span style={{ fontWeight: "bold", color: "red", fontSize: "16px" }}>
            NB : tous les champs sont obligatoires
          </span>
          <div className="check1">
            <input type="checkbox" id="check" required />
            <label htmlFor="check">
              J'accepte la politique de confidentialité du site
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
          <img alt="" id="img01" style={{ width: "80%", height: "80%" }} />
        </div>
      </div>
    </div>
  );
};
export default SignUpDoc;
