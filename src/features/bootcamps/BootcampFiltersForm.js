import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { useForm } from "react-hook-form";
import { schemaResolver, defaultValues } from "./BootcampFiltersFormConfs";

export const BootcampFiltersForm = ({ onFilterBootcamps }) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });

  return (
    <Form onSubmit={handleSubmit(onFilterBootcamps)}>
      <FormGroup>
        <Label> Rating</Label>
        <Input
          type="select"
          name="rating"
          className="custom-select mb-2"
          innerRef={register}
          invalid={errors.rating ? true : false}
        >
          <option value="any">Any</option>
          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
          <option value="5">5+</option>
          <option value="4">4+</option>
          <option value="3">3+</option>
          <option value="2">2+</option>
        </Input>
        <FormFeedback>{errors.rating?.message}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label> Budget</Label>
        <Input
          type="select"
          name="budget"
          className="custom-select mb-2"
          innerRef={register}
          invalid={errors.budget ? true : false}
        >
          <option value="any">Any</option>
          <option value="20000">$20,000</option>
          <option value="15000">$15,000</option>
          <option value="10000">$10,000</option>
          <option value="8000">$8,000</option>
          <option value="6000">$6,000</option>
          <option value="4000">$4,000</option>
          <option value="2000">$2,000</option>
        </Input>
        <FormFeedback>{errors.budget?.message}</FormFeedback>
      </FormGroup>

      <Input
        type="submit"
        value="Find Bootcamps"
        className="btn btn-primary btn-block"
      />
    </Form>
  );
};
