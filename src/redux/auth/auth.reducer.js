import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_RESET,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_RESET,
  AUTH_REGISTER_SUCCESS,
} from "./auth.actionTypes";

const TOKEN = localStorage.getItem("token");
const initialState = {
  userLogin: { loading: false, error: false, message: "" },
  userRegister: { loading: false, error: false, message: "" },
  userLogout: { message: "" },
  data: {
    isAuthenticated: false,
    token: TOKEN,
  },
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        userLogin: { loading: true, error: false },
      };
    case AUTH_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        userLogin: { loading: false, error: false, message: payload.message },
        data: {
          isAuthenticated: true,
          token: payload.token,
        },
      };
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        userLogin: { loading: false, error: true, message: payload.message },
      };

    case AUTH_LOGIN_RESET:
      return {
        ...state,
        userLogin: { loading: false, error: false, message: "" },
        userLogout: { message: "" },
      };
    case AUTH_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        userLogout: { message: "Logout Successfully" },
        data: {
          isAuthenticated: false,
          token: null,
        },
      };

    case AUTH_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: { loading: true, error: false },
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        userRegister: {
          loading: false,
          error: false,
          message: payload.message,
        },
      };
    case AUTH_REGISTER_FAILURE:
      return {
        ...state,
        userRegister: { loading: false, error: true, message: payload.message },
      };

    case AUTH_REGISTER_RESET:
      return {
        ...state,
        userRegister: { loading: false, error: false, message: "" },
      };

    default:
      return state;
  }
}
