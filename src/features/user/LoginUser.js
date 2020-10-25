import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink } from "react-router-dom";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { IconStore } from "../../common/components/IconStore";

export const LoginUser = () => {
  return (
    <InnerLayoutWithCard colMd="6" cardClass="p-4 mb-4">
      <h1>{IconStore("faSignInAlt")} Login</h1>

      <p>Log in to list your bootcamp or rate, review and favorite bootcamps</p>
      <Form>
        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input type="email" name="email" placeholder="Enter email" required />
        </FormGroup>

        <FormGroup className="mb-4">
          <Label for="email">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </FormGroup>
      </Form>
      <p>
        Forgot Password? <NavLink to="/reset-password">Reset Password</NavLink>
      </p>
    </InnerLayoutWithCard>
  );
};
