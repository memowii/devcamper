import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const ManageBootcampNone = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <Card color="white" className="py-2 px-4">
              <CardBody>
                <h1 className="mb-2">Manage Bootcamp</h1>

                <p className="lead">You have not yet added a bootcamp</p>

                <NavLink
                  to="/add-bootcamp"
                  className="btn btn-primary btn-block"
                >
                  Add Bootcamp
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
