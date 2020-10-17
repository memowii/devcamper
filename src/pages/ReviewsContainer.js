import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { Spinner } from "../components/Spinner";
import { Fatal } from "../components/Fatal";
import { InnerLayout } from "../components/InnerLayout";
import { Reviews } from "../components/Reviews";

import * as reviewsActions from "../actions/reviewsActions";
import * as bootcampsActions from "../actions/bootcampsActions";

const { fetchBootcampReviews } = reviewsActions;
const { fetchOne: fetchBootcamp } = bootcampsActions;

export const _ReviewsContainer = (props) => {
  const { id } = useParams();
  const {
    fetchBootcampReviews,
    fetchBootcamp,
    bootcampsReducer: {
      bootcamp,
      loading: bootcampsLoading,
      error: bootcampsError,
    },
    reviewsReducer: { reviews, loading: reviewsLoading, error: reviewsError },
  } = props;

  useEffect(() => {
    fetchBootcampReviews(id);
    fetchBootcamp(id);
  }, [id, fetchBootcampReviews, fetchBootcamp]);

  const putReviews = () => {
    if (bootcampsLoading || reviewsLoading) {
      return <Spinner />;
    }

    if (bootcampsError || reviewsError) {
      return <Fatal message={reviewsError} className="w-100 py-4" />;
    }

    return <Reviews bootcamp={bootcamp} reviews={reviews} />;
  };

  return <InnerLayout>{putReviews()}</InnerLayout>;
};

const mapStateToProps = ({ reviewsReducer, bootcampsReducer }) => ({
  reviewsReducer,
  bootcampsReducer,
});

const mapDispatchToProps = {
  fetchBootcampReviews,
  fetchBootcamp,
};

export const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ReviewsContainer);
