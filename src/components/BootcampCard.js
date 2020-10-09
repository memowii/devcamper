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
import { NavLink } from "react-router-dom";

export const BootcampCard = ({
  id,
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
              <NavLink to={`/bootcamp/${id}`}>
                {name}
                <RatingBadge>{averageRating}</RatingBadge>
              </NavLink>
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

const RatingBadge = ({ children, averageRating }) => {
  if (!children) {
    return (
      <Badge className="float-right" color="dark">
        N/A
      </Badge>
    );
  }

  let color,
    rating = parseInt(children, 10);
  if (rating <= 5) {
    color = "danger";
  } else if (rating > 5 && rating < 8) {
    color = "warning";
  } else {
    color = "success";
  }

  return (
    <Badge className="float-right" color={color}>
      {children}
    </Badge>
  );
};
