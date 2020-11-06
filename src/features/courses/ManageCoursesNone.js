import React from "react";
import { NavLink } from "react-router-dom";

import { InnerLayoutWithCard } from "../components/InnerLayoutWithCard";

export const ManageCoursesNone = () => {
  return (
    <InnerLayoutWithCard>
      <h1 className="mb-2">Manage Courses</h1>

      <p className="lead">You have not yet added any courses</p>

      <NavLink to="/add-course" className="btn btn-primary btn-block">
        Add Your first course
      </NavLink>
    </InnerLayoutWithCard>
  );
};
