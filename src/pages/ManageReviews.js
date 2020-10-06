import React from "react";
import { Container, Row, Col, CardBody, Card, Table } from "reactstrap";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";
import { TableRow } from "../components/TableRow";

export const ManageReviews = () => {
  usePageWithoutFixedTop();
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="8" className="m-auto">
            <Card color="white" className="py-2 px-4">
              <CardBody>
                <h1 className="mb-4">Manage Reviews</h1>

                <Table striped>
                  <thead>
                    <tr>
                      <th scope="col">Bootcamp</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow tdsContent={["DevWorks Bootcamp", "10"]} />
                    <TableRow tdsContent={["Codemasters", "7"]} />
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
