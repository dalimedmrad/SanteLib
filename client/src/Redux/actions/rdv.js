import {
  APPROVED,
  DELETE_RDV,
  FAIL_ALL_RDV,
  FAIL_DELETE_RDV,
  GET_ALL_RDV,
  NOT_APPROVED,
  POST_RDV,
} from "../Const/rdv";
import axios from "axios";
import Swal from "sweetalert2";

export const getallrdv = () => async (dispatch) => {
  try {
    let result = await axios.get("/api/rdv/");
    dispatch({ type: GET_ALL_RDV, payload: result.data.result });
  } catch (error) {
    dispatch({ type: FAIL_ALL_RDV });
  }
};
export const postrdv = (rdv, navigate) => async (dispatch) => {
  dispatch({ type: POST_RDV });
  console.log(rdv);
  try {
    const { data } = await axios.post("/api/rdv/postrdv", rdv);
    Swal.fire("Bon travail!", `${data.msg}`, "success");
    dispatch(getallrdv());
    setTimeout(() => {
      navigate("/");
    }, 2500);
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${msg}`,
      });
    }
  }
};
export const deleterdv = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_RDV });
    axios.delete(`/api/rdv/delete/${id}`);
    dispatch(getallrdv());
  } catch (error) {
    dispatch({ type: FAIL_DELETE_RDV });
  }
};

export const editrdv = (id, rdv) => async (dispatch) => {
  try {
    const result = await axios.put(`/api/rdv/update/${id}`, rdv);
    dispatch({ type: APPROVED });
    dispatch(getallrdv());
    Swal.fire("Bon travail!", `${result.data.msg}`, "success");
  } catch (error) {
    dispatch({ type: NOT_APPROVED });
  }
};

export const editrdv1 = (id, rdv) => async (dispatch) => {
  try {
    await axios.put(`/api/rdv/update/${id}`, rdv);
    dispatch({ type: APPROVED });
    dispatch(getallrdv());
  } catch (error) {
    dispatch({ type: NOT_APPROVED });
  }
};
