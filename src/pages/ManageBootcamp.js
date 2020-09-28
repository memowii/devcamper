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

import img1 from "../assets/images/image_1.jpg";
import { BootcampCard } from "../components/BootcampCard";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const ManageBootcamp = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <Card color="white" className="py-2 px-4">
              <CardBody>
                <h1 className="mb-4">Manage Bootcamp</h1>

                <BootcampCard
                  img={img1}
                  title="Devworks Bootcamp"
                  rating="8.8"
                  place="Boston, MA"
                  courses="Web Development, UI/UX, Mobile Development"
                />

                <Form className="mb-4">
                  <FormGroup>
                    <div className="custom-file">
                      <Input
                        type="file"
                        name="photo"
                        className="custom-file-input"
                      />
                      <Label className="custom-file-label" for="photo">
                        Add Bootcamp Image
                      </Label>
                    </div>
                  </FormGroup>
                  <Input
                    type="submit"
                    className="btn btn-light btn-block"
                    value="Upload Image"
                  />
                </Form>

                <NavLink
                  to="/add-bootcamp"
                  className="btn btn-primary btn-block"
                >
                  Edit Bootcamp Details
                </NavLink>

                <NavLink
                  to="/manage-courses"
                  className="btn btn-secondary btn-block"
                >
                  Manage Courses
                </NavLink>

                <NavLink to="/manage-courses" className="btn btn-danger btn-block">
                  Remove Bootcamp
                </NavLink>

                <p className="text-muted mt-5">
                  * You can only add one bootcamp per account.
                </p>
                <p className="text-muted">
                  * You must be affiliated with the bootcamp in some way in
                  order to add it to DevCamper.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};