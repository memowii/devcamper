import React, { useState } from "react";
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

export const AddReviewForm = ({ bootcampId }) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { token } = getLoggedInUserData();
  const { post, response, loading } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [rating, setRating] = useState(defaultValues.rating);
  const history = useHistory();

  const handleRatingChange = (e) => setRating(parseInt(e.target.value, 10));

  const handleSubmitReview = async (reviewData) => {
    const { rating, title, text } = reviewData;
    const resData = await post(`/bootcamps/${bootcampId}/reviews`, {
      rating,
      title,
      text,
    });

    if (response.ok) {
      history.push(`/bootcamp/${bootcampId}/reviews`);
    } else {
      // Here I use the EMAIL_IN_USE_ERROR constant because the API returns the
      // same error when a user tries to review a bootcamp for a second time.
      // REVIEW: The EMAIL_IN_USE_ERROR constant could be changed, so it have
      // a more general name.
      if (getErrorType(resData) === EMAIL_IN_USE_ERROR) {
        toast.error(
          "You have already reviewed this bootcamp. Only one review per person is allowed.",
          {
            autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            toastId: "toastid",
          }
        );
      }
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(handleSubmitReview)}
    >
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
