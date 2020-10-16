import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Badge } from "reactstrap";

import { BackButton } from "./BackButton";
import { ReviewCard } from "./ReviewCard";
import { IconStore } from "./IconStore";

export const Reviews = ({ reviews = [] }) => {
  return (
    <>
      <Col md="8">
        <BackButton to="/bootcamp" className="btn-secondary">
          Bootcamp Info
        </BackButton>

        <h1 className="mb-4">DevWorks Bootcamp Reviews</h1>

        {reviews.length > 0 &&
          reviews.map((review) => (
            <ReviewCard
              title={review.title}
              rating={review.rating}
              text={review.text}
              author={review.author}
            />
          ))}
      </Col>

      <Col md="4">
        <h1 className="text-center my-4">
          <Badge color="success" className="rounded-circle p-3">
            8.8
          </Badge>{" "}
          Rating
        </h1>

        <NavLink to="/add-review" className="btn btn-primary btn-block my-3">
          {IconStore("faPencilAlt")} Review This Bootcamp
        </NavLink>
      </Col>
    </>
  );
};
