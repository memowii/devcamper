import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BackButton } from "../../common/components/BackButton";

export const AddReviewPage = () => {
  return (
    <InnerLayoutWithCard>
      <BackButton to="/bootcamp" className="btn-link text-secondary">
        Bootcamp Info
      </BackButton>

      <h1 className="mb-2">DevWorks Bootcamp</h1>

      <h3 className="text-primary mb-4">Write a Review</h3>

      <p>You must have attended and graduated this bootcamp to review</p>

      <Form>
        <FormGroup>
          <Label for="rating">
            Rating: <span className="text-primary">8</span>
          </Label>
          <Input
            type="range"
            className="custom-range"
            min="1"
            max="10"
            step="1"
            value="8"
            onChange={() => false}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="title"
            className="form-control"
            placeholder="Review title"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="review"
            rows="10"
            placeholder="Your review"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="submit"
            value="Submit Review"
            className="btn btn-dark btn-block"
          />
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
