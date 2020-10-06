import React from "react";
import { Label, Input, Form, FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { InnerLayoutWithCard } from "../components/InnerLayoutWithCard";
import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const AddCourse = () => {
  usePageWithoutFixedTop();

  return (
    <InnerLayoutWithCard>
      <NavLink
        to="/bootcamp"
        target="_blank"
        className="btn btn-link text-secondary my-3"
      >
        <FontAwesomeIcon icon={faChevronLeft} /> Manage Courses
      </NavLink>

      <h1 className="mb-2">DevWorks Bootcamp</h1>

      <h3 className="text-primary mb-4">Add Course</h3>

      <Form>
        <FormGroup>
          <Label>Course Title</Label>
          <Input type="text" name="title" placeholder="Title" />
        </FormGroup>

        <FormGroup>
          <Label>Duration</Label>
          <Input type="number" name="duration" placeholder="Duration" />
          <small className="form-text text-muted">
            Enter number of weeks course lasts
          </small>
        </FormGroup>

        <FormGroup>
          <Label>Course Tuition</Label>
          <Input type="number" name="tuition" placeholder="Tuition" />
          <small className="form-text text-muted">USD Currency</small>
        </FormGroup>

        <FormGroup>
          <Label>Minimum Skill Required</Label>
          <Input type="select" name="minimumSkill" defaultValue={"beginner"}>
            <option value="beginner">Beginner (Any)</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Input
            type="textarea"
            name="description"
            rows="5"
            placeholder="Course description summary"
            maxLength="500"
          />
          <small className="form-text text-muted">
            No more than 500 characters
          </small>
        </FormGroup>

        <FormGroup check>
          <Label check for="scholarshipAvailable">
            <Input type="checkbox" name="scholarshipAvailable" /> Scholarship
            Available
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
