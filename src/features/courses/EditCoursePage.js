import React, { useCallback, useEffect } from "react";
import { Label, Input, Form, FormGroup, FormFeedback } from "reactstrap";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BackButton } from "../../common/components/BackButton";
import { schemaResolver, defaultValues } from "./addCourseFormConfs";
import { getLoggedInUserData } from "../../common/utils";
import { BASE_API_URL } from "../../common/costants";
import { LoadingButton } from "../../common/components/LoadingButton";

export const EditCoursePage = ({ match }) => {
  const { token } = getLoggedInUserData();
  const { courseId } = match.params;
  const { handleSubmit, register, errors, reset } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { get, put, response, loading } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const history = useHistory();

  const fetchCourse = useCallback(async () => {
    const fetchedCourse = await get(`/courses/${courseId}`);

    if (response.ok) {
      reset(fetchedCourse.data);
    }
  }, [get, courseId, response]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  const handleSubmitCourse = async (courseData) => {
    await put(`/courses/${courseId}`, courseData);

    if (response.ok) {
      toast("Your course has been updated.", {
        autoClose: 3000,
        pauseOnHover: false,
        closeButton: false,
        toastId: "toastId-1",
        type: toast.TYPE.SUCCESS,
        onClose: () => {
          toast.dismiss();
          history.push("/manage-courses");
          history.go(0);
        },
      });
    } else {
      toast(
        "An error occurred while updating your course. Please try again later.",
        {
          autoClose: 4250,
          pauseOnHover: false,
          closeButton: false,
          toastId: "toastId-1",
          type: toast.TYPE.ERROR,
          onClose: () => {
            toast.dismiss();
            history.push("/manage-courses");
            history.go(0);
          },
        }
      );
    }
  };

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
          <LoadingButton
            text="Update Course"
            color="dark"
            loading={loading}
            loadingText="Updating course..."
          />
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
