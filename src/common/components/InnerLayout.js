import React from "react";
import { Container, Row } from "reactstrap";

export const InnerLayout = ({ children }) => {
  return (
    <section className="mt-5">
      <Container>
        <Row>{children}</Row>
      </Container>
    </section>
  );
};
