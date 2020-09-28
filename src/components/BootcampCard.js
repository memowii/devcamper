import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Badge,
  CardText,
} from "reactstrap";

export const BootcampCard = ({ img, title, rating, place, courses }) => {
  return (
    <Card className="mb-3">
      <Row noGutters>
        <Col md="4">
          <img src={img} alt="..." />
        </Col>
        <Col md="8">
          <CardBody>
            <CardTitle className="h5">
              <a href="/">
                {title}
                <Badge className="float-right" color="success">
                  {rating}
                </Badge>
              </a>
            </CardTitle>
            <Badge color="dark" className="mb-2">
              {place}
            </Badge>
            <CardText>{courses}</CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};
