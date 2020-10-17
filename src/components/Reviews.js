import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Alert } from "reactstrap";

import { BackButton } from "./BackButton";
import { ReviewCard } from "./ReviewCard";
import { IconStore } from "./IconStore";
import { RatingBadge } from "./RatingBadge";

export const Reviews = ({ bootcamp = {}, reviews = [] }) => {
  
  const putReviews = () => {
    if (reviews.length === 0) {
      return (
        <Alert color="warning">
          There are no reviews available for this bootcamp.
        </Alert>
      );
    }

    return reviews.map((review) => (
      <React.Fragment key={review._id}>
        <ReviewCard
          title={review.title}
          rating={review.rating}
          text={review.text}
          author={review.user.name}
        />
      </React.Fragment>
    ));
  };

  return (
    <>
      <Col md="8">
        <BackButton to={`/bootcamp/${bootcamp._id}`} className="btn-secondary">
          Bootcamp Info
        </BackButton>

        <h1 className="mb-4">{bootcamp.name} Reviews</h1>

        {putReviews()}
      </Col>

      <Col md="4">
        <h1 className="text-center my-4">
          <RatingBadge className="p-3" rounded>
            {bootcamp.averageRating}
          </RatingBadge>{" "}
          Rating
        </h1>

        <NavLink
          to={`/bootcamp/${bootcamp._id}/add-review`}
          className="btn btn-primary btn-block my-3"
        >
          {IconStore("faPencilAlt")} Review This Bootcamp
        </NavLink>
      </Col>
    </>
  );
};
