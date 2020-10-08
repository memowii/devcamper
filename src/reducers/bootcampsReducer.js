import { FETCH_ALL, LOADING, ERROR } from "../types/bootcampTypes";

const INITIAL_STATE = {
  bootcamps: [],
  loading: false,
  error: "",
};

export const bootcampsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        bootcamps: action.payload,
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
