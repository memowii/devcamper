import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const ManageAccount = () => {
  usePageWithoutFixedTop();
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <Card color="white" className="py-2 px-4">
              <CardBody>
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
                        <NavLink
                          to="/update-password"
                          className="btn btn-secondary btn-block"
                        >
                          Update Password
                        </NavLink>
                      </Col>
                    </Row>
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
