import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import { IconStore } from "./IconStore";

export const CourseCard = ({
  title,
  weeks,
  description,
  tuition,
  minimumSkill,
  scholarshipAvailable,
}) => {
  const getTextDuration = (weeks) =>
    weeks > 1 ? `Duration: ${weeks} Weeks` : `Duration: ${weeks} Week`;

  return (
    <Card className="mb-3">
      <CardHeader tag="h5" className="text-white bg-primary">
        {title}
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">{getTextDuration(weeks)}</CardTitle>

        <CardText>{description}</CardText>

        <ListGroup className="mb-3">
          <ListGroupItem>Cost: ${tuition} USD</ListGroupItem>
          <ListGroupItem>Skill Required: {minimumSkill}</ListGroupItem>
          <ListGroupItem>
            Scholarship Available:{" "}
            {scholarshipAvailable
              ? IconStore("faCheck", "text-success")
              : IconStore("faTimes", "text-danger")}
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};
