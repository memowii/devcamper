import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const ResetPassword = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <Card className="bg-white py-2 px-4">
              <CardBody>
                <NavLink to="/login">Back to login</NavLink>
                <h1 className="mb-2">Reset Password</h1>
                <p>
                  {" "}
                  Use this form to reset your password using the registered
                  email address.
                </p>
                <Form>
                  <FormGroup>
                    <Label>Enter Email</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="submit"
                      value="Reset Password"
                      className="btn btn-dark btn-block"
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
