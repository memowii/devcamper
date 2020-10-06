import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const UpdatePassword = () => {
  usePageWithoutFixedTop();

  return (
    <div>
      <section className="mt-5">
        <Container>
          <Row>
            <Col md="8" className="m-auto">
              <Card color="white" className="py-2 px-4">
                <CardBody>
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
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};