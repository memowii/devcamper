import React, { useEffect, useCallback, useState } from "react";
import useFetch from "use-http";
import { toast } from "react-toastify";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BackButton } from "../../common/components/BackButton";
import { EditReviewForm } from "./EditReviewForm";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";

export const EditReviewPage = ({ match }) => {
  const { reviewId } = match.params;
  const [review, setReview] = useState({});
  const { get, response } = useFetch(BASE_API_URL);

  const fetchReview = useCallback(async () => {
    const fetchedReview = await get(`/reviews/${reviewId}`);

    if (response.ok) setReview(fetchedReview.data);
    else {
      toast.error("Right now our servers are down. Please try again later.", {
        autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
        toastId: "toastid",
      });
    }
  }, [get, response.ok, reviewId]);

  useEffect(() => {
    fetchReview();
  }, [fetchReview]);

  return (
    <InnerLayoutWithCard>
      <BackButton to={`/manage-reviews`} className="btn-link text-secondary">
        Reviews management
      </BackButton>

      <h1 className="mb-2">{review.bootcamp?.name} Bootcamp</h1>

      <h3 className="text-primary mb-4">Edit your review</h3>

      <EditReviewForm {...review} />
    </InnerLayoutWithCard>
  );
};
