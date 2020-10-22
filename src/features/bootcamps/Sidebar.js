import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Card } from "reactstrap";

export const Sidebar = () => {
  return (
    <>
      <Card body className="mb-4">
        <h4 className="mb-3">By Location</h4>
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
      </Card>

      <h4>Filter</h4>
      <Form>
        <FormGroup>
          <Label> Rating</Label>
          <Input type="select" className="custom-select mb-2">
            <option value="any">Any</option>
            <option value="9">9+</option>
            <option value="8">8+</option>
            <option value="7">7+</option>
            <option value="6">6+</option>
            <option value="5">5+</option>
            <option value="4">4+</option>
            <option value="3">3+</option>
            <option value="2">2+</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label> Budget</Label>
          <Input type="select" className="custom-select mb-2">
            <option value="any">Any</option>
            <option value="20000">$20,000</option>
            <option value="15000">$15,000</option>
            <option value="10000">$10,000</option>
            <option value="8000">$8,000</option>
            <option value="6000">$6,000</option>
            <option value="4000">$4,000</option>
            <option value="2000">$2,000</option>
          </Input>
        </FormGroup>

        <Input
          type="submit"
          value="Find Bootcamps"
          className="btn btn-primary btn-block"
        />
      </Form>
    </>
  );
};
