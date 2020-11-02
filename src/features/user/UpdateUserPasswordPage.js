import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";

export const UpdateUserPasswordPage = () => {
  return (
    <InnerLayoutWithCard>
      <h1 className="mb-2">Update Password</h1>

      <Form>
        <FormGroup>
          <Label>Current Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Current Password"
          />
        </FormGroup>

        <FormGroup>
          <Label>New Password</Label>
          <Input
            type="password"
            name="newPassword"
            placeholder="New Password"
          />
        </FormGroup>

        <FormGroup>
          <Label>Confirm New Password</Label>
          <Input
            type="password"
            name="newPassword2"
            placeholder="Confirm New Password"
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="submit"
            value="Update Password"
            className="btn btn-dark btn-block"
          />
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
