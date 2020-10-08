import axios from "axios";
import { FETCH_ALL, LOADING, ERROR } from "../types/bootcampTypes";

const API_URL = "http://localhost:5000/api/v1";

export const fetchAll = () => async (dispatchEvent) => {
  dispatchEvent({ type: LOADING });

  try {
    const response = await axios.get(`${API_URL}/bootcamps`);
    const { data } = response;
    dispatchEvent({ type: FETCH_ALL, payload: data.data });
  } catch (error) {
    dispatchEvent({
      type: ERROR,
      payload: "Bootcamps information not available.",
    });
  }
};
