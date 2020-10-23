import React, { Fragment } from "react";
import { Alert } from "reactstrap";

import { BackButton } from "../../common/components/BackButton";
import { ReviewCard } from "../../common/components/ReviewCard";

export const ReviewsLeftSide = ({ reviews = [], bootcamp }) => {
  const putReviews = () => {
    if (reviews.length === 0) {
      return (
        <Alert color="warning">
          There are no reviews available for this bootcamp.
        </Alert>
      );
    }

    return reviews.map((review) => (
      <Fragment key={review._id}>
        <ReviewCard
          title={review.title}
          rating={review.rating}
          text={review.text}
          author={review.user.name}
        />
      </Fragment>
    ));
  };

  return (
    <>
      <BackButton to={`/bootcamp/${bootcamp.id}`} className="btn-secondary">
        Bootcamp Info
      </BackButton>

      <h1 className="mb-4">{bootcamp.name} Reviews</h1>

      {putReviews()}
    </>
  );
};
