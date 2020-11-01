import React from "react";
import { Link } from "react-router-dom";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";

export const ManageAccountPage = () => {
  return (
    <InnerLayoutWithCard>
      <h1 className="mb-2">Manage Account</h1>

      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="title"
            placeholder="Name"
            defaultValue="John Doe"
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue="jdoe@gmail.com"
          />
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
