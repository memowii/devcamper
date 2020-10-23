import axios from "axios";
import { CREATE, LOADING, ERROR } from "../types/authTypes";

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
      data: { success }, // don't forget the token, it has to be saved somewhere
    } = response;

    if (success) {
      dispatchEvent({ type: CREATE });
      return;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("error", error);
    dispatchEvent({
      type: ERROR,
      payload:
        "The user registration couldn't be completed. Please try again later.",
    });
  }
};
