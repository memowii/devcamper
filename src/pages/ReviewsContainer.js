import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { Spinner } from "../components/Spinner";
import { Fatal } from "../components/Fatal";
import * as reviewsActions from "../actions/reviewsActions";

import { InnerLayout } from "../components/InnerLayout";
import { Reviews } from "../components/Reviews";

export const _ReviewsContainer = (props) => {
  const { id } = useParams();
  const { fetchBootcampReviews, reviews, loading, error } = props;

  useEffect(() => {
    fetchBootcampReviews(id);
  }, [id, fetchBootcampReviews]);

  const putReviews = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} className="w-100 py-4" />;
    }

    return <Reviews reviews={reviews} />;
  };

  return <InnerLayout>{putReviews()}</InnerLayout>;
};

const mapStateToProps = (reducers) => {
  return reducers.reviewsReducer;
};

export const ReviewsContainer = connect(
  mapStateToProps,
  reviewsActions
)(_ReviewsContainer);
