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

export const BootcampCard = ({
  photo,
  name,
  averageRating,
  place,
  careers,
}) => {
  return (
    <Card className="mb-3">
      <Row noGutters>
        <Col md="4">
          <img src={photo} alt={name} />
        </Col>
        <Col md="8">
          <CardBody>
            <CardTitle tag="h5">
              <a href="/">
                {name}
                <Badge className="float-right" color="success">
                  {averageRating}
                </Badge>
              </a>
            </CardTitle>
            <Badge color="dark" className="mb-2">
              {place}
            </Badge>
            <CardText>{careers}</CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};
