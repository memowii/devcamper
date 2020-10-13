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

import { RatingBadge } from "./RatingBadge";

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
                <RatingBadge className="float-right">
                  {averageRating}
                </RatingBadge>
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
