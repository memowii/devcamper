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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { usePageWithoutFixedTop } from "../../hooks/usePageWithoutFixedTop";

export const Register = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="6" className="m-auto">
            <Card className="bg-white p-4 mb-4">
              <CardBody>
                <h1>
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </h1>

                <p>
                  Register to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>

                <Form>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password2">Confirm Password</Label>
                    <Input
                      type="password"
                      name="password2"
                      placeholder="Confirm password"
                      required
                    />
                  </FormGroup>

                  <Card body className="mb-3">
                    <h5>User Role</h5>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="role" value="user" checked onChange={() => false} />{" "}
                        Regular User (Browse, Write reviews, etc)
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="role" value="publisher" />{" "}
                        Bootcamp Publisher
                      </Label>
                    </FormGroup>
                  </Card>

                  <p className="text-danger">
                    * You must be affiliated with the bootcamp in some way in
                    order to add it to DevCamper.
                  </p>

                  <FormGroup>
                    <Input
                      type="submit"
                      value="Register"
                      className="btn btn-primary btn-block"
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
