import axios from "axios";
import { FETCH_BOOTCAMP_REVIEWS, LOADING, ERROR } from "../types/reviewsTypes";

const API_URL = "http://localhost:5000/api/v1";

export const fetchBootcampReviews = (id) => async (dispatchEvent) => {
  dispatchEvent({ type: LOADING });

  try {
    const response = await axios.get(`${API_URL}/bootcamps/${id}/reviews`);
    const {
      data: { data },
    } = response;
    console.log("data", data);
    dispatchEvent({ type: FETCH_BOOTCAMP_REVIEWS, payload: data });
  } catch (error) {
    console.log("error", error);
    dispatchEvent({
      type: ERROR,
      payload: "Reviews information not available.",
    });
  }
};
