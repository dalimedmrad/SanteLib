import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { postrec } from "../../Redux/actions/rec";
import "./ReeportForm.css";

const ReportForm = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const Current = useSelector((state) => state.userReducer.result);
  const [recSt, setrecSt] = useState({
    client_name: "",
    client_id: "",
    email: "",
    message: "",
    object: "",
  });
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setrecSt({ ...recSt, [e.target.name]: e.target.value });
  // };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(postrec(recSt));
  };
  useEffect(() => {
    setrecSt({
      ...recSt,
      client_name: Current ? `${Current.name} ${Current.lastName}` : "",
      client_id: Current ? Current._id : "",
      email: Current ? Current.email : "",
    });
  }, [Current]);
  return (
    // <div className="rep1">
    //   <div className="forms">
    //     <div className="form-group">
    //       <label>Titre :</label>
    //       <input
    //         name="title"
    //         type="text"
    //         placeholder="titre du sujet"
    //         className="form-control"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label>Description :</label>
    //       <textarea
    //         name="object"
    //         rows={5}
    //         className="form-control"
    //         placeholder="description"
    //         onChange={handleChange}
    //       ></textarea>
    //     </div>
    //     <button
    //       className="btn btn-success"
    //       type="button"
    //       onClick={handlesubmit}
    //     >
    //       Envoyer
    //     </button>
    //   </div>
    // </div>
    <div className="py-5">
      <section>
        <div className="py-5">
          <div className="row m-5">
            <div className="col-md-12">
              <h3 className="fd-5 text-center mb-1">Formulaire de contact</h3>
              {/* <h1 className="display-6 text-center mb-4">
              Have Some <b>Questions?</b>
            </h1> */}
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          {/* <div className="row col-md-6 offset-3"> */}
          <form
            onSubmit={(e) => handlesubmit(e)}
            className="row col-md-6 offset-3"
          >
            <div className="mb-4">
              <label for="name" className="form-label">
                Nom {"&"} prénom
              </label>
              <input
                type="text"
                className="form-control"
                disabled
                value={recSt.client_name}
                // onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Addresse email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                value={recSt.email}
                disabled
              />
            </div>
            <div className="mb-4">
              <label for="exampleFormControlTextarea1" className="form-label">
                Objet
              </label>
              <input
                required
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                onChange={(e) => setrecSt({ ...recSt, object: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                required
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                onChange={(e) =>
                  setrecSt({ ...recSt, message: e.target.value })
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary rounded-pill px-4"
              style={{ width: "22%", margin: "0 auto" }}
            >
              Envoyer
              <i className="fa fa-paper-plane ms-2"></i>
            </button>
          </form>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default ReportForm;
