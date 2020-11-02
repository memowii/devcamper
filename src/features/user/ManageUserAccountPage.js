import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  FormFeedback,
} from "reactstrap";
import useFetch from "use-http";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
  EMAIL_IN_USE_ERROR,
} from "../../common/costants";
import { getErrorType, getLoggedInUserData } from "../../common/utils";
import { schemaResolver, defaultValues } from "./manageUserAccountFormConfs";
import { LoadingButton } from "../../common/components/LoadingButton";

export const ManageUserAccountPage = () => {
  const { token } = getLoggedInUserData();
  const { get, put, response, loading } = useFetch(BASE_API_URL + "/auth", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { handleSubmit, register, errors, reset, setError } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });

  const fetchUser = useCallback(async () => {
    const fetchedUser = await get("/me");

    if (response.ok) {
      const { name, email } = fetchedUser.data;
      reset({ name, email });
    } else {
      toast.error("Right now our servers are down. Please try again later.", {
        autoClose: DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
        toastId: "toastid-1",
      });
    }
  }, [get, response, reset]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleSubtmiUser = async (userData) => {
    const resData = await put("/updatedetails", userData);

    if (response.ok) {
      toast.success("Your account has been updated.", {
        autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
        toastId: "toastid",
      });
      const { name, email } = resData.data;
      reset({ name, email });
    } else {
      if (getErrorType(resData) === EMAIL_IN_USE_ERROR) {
        setError("email", { type: "manual", message: "email is duplicated" });
      } else {
        toast.error(
          "An error occurred in your update, please try again later.",
          {
            autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            toastId: "toastid",
          }
        );
      }
    }
  };

  return (
    <InnerLayoutWithCard>
      <h1 className="mb-2">Manage Account</h1>

      <Form onSubmit={handleSubmit(handleSubtmiUser)}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            innerRef={register}
            invalid={errors.name ? true : false}
          />
          <FormFeedback>{errors.name?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            innerRef={register}
            invalid={errors.email ? true : false}
          />
          <FormFeedback>{errors.email?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Row>
            <Col md="6">
              <LoadingButton
                loading={loading}
                loadingText="Updating your account."
                color="success"
              />
            </Col>

            <Col md="6">
              <Link
                to="/update-password"
                className="btn btn-secondary btn-block"
              >
                Update Password
              </Link>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
