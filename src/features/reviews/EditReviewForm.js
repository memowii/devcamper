import React, { useState, useEffect, useCallback } from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import useFetch from "use-http";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { schemaResolver, defaultValues } from "./addReviewFormConfs";
import {
  BASE_API_URL,
  EMAIL_IN_USE_ERROR,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";
import { LoadingButton } from "../../common/components/LoadingButton";
import { getLoggedInUserData } from "../../common/utils";
import { getErrorType } from "../../common/utils";

export const EditReviewForm = ({ match }) => {
  const { reviewId } = match.params;
  const [review, setReview] = useState({});
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { token } = getLoggedInUserData();
  const { get, post, response, loading } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [rating, setRating] = useState(defaultValues.rating);
  const history = useHistory();

  const handleRatingChange = (e) => setRating(parseInt(e.target.value, 10));

  const fetchReview = useCallback(async () => {
    const fetchedReview = await get(`/reviews/${reviewId}`);

    if (response.ok) setReview(fetchedReview.data);
  }, [reviewId, get, response]);

  useEffect(() => {});

  return (
    <Form onSubmit={handleSubmit()}>
      <FormGroup>
        <Label for="rating">
          Rating: <span className="text-primary">{rating}</span>
        </Label>
        <Input
          type="range"
          name="rating"
          className="custom-range"
          min="1"
          max="10"
          step="1"
          value={rating}
          onChange={handleRatingChange}
          innerRef={register}
          invalid={errors.rating ? true : false}
        />
        <FormFeedback>{errors.rating?.message}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          name="title"
          className="form-control"
          placeholder="Review title"
          innerRef={register}
          invalid={errors.title ? true : false}
        />
        <FormFeedback>{errors.title?.message}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Input
          type="textarea"
          name="text"
          rows="10"
          placeholder="Your review"
          innerRef={register}
          invalid={errors.text ? true : false}
        />
        <FormFeedback>{errors.text?.message}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <LoadingButton
          loading={loading}
          text="Submit Review"
          color="dark"
          loadingText="Adding review"
        />
      </FormGroup>
    </Form>
  );
};
