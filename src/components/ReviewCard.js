import React from "react";
import { CardHeader, Card, CardBody, CardTitle, CardText } from "reactstrap";

export const ReviewCard = ({ title, rating, text, author }) => {
  return (
    <Card className="mb-3">
      <CardHeader tag="h5" className="bg-dark text-white">
        {title}
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">
          Rating: <span className="text-success">{rating}</span>
        </CardTitle>
        <CardText>{text}</CardText>
        <p className="text-muted">Writtern By {author}</p>
      </CardBody>
    </Card>
  );
};
