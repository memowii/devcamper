import axios from "axios";
import { CREATE, LOADING, ERROR } from "../types/usersTypes";

const API_URL = "http://localhost:5000/api/v1";

export const fetchBootcampReviews = (id) => async (dispatchEvent) => {
  dispatchEvent({ type: LOADING });

  // send api

  try {
  } catch (error) {
    console.log("error", error);
    dispatchEvent({
      type: ERROR,
      payload: "Reviews information not available.",
    });
  }
};
