import React, { useState, useCallback, useEffect } from "react";
import useFetch from "use-http";
import { Col } from "reactstrap";

import { InnerLayout } from "../../common/components/InnerLayout";
import { Spinner } from "../../common/components/Spinner";
import { Fatal } from "../../common/components/Fatal";
import { ReviewsLeftSide } from "./ReviewsLeftSide";
import { ReviewsRightSide } from "./ReviewsRightSide";

import { BASE_API_URL } from "../../common/costants";

export const ReviewsPage = ({ match }) => {
  const { bootcampId } = match.params;
  const [bootcamp, setBootcamp] = useState({});
  const [reviews, setReviews] = useState([]);
  const { response, get, loading, error } = useFetch(BASE_API_URL);

  const fetchReviewsData = useCallback(async () => {
    const [fetchedBootcamp, fetchedReviews] = await Promise.all([
      get(`/bootcamps/${bootcampId}`),
      get(`/bootcamps/${bootcampId}/reviews`),
    ]);

    if (response.ok) {
      setBootcamp(fetchedBootcamp.data);
      setReviews(fetchedReviews.data);
    }
  }, [response, get, bootcampId]);

  useEffect(() => {
    fetchReviewsData();
  }, [fetchReviewsData]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Fatal
        message="Reviews information not available."
        className="w-100 py-4"
      />
    );
  }

  return (
    <InnerLayout>
      <Col md="8">
        <ReviewsLeftSide reviews={reviews} bootcamp={bootcamp} />
      </Col>

      <Col md="4">
        <ReviewsRightSide bootcamp={bootcamp} />
      </Col>
    </InnerLayout>
  );
};
