import React from "react";
import { Label, Input, Form, FormGroup, FormFeedback } from "reactstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BackButton } from "../../common/components/BackButton";
import { schemaResolver, defaultValues } from "./addCourseFormConfs";

export const AddCoursePage = () => {
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

  const handleSubmitCourse = (data) => console.log(data);

  return (
    <InnerLayoutWithCard>
      <BackButton to="/manage-courses" className="btn-link text-secondary">
        Manage Courses
      </BackButton>

      <h1 className="mb-2">DevWorks Bootcamp</h1>

      <h3 className="text-primary mb-4">Add Course</h3>

      <Form onSubmit={handleSubmit(handleSubmitCourse)}>
        <FormGroup>
          <Label>Course Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            innerRef={register}
            invalid={errors.title ? true : false}
          />
          <FormFeedback>{errors.title?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Duration</Label>
          <Input
            type="number"
            name="weeks"
            placeholder="Duration"
            innerRef={register}
            invalid={errors.weeks ? true : false}
          />
          <FormFeedback>{errors.weeks?.message}</FormFeedback>
          <small className="form-text text-muted">
            Enter number of weeks course lasts
          </small>
        </FormGroup>

        <FormGroup>
          <Label>Course Tuition</Label>
          <Input
            type="number"
            name="tuition"
            placeholder="Tuition"
            innerRef={register}
            invalid={errors.tuition ? true : false}
          />
          <FormFeedback>{errors.tuition?.message}</FormFeedback>
          <small className="form-text text-muted">USD Currency</small>
        </FormGroup>

        <FormGroup>
          <Label>Minimum Skill Required</Label>
          <Input
            type="select"
            name="minimumSkill"
            innerRef={register}
            invalid={errors.minimumSkill ? true : false}
          >
            <option value="beginner">Beginner (Any)</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Input>
          <FormFeedback>{errors.minimumSkill?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Input
            type="textarea"
            name="description"
            rows="5"
            placeholder="Course description summary"
            maxLength="500"
            innerRef={register}
            invalid={errors.description ? true : false}
          />
          <FormFeedback>{errors.description?.message}</FormFeedback>
          <small className="form-text text-muted">
            No more than 500 characters
          </small>
        </FormGroup>

        <FormGroup check>
          <Label check for="scholarshipAvailable">
            <Input
              type="checkbox"
              name="scholarshipAvailable"
              innerRef={register}
            />{" "}
            Scholarship Available
          </Label>
        </FormGroup>

        <FormGroup className="mt-4">
          <Input
            type="submit"
            value="Add Course"
            className="btn btn-dark btn-block"
          />
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
