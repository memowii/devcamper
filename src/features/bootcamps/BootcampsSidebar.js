import React from "react";
import { Card } from "reactstrap";
import { BootcampFiltersForm } from "./BootcampFiltersForm";
import { BootcampFilterByLocationForm } from "./BootcampFilterByLocationForm";

export const BootcampsSidebar = ({ onFilterBootcamps }) => {
  return (
    <>
      <Card body className="mb-4">
        <h4 className="mb-3">By Location</h4>
        <BootcampFilterByLocationForm />
      </Card>

      <h4>Filter</h4>
      <BootcampFiltersForm onFilterBootcamps={onFilterBootcamps} />
    </>
  );
};
