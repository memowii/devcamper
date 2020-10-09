import { FETCH_ALL, FETCH_ONE, LOADING, ERROR } from "../types/bootcampTypes";

const INITIAL_STATE = {
  bootcamps: [],
  bootcamp: {},
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
    case FETCH_ONE:
      return {
        ...state,
        bootcamp: action.payload,
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
