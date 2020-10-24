import React from "react";
import useFetch from "use-http";
import { toast } from "react-toastify";
import { writeStorage } from "@rehooks/local-storage";
import { useHistory } from "react-router-dom";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { IconStore } from "../../common/components/IconStore";
import { RegisterForm } from "./RegisterForm";

import { BASE_API_URL } from "../../common/costants";

export const RegisterPage = () => {
  const { post, response, loading, error } = useFetch(BASE_API_URL + "/auth");
  const history = useHistory();

  const registerUser = async (userData) => {
    const { name, email, password, role } = userData;
    const { token } = await post("/register", { name, email, password, role });

    if (response.ok) {
      toast.success("The user was registered successfully.", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
      });
      setTimeout(() => {
        writeStorage("sessionToken", token);
        history.push("/bootcamps");
      }, 3000);
    }
  };

  if (error) {
    toast.error(
      "An error occurred in your registration, please try again later.",
      {
        autoClose: 4000,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
      }
    );
    setTimeout(() => {
      history.go(0);
    }, 4000);
  }

  return (
    <InnerLayoutWithCard colMd="6" cardClass="p-4 mb-4">
      <h1>{IconStore("faUserPlus")} Register</h1>

      <p>
        Register to list your bootcamp or rate, review and favorite bootcamps.
      </p>

      <RegisterForm
        handleUserRegistration={registerUser}
        userInRegistration={loading}
      />
    </InnerLayoutWithCard>
  );
};
