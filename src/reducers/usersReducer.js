import { CREATE, LOADING, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
  user: {},
  loading: false,
  error: "",
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: "",
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
