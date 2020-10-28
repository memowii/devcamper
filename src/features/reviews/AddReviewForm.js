import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
} from "reactstrap";
import useFetch from "use-http";
import { useForm } from "react-hook-form";

import { schemaResolver, defaultValues } from "./addReviewFormConfs";

export const AddReviewForm = () => {
  const {
    handleSubmit,
    register,
    errors,
    trigger,
    formState,
    setError,
  } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const [rating, setRating] = useState(1);

  const handleRatingChange = (e) => setRating(parseInt(e.target.value, 10));

  const handleSubmitReview = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(handleSubmitReview)}>
      <FormGroup>
        <Label for="rating">
          Rating: <span className="text-primary">{rating}</span>
        </Label>
        <Input
          type="range"
          className="custom-range"
          min="1"
          max="10"
          step="1"
          value={rating}
          onChange={handleRatingChange}
        />
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
        <Button type="submit" color="dark" block>
          Submit Review
        </Button>
      </FormGroup>
    </Form>
  );
};
