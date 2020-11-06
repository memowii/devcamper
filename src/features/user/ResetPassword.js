import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink } from "react-router-dom";

import { InnerLayoutWithCard } from "../components/InnerLayoutWithCard";

export const ResetPassword = () => {
  return (
    <InnerLayoutWithCard>
      <NavLink to="/login">Back to login</NavLink>
      <h1 className="mb-2">Reset Password</h1>
      <p>
        {" "}
        Use this form to reset your password using the registered email address.
      </p>
      <Form>
        <FormGroup>
          <Label>Enter Email</Label>
          <Input type="email" name="email" placeholder="Email address" />
        </FormGroup>

        <FormGroup>
          <Input
            type="submit"
            value="Reset Password"
            className="btn btn-dark btn-block"
          />
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
