import React from "react";
import { Spinner as RSSpiner } from "reactstrap";

export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <RSSpiner color="primary" style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
};
