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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const Login = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="6" className="m-auto">
            <Card className="bg-white p-4 mb-4">
              <CardBody>
                <h1>
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </h1>
                <p>
                  Log in to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <Form>
                  <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                    />
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
                  Forgot Password?{" "}
                  <NavLink to="/reset-password">Reset Password</NavLink>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
