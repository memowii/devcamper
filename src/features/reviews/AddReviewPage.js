import React from "react";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BackButton } from "../../common/components/BackButton";
import { AddReviewForm } from "./AddReviewForm";

export const AddReviewPage = ({ match }) => {
  const { bootcampId } = match.params;

  return (
    <InnerLayoutWithCard>
      <BackButton
        to={`/bootcamp/${bootcampId}`}
        className="btn-link text-secondary"
      >
        Bootcamp Info
      </BackButton>

      <h1 className="mb-2">DevWorks Bootcamp</h1>

      <h3 className="text-primary mb-4">Write a Review</h3>

      <p>You must have attended and graduated this bootcamp to review</p>

      <AddReviewForm bootcampId={bootcampId} />
    </InnerLayoutWithCard>
  );
};
