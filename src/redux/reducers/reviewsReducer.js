import { FETCH_BOOTCAMP_REVIEWS, LOADING, ERROR } from "../types/reviewsTypes";

const INITIAL_STATE = {
  reviews: [],
  loading: false,
  error: "",
};

export const reviewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOOTCAMP_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
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
