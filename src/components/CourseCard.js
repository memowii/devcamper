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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export const CourseCard = ({
  title,
  duration,
  description,
  cost,
  skill,
  scholarship,
}) => {
  return (
    <Card className="mb-3">
      <CardHeader tag="h5" className="text-white bg-primary">
        {title}
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">{duration}</CardTitle>

        <CardText>{description}</CardText>

        <ListGroup className="mb-3">
          <ListGroupItem>{cost}</ListGroupItem>
          <ListGroupItem>{skill}</ListGroupItem>
          <ListGroupItem>
            Scholarship Available:{" "}
            {scholarship ? (
              <FontAwesomeIcon icon={faCheck} className="text-success" />
            ) : (
              <FontAwesomeIcon icon={faTimes} className="text-danger" />
            )}
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};
