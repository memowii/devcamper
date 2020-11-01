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
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";
import { getLoggedInUserData } from "../../common/utils";
import { schemaResolver, defaultValues } from "./manageAccountFormConfs";

export const ManageAccountPage = () => {
  const { token } = getLoggedInUserData();
  const { get, response, loading } = useFetch(BASE_API_URL + "/auth", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { handleSubmit, register, errors, formState, reset } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });

  const fetchUser = useCallback(async () => {
    const fetchedUser = await get("/me");

    if (response.ok) {
      const { name, email } = fetchedUser.data;
      reset({ name, email });
    } else {
      toast.error(
        "An error ocurred while updating this review. Please try again later.",
        {
          autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false,
          toastId: "toastid",
        }
      );
    }
  }, [get, response.ok]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleSubtmiUser = (data) => console.log(data);

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
              <Input
                type="submit"
                defaultValue="Save"
                className="btn btn-success btn-block"
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
