import React from "react";
import { Row, Col, Form, FormGroup, Input } from "reactstrap";

export const BootcampFilterByLocationForm = () => {
  return (
    <Form>
      <Row>
        <Col md="6">
          <FormGroup>
            <Input type="text" name="miles" placeholder="Miles From" />
          </FormGroup>
        </Col>

        <Col md="6">
          <FormGroup>
            <Input type="text" name="zipcode" placeholder="Enter Zipcode" />
          </FormGroup>
        </Col>
      </Row>
      <Input
        type="submit"
        value="Find Bootcamps"
        className="btn btn-primary btn-block"
      />
    </Form>
  );
};
