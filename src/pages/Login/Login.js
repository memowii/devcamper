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

import { usePageWithoutFixedTop } from "../../hooks/usePageWithoutFixedTop";

export const Login = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="6" className="m-auto">
            <Card className="bg-white p-4 mb-4">
              <CardBody>
                <h1>Login</h1>
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
                    <Label for="email">Email Address</Label>
                    <Input
                      type="submit"
                      placeholder="Enter email"
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
