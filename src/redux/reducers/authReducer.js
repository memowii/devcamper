import { CREATE, LOADING, ERROR } from "../types/authTypes";

const INITIAL_STATE = {
  user: {},
  loading: false,
  error: "",
  successfulRegistration: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        loading: false,
        error: "",
        successfulRegistration: true,
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
