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

const initState = {
  todos: [],
  isLoading: false,
  isError: false
};
export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_TASK_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, payload]
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case GET_TASK_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: payload
      };
    case GET_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos?.filter((item) => item.id !== payload.id)
      };
    case TOGGLE_TASK:
      return {
        ...state,
        todos: state.todos?.map((item) => {
          return item.id === payload.id
            ? { ...item, status: !item.status }
            : item;
        })
      };
    default:
      return state;
  }
}
