import React from "react";
import { Spinner as RSSpiner } from "reactstrap";

export const Spinner = () => {
  return (
    <div className="w-100 d-flex justify-content-center my-5">
      <RSSpiner color="primary" style={{ width: "3rem", height: "3rem" }} />
    </div>
  );
};
