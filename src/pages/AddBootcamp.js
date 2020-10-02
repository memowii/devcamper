import React from "react";
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

export const AddBootcamp = () => {
  usePageWithoutFixedTop();

  return (
    <div>
      <section className="mt-5">
        <Container>
          <h1 className="mb-2">Add Bootcamp</h1>

          <p>
            Important: You must be affiliated with a bootcamp to add to
            DevCamper
          </p>

          <Form>
            <Row>
              <Col md="6">
                <Card color="white" className="py-2 px-4">
                  <CardBody>
                    <h3>Location & Contact</h3>

                    <p className="text-muted">
                      If multiple locations, use the main or largest
                    </p>

                    <FormGroup>
                      <Label>Name</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Bootcamp Name"
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        name="address"
                        placeholder="Full Address"
                        required
                      />
                      <small className="form-text text-muted">
                        Street, city, state, etc
                      </small>
                    </FormGroup>

                    <FormGroup>
                      <Label>Phone Number</Label>
                      <Input type="text" name="phone" placeholder="Phone" />
                    </FormGroup>

                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="text"
                        name="email"
                        placeholder="Contact Email"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Website</Label>
                      <Input
                        type="text"
                        name="website"
                        placeholder="Website URL"
                      />
                    </FormGroup>
                  </CardBody>
                </Card>
              </Col>

              <Col md="6">
                <Card color="white" className="py-2 px-4">
                  <CardBody>
                    <h3>Other Info</h3>
                    <FormGroup>
                      <Label>Description</Label>
                      <Input
                        type="textarea"
                        name="description"
                        rows="5"
                        placeholder="Description (What you offer, etc)"
                        maxLength="500"
                      />
                      <small className="form-text text-muted">
                        No more than 500 characters
                      </small>
                    </FormGroup>
                    <FormGroup>
                      <Label>Careers</Label>
                      <Input
                        type="select"
                        name="careers"
                        className="custom-select"
                        multiple
                      >
                        <option value="any">Select all that apply</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">
                          Mobile Development
                        </option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                      </Input>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Housing
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Job Assistance
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Job Guarantee
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Accepts GI Bill
                      </Label>
                    </FormGroup>

                    <p className="text-muted my-4">
                      *After you add the bootcamp, you can add the specific
                      courses offered
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <FormGroup>
              <Input
                type="submit"
                value="Submit Bootcamp"
                className="btn btn-success btn-block my-4"
              />

              {/* 
              Should this button be implemented?
              <a
                href="manage-bootcamp.html"
                class="btn btn-danger btn-block mb-4"
              >
                Cancel
              </a> */}
            </FormGroup>
          </Form>
        </Container>
      </section>
    </div>
  );
};
