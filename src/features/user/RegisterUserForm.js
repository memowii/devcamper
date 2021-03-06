import React from "react";
import useFetch from "use-http";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { writeStorage } from "@rehooks/local-storage";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  FormFeedback,
} from "reactstrap";
import { useDispatch } from "react-redux";

import {
  BASE_API_URL,
  DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
  EMAIL_IN_USE_ERROR,
  PASSWORD_IS_SHORT_ERROR,
} from "../../common/costants";
import { schemaResolver, defaultValues } from "./registerUserFormConfs";
import { userAdded } from "./userSlice";
import { getErrorType } from "../../common/utils";
import { LoadingButton } from "../../common/components/LoadingButton";

export const RegisterUserForm = () => {
  const { post, response, loading } = useFetch(BASE_API_URL + "/auth");
  const {
    handleSubmit,
    register,
    errors,
    trigger,
    formState,
    setError,
  } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { isSubmitted } = formState;
  const history = useHistory();
  const dispatch = useDispatch();

  const registerUser = async (userData) => {
    const { name, email, password, role } = userData;
    const data = await post("/register", { name, email, password, role });

    if (response.ok) {
      // REVIEW: Check if the calls to toast can be reduced in lines.
      toast.success("The user was registered successfully.", {
        autoClose: DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
      });
      setTimeout(() => {
        const { token } = data;
        writeStorage("sessionToken", token);
        // The token is saved in the store because we need the Navbar component
        // to update reactively.
        dispatch(userAdded({ token }));
        // Redirect user to the /bootcamps page.
        history.push("/bootcamps");
      }, DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION);
    } else {
      if (getErrorType(data) === EMAIL_IN_USE_ERROR) {
        setError("email", { type: "manual", message: "email is duplicated" });
      } else if (getErrorType(data) === PASSWORD_IS_SHORT_ERROR) {
        setError("password", {
          type: "manual",
          message: "password is too short",
        });
        setError("password_conf", {
          type: "manual",
          message: "password is too short",
        });
      } else {
        toast.error(
          "An error occurred in your registration, please try again later.",
          {
            autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            toastId: "toastid",
          }
        );
        setTimeout(() => {
          // Refresh current page.
          history.go(0);
        }, DELAY_TIME_WHEN_FAILED_REGISTRATION);
      }
    }
  };

  const validatePasswordsAfterSubmitting = () => {
    if (!isSubmitted) return;
    trigger(["password", "password_conf"]);
  };

  return (
    <Form onSubmit={handleSubmit(registerUser)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter full name"
          innerRef={register}
          invalid={errors.name ? true : false}
        />
        <FormFeedback>{errors.name?.message}</FormFeedback>
      </FormGroup>

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

      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          innerRef={register}
          invalid={errors.password ? true : false}
          onChange={validatePasswordsAfterSubmitting}
        />
        <FormFeedback>{errors.password?.message}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label for="password_conf">Confirm Password</Label>
        <Input
          type="password"
          name="password_conf"
          placeholder="Confirm password"
          innerRef={register}
          invalid={errors.password_conf ? true : false}
          onChange={validatePasswordsAfterSubmitting}
        />
        <FormFeedback>{errors.password_conf?.message}</FormFeedback>
      </FormGroup>

      <Card body className="mb-3">
        <h5>User Role</h5>

        <FormGroup check>
          <Label check>
            <Input type="radio" name="role" value="user" innerRef={register} />{" "}
            Regular User (Browse, Write reviews, etc)
          </Label>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="role"
              value="publisher"
              innerRef={register}
              invalid
            />{" "}
            Bootcamp Publisher
          </Label>
        </FormGroup>

        <FormGroup style={{ marginBottom: 0 }}>
          <Input
            style={{ display: "none" }}
            invalid={errors.role ? true : false}
          />
          <FormFeedback>{errors.role?.message}</FormFeedback>
        </FormGroup>
      </Card>

      <p className="text-danger">
        * You must be affiliated with the bootcamp in some way in order to add
        it to DevCamper.
      </p>

      <FormGroup>
        <LoadingButton loading={loading} loadingText="Registering user" />
      </FormGroup>
    </Form>
  );
};
