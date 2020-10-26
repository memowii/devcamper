import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import useFetch from "use-http";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { writeStorage } from "@rehooks/local-storage";

import { BASE_API_URL } from "../../common/costants";
import { schemaResolver, defaultValues } from "./LoginUserFormConfs";

export const LoginUserForm = () => {
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

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
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
        <Input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </FormGroup>
    </Form>
  );
};
