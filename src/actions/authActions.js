import axios from "axios";
import { LOADING, ERROR } from "../types/authTypes";

const API_URL = "http://localhost:5000/api/v1";

export const register = (user) => async (dispatchEvent) => {
  dispatchEvent({ type: LOADING });

  try {
    const { name, email, password, role } = user;
    const response = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
      role,
    });
    const {
      data: { success, token },
    } = response;

    console.log("response", response);

  } catch (error) {
    console.log("error", error);
    dispatchEvent({
      type: ERROR,
      payload: "Reviews information not available.",
    });
  }
};
