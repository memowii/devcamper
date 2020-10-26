import React from "react";
import { Alert } from "reactstrap";

import { InnerLayout } from "../../common/components/InnerLayout";

export const UnauthorizedUser = ({
  location: {
    state: { role },
  },
}) => {
  return (
    <InnerLayout>
      <Alert color="danger" className="w-100">
        <h3 className="text-center">
          <b>{role === "user" ? "Users" : "Publishers"}</b> do not have access
          to this webpage.
        </h3>
      </Alert>
    </InnerLayout>
  );
};
