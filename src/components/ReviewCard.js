import React from "react";
import { CardHeader, Card, CardBody, CardTitle, CardText } from "reactstrap";

export const ReviewCard = ({ title, rating, review, author }) => {
  return (
    <Card className="mb-3">
      <CardHeader tag="h5" className="bg-dark text-white">
        {title}
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">
          Rating: <span class="text-success">{rating}</span>
        </CardTitle>
        <CardText>{review}</CardText>
        <p class="text-muted">Writtern By {author}</p>
      </CardBody>
    </Card>
  );
};
