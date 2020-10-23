import React from "react";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { Register } from "./Register";

export const RegisterPage = (props) => {
  const { register, loading, error, successfulRegistration } = props;

  const onSubmit = (data) => register(data);

  return (
    <InnerLayoutWithCard colMd="6" cardClass="p-4 mb-4">
      <Register
        handleUserRegistration={onSubmit}
        loading={loading}
        error={error}
        successfulRegistration={successfulRegistration}
      />
    </InnerLayoutWithCard>
  );
};
