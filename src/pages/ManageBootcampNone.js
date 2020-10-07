import React from "react";
import { NavLink } from "react-router-dom";

import { InnerLayoutWithCard } from "../components/InnerLayoutWithCard";

export const ManageBootcampNone = () => {
  return (
    <InnerLayoutWithCard>
      <h1 className="mb-2">Manage Bootcamp</h1>

      <p className="lead">You have not yet added a bootcamp</p>

      <NavLink to="/add-bootcamp" className="btn btn-primary btn-block">
        Add Bootcamp
      </NavLink>

      <p className="text-muted mt-5">
        * You can only add one bootcamp per account.
      </p>

      <p className="text-muted">
        * You must be affiliated with the bootcamp in some way in order to add
        it to DevCamper.
      </p>
    </InnerLayoutWithCard>
  );
};
