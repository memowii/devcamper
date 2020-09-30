import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const AddReview = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <Card color="white" className="py-2 px-4">
              <CardBody>
                <NavLink
                  to="/bootcamp"
                  target="_blank"
                  className="btn btn-link text-secondary my-3"
                >
                  <FontAwesomeIcon icon={faChevronLeft} /> Bootcamp Info
                </NavLink>

                <h1 className="mb-2">DevWorks Bootcamp</h1>

                <h3 className="text-primary mb-4">Write a Review</h3>

                <p>
                  You must have attended and graduated this bootcamp to review
                </p>

                <Form>
                  <FormGroup>
                    <Label for="rating">
                      Rating: <span className="text-primary">8</span>
                    </Label>
                    <Input
                      type="range"
                      className="custom-range"
                      min="1"
                      max="10"
                      step="1"
                      value="8"
                      onChange={() => false}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Review title"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="review"
                      rows="10"
                      placeholder="Your review"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="submit"
                      value="Submit Review"
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
