import {
  CURRENT_USER,
  EDIT_PROFILE,
  FAIL_CLIENT,
  FAIL_DOCTOR,
  FAIL_USER,
  GETALLDOCTORS,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOG_OUT_CHAT,
  REGISTER_USER,
  GETALLClients,
  DELETE,
  DELETE_FAIL,
  EDIT_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  GETDOCDETAIL_REQUEST,
  GETDOCDETAIL_SUCCESS,
  GETDOCDETAIL_FAIL,
} from "../Const/user";
import axios from "axios";
import Swal from "sweetalert2";
export const registerUser = (token, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const { data } = await axios.post("/api/user/verify", token);
    dispatch({ type: REGISTER_USER, payload: data });
    history("/mon-profile");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${data.msg}`,
      showConfirmButton: false,
      timer: 3000,
    });
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
export const Saveuser = (user, history) => async () => {
  try {
    const { data } = await axios.post("/api/user/register", user);
    // Swal.fire(`${data.msg}`, "success");
    Swal.fire(`${data.msg}`, "", "success");
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
  }
};
export const registerDoc = (user, navigate) => async () => {
  try {
    const { data } = await axios.post("/api/user/verify1", user);
    navigate("/");
    Swal.fire("Bon travail!", `${data.msg}`, "success");
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
  }
};
export const SaveDoc = (user, navigate) => async () => {
  try {
    const { data } = await axios.post("/api/user/register1", user);
    Swal.fire("Bon travail!", `${data.msg}`, "success");
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
  }
};
export const loginUser = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const { data } = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: data });
    if (data.user.isAdmin) {
      history("/admin/acceuil");
      window.location.reload();
    } else if (data.user.isDoctor) {
      history("/docteur/acceuil");
      window.location.reload();
    } else {
      history("/");
      window.location.reload();
    }
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};
export const loginWithGoogle = (token, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const { data } = await axios.post("/api/user/googlelogin", token);
    dispatch({ type: LOGIN_USER, payload: data });
    if (data.user.isAdmin) {
      history("/admin/acceuil");
      window.location.reload();
    } else if (data.user.isDoctor) {
      history("/docteur/acceuil");
      window.location.reload();
    } else {
      history("/");
      window.location.reload();
    }
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
    console.log(error);
  }
};
export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const { data } = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, options });
    console.log(error, options);
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

export const getalldoctors = () => async (dispatch) => {
  try {
    let result = await axios.get("/api/user/alldoctors");
    dispatch({ type: GETALLDOCTORS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: FAIL_DOCTOR });
    console.log(error);
  }
};

export const getallclients = () => async (dispatch) => {
  try {
    const result = await axios.get("/api/user/allclients");
    dispatch({ type: GETALLClients, payload: result.data.result });
  } catch (error) {
    dispatch({ type: FAIL_CLIENT });
  }
};

// export const filterdata=()=>async(dispatch)=>{
//   try {

//     await dispatch({type:GETALLDOCTORS,payload:{}})
//   } catch (error) {

//   }
// }
export const updateAdminRole = (id, user) => async (dispatch) => {
  try {
    await axios.put(`/api/user/updateadminrole/${id}`, user);
    dispatch(getallclients());
    dispatch(getalldoctors());
    dispatch({ type: EDIT_PROFILE });
  } catch (error) {
    console.log(error);
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({ type: EDIT_PROFILE_FAIL, payload: error.response.data });
  }
};
export const editprofile = (id, user) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/user/update/${id}`, user);
    dispatch(getallclients());
    dispatch(getalldoctors());
    dispatch(currentUser());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${data.msg}`,
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch({ type: EDIT_PROFILE });
  } catch (error) {
    console.log(error);
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({ type: EDIT_PROFILE_FAIL, payload: error.response.data });
  }
};
export const editprofile1 = (id, user) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/user/update1/${id}`, user);
    dispatch(getallclients());
    dispatch(getalldoctors());
    dispatch(currentUser());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${data.msg}`,
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch({ type: EDIT_PROFILE });
  } catch (error) {
    console.log(error);
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({ type: EDIT_PROFILE_FAIL, payload: error.response.data });
  }
};
export const logOutChat = () => async (dispatch) => {
  dispatch({ type: LOG_OUT_CHAT });
};

export const deleteuser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE });
    let result = await axios.delete(`/api/user/delete/${id}`);
    dispatch(getalldoctors());
    dispatch(getallclients());
  } catch (error) {
    dispatch({ type: DELETE_FAIL });
  }
};

// Update Password
export const updatePassword = (passwords, history) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `/api/user/password/update`,
      passwords,
      config
    );
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${data.msg}`,
      showConfirmButton: false,
      timer: 1900,
    });
    setTimeout(() => {
      if (data.user.isAdmin) {
        history("/admin/acceuil");
        window.location.reload();
      } else if (data.user.isDoctor) {
        history("/docteur/acceuil");
        window.location.reload();
      } else {
        history("/");
        window.location.reload();
      }
    }, 1900);

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      // payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email, history) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/user/password/forgot`,
      email,
      config
    );
    Swal.fire("Bon travail!", `${data.msg}`, "success");
    setTimeout(() => {
      history("/connexion");
      window.location.reload();
    }, 2500);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) =>
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${err.msg}`,
        })
      );
    }
    if (msg) {
      Swal.fire({
        icon: "error",
        title: "Oups...",
        text: `${msg}`,
      });
    }
  }
};

// Reset Password
export const resetPassword =
  (token, passwords, history) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/user/password/reset/${token}`,
        passwords,
        config
      );
      Swal.fire("Bon travail!", `${data.msg}`, "success");
      setTimeout(() => {
        history("/connexion");
        window.location.reload();
      }, 2500);
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
      const { errors, msg } = error.response.data;
      if (Array.isArray(errors)) {
        errors.forEach((err) =>
          Swal.fire({
            icon: "error",
            title: "Oups...",
            text: `${err.msg}`,
          })
        );
      }
      if (msg) {
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: `${msg}`,
        });
      }
    }
  };

export const getOneById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GETDOCDETAIL_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(`/api/user/getonedoctor/${id}`, config);
    // console.log(data);

    dispatch({ type: GETDOCDETAIL_SUCCESS, payload: data.result });
    // return data.data.result;
  } catch (error) {
    dispatch({
      type: GETDOCDETAIL_FAIL,
      // payload: error.response.data.message,
    });
    console.log(error);
  }
};
