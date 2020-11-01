import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import useFetch from "use-http";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { writeStorage } from "@rehooks/local-storage";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  BASE_API_URL,
  INVALID_CREDENTIALS,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";
import { schemaResolver, defaultValues } from "./loginUserFormConfs";
import { userAdded } from "./userSlice";
import { getErrorType } from "../../common/utils";
import { LoadingButton } from "../../common/components/LoadingButton";

export const LoginUserForm = () => {
  const { post, response, loading } = useFetch(BASE_API_URL + "/auth");
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const dispatch = useDispatch(),
    history = useHistory();

  const loginUser = async (userData) => {
    const { email, password } = userData;
    const data = await post("/login", { email, password });

    if (response.ok) {
      const { token } = data;
      writeStorage("sessionToken", token);
      // The token is saved in the store because we need the Navbar component
      // to update reactively.
      dispatch(userAdded({ token }));
      // Redirect user to the /bootcamps page.
      history.push("/bootcamps");
    } else {
      if (getErrorType(data) === INVALID_CREDENTIALS) {
        toast.error(
          "Invalid credentials. Please check your email and password, then submit again.",
          {
            autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            toastId: "toastid",
          }
        );
      } else {
        toast.error(
          "An error occurred in your login, please try again later.",
          {
            autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            toastId: "toastid1",
          }
        );
        setTimeout(() => {
          // Refresh current page.
          history.go(0);
        }, DELAY_TIME_WHEN_FAILED_REGISTRATION);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(loginUser)}>
      <FormGroup>
        <Label for="email">Email Address</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter email"
          innerRef={register}
          invalid={errors.email ? true : false}
        />
        <FormFeedback>{errors.email?.message}</FormFeedback>
      </FormGroup>

      <FormGroup className="mb-4">
        <Label for="email">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          innerRef={register}
          invalid={errors.password ? true : false}
        />
        <FormFeedback>{errors.password?.message}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <LoadingButton loading={loading} loadingText="Login user" />
      </FormGroup>
    </Form>
  );
};
