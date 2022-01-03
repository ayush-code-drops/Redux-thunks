import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false
};

export function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
