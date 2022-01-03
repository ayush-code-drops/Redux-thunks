import axios from "axios";
import {
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  DELETE_TASK,
  GET_TASK_FAILURE,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  TOGGLE_TASK
} from "./actionType";

export function addtaskRequest() {
  return {
    type: ADD_TASK_REQUEST
  };
}
export function addtaskSuccess(payload) {
  return {
    type: ADD_TASK_SUCCESS,
    payload
  };
}
export function addtaskFailure(err) {
  return {
    type: ADD_TASK_FAILURE,
    payload: err
  };
}
export function gettaskRequest() {
  return {
    type: GET_TASK_REQUEST
  };
}
export function gettaskSuccess(payload) {
  return {
    type: GET_TASK_SUCCESS,
    payload
  };
}
export function gettaskFailure(err) {
  return {
    type: GET_TASK_FAILURE,
    payload: err
  };
}
export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id: id
    }
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {
      id: id
    }
  };
}

export const addTask = (payload) => (dispatch) => {
  dispatch(addtaskRequest());
  const { title, status } = payload;
  axios
    .post("https://json-server-mocker-masai.herokuapp.com/tasks", {
      title,
      status
    })
    .then((res) => {
      console.log(res.data);
      dispatch(addtaskSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addtaskFailure(err));
    });
};

export const getTasks = () => (dispatch) => {
  dispatch(gettaskRequest());

  axios
    .get("https://json-server-mocker-masai.herokuapp.com/tasks")
    .then((res) => {
      console.log(res.data);
      dispatch(gettaskSuccess(res.data));
    })
    .catch((err) => {
      dispatch(gettaskFailure(err));
    });
};
