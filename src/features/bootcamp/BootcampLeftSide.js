import React from "react";

import { formatCost } from "../../common/utils";

export const BootcampLeftSide = ({
  name,
  description,
  averageCost,
  courses = [],
}) => {
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

      {/* Don't forget the courses */}
      {/* {putCourses()} */}
    </>
  );
};
