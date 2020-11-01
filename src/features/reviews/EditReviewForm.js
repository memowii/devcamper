import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import useFetch from "use-http";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { schemaResolver, defaultValues } from "./addReviewFormConfs";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";
import { LoadingButton } from "../../common/components/LoadingButton";
import { getLoggedInUserData } from "../../common/utils";

export const EditReviewForm = ({ _id, rating, title, text }) => {
  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { token } = getLoggedInUserData();
  const { put, response, loading } = useFetch(BASE_API_URL, {
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
  }, [rating, title, text, reset]);

  const handleSubmitReview = async (reviewData) => {
    const { rating, title, text } = reviewData;
    await put(`/reviews/${_id}`, {
      rating,
      title,
      text,
    });

    if (response.ok) {
      history.push("/manage-reviews");
      // Here I make a page refresh because I encounter this known problem:
      // https://github.com/ReactTraining/react-router/issues/7416 
      // One way to avoid this is using some storage solution like Redux.
      // Maybe in future iterations Redux could be impleted in this project.
      history.go(0);
    } else {
      toast.error(
        "An error ocurred while updating this review. Please try again later.",
        {
          autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false,
          toastId: "toastid",
        }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitReview)}>
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
