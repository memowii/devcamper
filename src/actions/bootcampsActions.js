import axios from "axios";
import { FETCH_ALL, FETCH_ONE, LOADING, ERROR } from "../types/bootcampTypes";

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

export const fetchOne = (id) => async (dispatchEvent, getState) => {
  dispatchEvent({ type: LOADING });

  const { bootcamps } = getState().bootcampsReducer;
  const bootcamp = bootcamps.find((bootcamp) => bootcamp.id === id);

  if (bootcamp) {
    dispatchEvent({ type: FETCH_ONE, payload: bootcamp });
    return;
  }

  try {
    const response = await axios.get(`${API_URL}/bootcamps/${id}`);
    const { data } = response;
    dispatchEvent({ type: FETCH_ONE, payload: data.data });
  } catch (error) {
    dispatchEvent({
      type: ERROR,
      payload: "Bootcamp information not available.",
    });
  }
};
