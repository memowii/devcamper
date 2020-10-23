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

import { formatCost } from "../../common/utils";
import { capitalizeWord } from "../../common/utils";
import { AcceptedSymbol } from "./AcceptedSymbol";

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
          <ListGroupItem>Cost: {formatCost(tuition)} USD</ListGroupItem>
          <ListGroupItem>
            Skill Required: {capitalizeWord(minimumSkill)}
          </ListGroupItem>
          <ListGroupItem>
            Scholarship Available:{" "}
            <AcceptedSymbol accepted={scholarshipAvailable} />
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};
