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
import { Link } from "react-router-dom";

import { RatingBadge } from "../../common/components/RatingBadge";
import { formatCost } from "../../common/utils";

export const BootcampCard = ({
  id,
  photo,
  name,
  averageCost,
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
              <Link to={`/bootcamp/${id}`}>
                {name}
                <RatingBadge className="float-right">
                  {averageRating}
                </RatingBadge>
              </Link>
            </CardTitle>
            <Badge color="dark" className="mb-2">
              {place}
            </Badge>
            <CardText>{careers}</CardText>
            <CardText className="BootcampCard__cost">
              {averageCost && formatCost(averageCost)}
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};
