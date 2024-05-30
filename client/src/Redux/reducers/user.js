import {
  CURRENT_USER,
  FAIL_USER,
  GETALLClients,
  GETALLDOCTORS,
  GETDOCDETAIL_REQUEST,
  GETDOCDETAIL_SUCCESS,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  LOG_OUT_CHAT,
  REGISTER_USER,
} from "../Const/user";

const initialState = {
  result: null,
  loadUser: false,
  errors: null,
  isAuth: false,
  docDetail: null,
  loading: false,
  Doc: [],
  client: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        result: payload.result,
        isAuth: true,
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      if (payload.user.isAdmin) {
        localStorage.setItem("isAdmin", payload.user.isAdmin);
      }
      if (payload.user.isDoctor) {
        localStorage.setItem("isDoctor", payload.user.isDoctor);
      }
      return {
        ...state,
        loadUser: false,
        result: payload.result,
        isAuth: true,
      };
    case LOAD_USER:
      return { ...state, loadUser: true };
    case CURRENT_USER:
      return { ...state, loadUser: false, isAuth: true, result: payload };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("isDoctor");
      return { result: null, loadUser: false, errors: null, isAuth: false };

    case GETALLDOCTORS:
      return { ...state, Doc: payload };

    case GETDOCDETAIL_REQUEST:
      return { ...state, loading: true };

    case GETDOCDETAIL_SUCCESS:
      return { ...state, loading: false, docDetail: payload };

    case LOG_OUT_CHAT:
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      return state; // Ajouté un return pour éviter la "fallthrough"

    case GETALLClients:
      return { ...state, client: payload };

    default:
      return state;
  }
};
