import React, { useEffect } from "react";
import { useState } from "react";
import {
  currentUser,
  editprofile,
  editprofile1,
} from "../../Redux/actions/user";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import { MDBFile } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
// import EmailIcon from "@material-ui/icons/Email";
// import { clearErrors, login, register } from "../../actions/userAction";
// import { useAlert } from "react-alert";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import "./ProfileAdmin.css";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import Swal from "sweetalert2";

const ProfileAdmin = () => {
  const current = useSelector((state) => state.userReducer.result);
  const dispatch = useDispatch();
  const isAdmin = localStorage.getItem("isAdmin");
  const [user, setuser] = useState({
    update: false,
  });
  useEffect(() => {
    setuser(current);
  }, [current]);

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
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
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
      setuser({ ...user, image2: res.data.url, update: true });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const check = (e) => {
    e.preventDefault();
    dispatch(editprofile1(current._id, user));
  };
  return (
    <div className="row">
      {current ? (
        <div className={isAdmin ? "all row" : "alluser container row"}>
          <div>
            <h1 className="titt">Mon profile</h1>
          </div>

          <form onSubmit={check}>
            <div style={{ display: "flex" }}>
              <div className="col-md-6">
                <div className="f1">
                  <div className="f2">
                    {/* <div className="profile1">
                  Genre :
                  <i
                    className={
                      user?.sexe.toString() === "homme"
                        ? "fas fa-male"
                        : "fas fa-female"
                    }
                  ></i>
                  {user?.sexe}
                  </div> */}
                    <div className="profile1">
                      <MailOutlineIcon />
                      <input type="email" disabled="true" value={user?.email} />
                    </div>
                    <div className="profile">
                      <PersonIcon />
                      <input
                        type="text"
                        value={user?.name}
                        onChange={(e) =>
                          setuser({
                            ...user,
                            name: e.target.value,
                            update: true,
                          })
                        }
                        placeholder="Nom du famille"
                        required
                      />
                    </div>
                    <div className="profile">
                      <PersonIcon />
                      <input
                        type="text"
                        value={user?.lastName}
                        onChange={(e) =>
                          setuser({
                            ...user,
                            lastName: e.target.value,
                            update: true,
                          })
                        }
                        placeholder="Prénom"
                        required
                      />
                    </div>
                    <div className="profile">
                      <input
                        type="date"
                        value={user?.datnaiss}
                        onChange={(e) =>
                          setuser({
                            ...user,
                            datnaiss: e.target.value,
                            update: true,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="profile">
                      <LocationOnIcon />
                      <select
                        onChange={(e) =>
                          setuser({
                            ...user,
                            ville: e.target.value,
                            update: true,
                          })
                        }
                        required
                        value={user?.ville?.replace(/\s+/g, "")}
                      >
                        <option value={""} className="option">
                          Ville
                        </option>
                        {villes.map((el) => (
                          <option className="option" value={el}>
                            {el}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="profile">
                      <PhoneIcon />
                      <input
                        type="number"
                        style={{ mozAppearance: "textfield" }}
                        value={user?.phone}
                        minLength="8"
                        maxLength="8"
                        onChange={(e) =>
                          setuser({
                            ...user,
                            phone: e.target.value,
                            update: true,
                          })
                        }
                        placeholder="Numéro de mobile"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="file-container">
                  <label class="form-label" for="customFile">
                    Photo de profile
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="customFile"
                    placeholder="aazazazaz"
                    onChange={handleUpload}
                  />
                  {/* {loading ? <div className="ui active inline loader"></div> : null} */}
                </div>
                <div>
                  {loading ? (
                    <div className="ui active inline loader bbb"></div>
                  ) : (
                    <img
                      className={user?.image2 ? "profilephoto" : null}
                      src={user?.image2}
                    />
                  )}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {user?.image2 && !loading ? (
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        setuser({ ...user, image2: "", update: true })
                      }
                    >
                      Retirer
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
            <div>
              <input
                type="submit"
                disabled={user?.update === true ? false : true}
                className={
                  isAdmin
                    ? "btnprofile1 rounded-pill"
                    : "btnprofile rounded-pill"
                }
                value="Sauvgarder"
              />
            </div>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProfileAdmin;
