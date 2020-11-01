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

export const EditReviewForm = ({ rating, title, text }) => {
  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { token } = getLoggedInUserData();
  const { post, response, loading } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [formRating, setFormRating] = useState(rating || "");
  const history = useHistory();

  const handleRatingChange = (e) => setFormRating(parseInt(e.target.value, 10));

  useEffect(() => {
    reset({ rating, title, text });
    setFormRating(rating);
  }, [rating, title, text]);

  return (
    <Form onSubmit={handleSubmit()}>
      <FormGroup>
        <Label for="rating">
          Rating: <span className="text-primary">{formRating}</span>
        </Label>
        <Input
          type="range"
          name="rating"
          className="custom-range"
          min="1"
          max="10"
          step="1"
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
          loadingText="Updating review"
        />
      </FormGroup>
    </Form>
  );
};
