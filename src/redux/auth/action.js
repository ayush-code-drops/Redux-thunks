import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
}

export function loginFailure(err) {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export const login = (payload) => (dispatch) => {
  const { email, password } = payload;
  const requestAction = loginRequest();
  dispatch(requestAction);
  return axios
    .post("https://reqres.in/api/login", {
      email: email,
      password: password
    })
    .then((res) => {
      dispatch(loginSuccess(res.data.token));
    })
    .catch((err) => {
      const failAction = loginFailure(err);
      dispatch(failAction);
    });
};
