import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

export const Home = () => (
  <section className="showcase">
    <div className="dark-overlay">
      <Container className="showcase-inner">
        <h1 className="display-4">Find a Code Bootcamp</h1>
        <p className="lead">Find, rate and read reviews on coding bootcamps</p>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input type="text" name="miles" placeholder="Miles From" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input type="text" name="miles" placeholder="Enter Zipcode" />
              </FormGroup>
            </Col>
          </Row>
          <Input
            type="submit"
            value="Find Bootcamps"
            className="btn btn-primary btn-block"
          />
        </Form>
      </Container>
    </div>
  </section>
);
