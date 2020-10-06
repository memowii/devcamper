import React from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const ManageCoursesNone = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col className="m-auto">
            <Card color="white" className="py-2 px-4">
              <CardBody>
                <h1 className="mb-2">Manage Courses</h1>

                <p className="lead">You have not yet added any courses</p>

                <NavLink to="/add-course" className="btn btn-primary btn-block">
                  Add Your first course
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
