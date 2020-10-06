import React from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { BootcampCard } from "../components/BootcampCard";
import { TableRow } from "../components/TableRow";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";
import img1 from "../assets/images/image_1.jpg";

export const ManageCourses = () => {
  usePageWithoutFixedTop();

  return (
    <section className="m-5">
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
                  <FontAwesomeIcon icon={faChevronLeft} /> Manage Bootcamp
                </NavLink>

                <h1 className="mb-4">Manage Courses</h1>

                <BootcampCard
                  img={img1}
                  title="Devworks Bootcamp"
                  rating="4.9"
                  place="Boston, MA"
                  courses="Web Development, UI/UX, Mobile Development"
                />

                <NavLink
                  to="/add-course"
                  className="btn btn-primary btn-block mb-4"
                >
                  Add Bootcamp Course
                </NavLink>

                <Table striped>
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow tdsContent={["Front End Web Development"]} />
                    <TableRow tdsContent={["Full Stack Web Development"]} />
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
