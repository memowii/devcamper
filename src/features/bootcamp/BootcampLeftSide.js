import React, { Fragment } from "react";
import { Alert } from "reactstrap";

import { CourseCard } from "./CourseCard";
import { formatCost } from "../../common/utils";

export const BootcampLeftSide = ({
  name,
  description,
  averageCost,
  courses = [],
}) => {
  const putCourses = () => {
    if (courses.length === 0) {
      return (
        <Alert color="warning">
          There are no courses available for this bootcamp.
        </Alert>
      );
    }

    return courses.map((course) => (
      <Fragment key={course._id}>
        <CourseCard {...course} />
      </Fragment>
    ));
  };

  return (
    <>
      <h1>{name}</h1>

      <p>{description}</p>

      <p className="lead mb-4">
        Average Course Cost:{" "}
        <span className="text-primary">
          {formatCost(averageCost) ? formatCost(averageCost) : "N/A"}
        </span>
      </p>

      {putCourses()}
    </>
  );
};
