import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import "./ProfileDoc.css";
import { useDispatch } from "react-redux";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { editprofile } from "../../../Redux/actions/user";
import Swal from "sweetalert2";
import TodayIcon from "@material-ui/icons/Today";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { days, villes, heure, duree } from "../../../data";

const ProfileDoc = () => {
  const user = useSelector((state) => state.userReducer.result);
  const dispatch = useDispatch();
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
    update: false,
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
    // dispatch(currentUser());
    setParticien(user);
  }, [user]);
  useEffect(() => {
    searchPosition();
  }, [particien?.ville,searchPosition]);

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
    if (particien.phone.length !== 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Votre numéro de télèphone est invalide`,
      });
    } else if (particien.phone1.length !== 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Votre numéro de télèphone est invalide`,
      });
    } else if (particien.image2 === "") {
      Swal.fire({
        icon: "error",
        title: "Oups...",
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
                    <PersonIcon />
                    <input
                      className="inputs11"
                      type="text"
                      placeholder="Nom du famille"
                      required
                      name="name"
                      value={particien?.name}
                      disabled
                    />
                  </div>
                  <div className="divs">
                    <TodayIcon />
                    <input
                      className="inputs11"
                      value={particien?.datnaiss}
                      disabled
                    />
                  </div>
                  <div className="divs">
                    <ScheduleIcon />
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
                    <PersonIcon />
                    <input
                      className="inputs11"
                      type="text"
                      placeholder="Prénom"
                      value={particien?.lastName}
                      disabled
                    />
                  </div>
                  <div className="divs">
                    <i class="fas fa-user-md svg"></i>
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
                      alt=""
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
                          value={particien?.horaire[idx]?.seance}
                        >
                          <option value="">-- Choisir --</option>
                          <option value="unique">Séance Unique</option>
                          <option value="double">Double Séance</option>
                          <option value="ferme">Fermé</option>
                        </select>
                      </td>
                      {particien?.horaire[idx]?.seance === "unique" ||
                        particien?.horaire[idx]?.seance === "double" ? (
                        <>
                          <td className="tds1">
                            <select
                              className="inputs1"
                              onChange={(e) => handleChange1({ e, idx })}
                              value={particien?.horaire[idx]?.start}
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
                              value={particien?.horaire[idx]?.end}
                            >
                              <option value="">-- Fin --</option>
                              {heure.map((el) => (
                                <option value={el}>{el}</option>
                              ))}
                            </select>
                          </td>
                        </>
                      ) : null}
                      {particien?.horaire[idx]?.seance === "double" && (
                        <>
                          <td className="tds1">
                            <select
                              className="inputs1"
                              onChange={(e) => handleChange3({ e, idx })}
                              value={particien?.horaire[idx]?.startOne}
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
                              value={particien?.horaire[idx]?.endOne}
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
              <img alt="" id="img01" style={{ width: "80%", height: "80%" }} />
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
