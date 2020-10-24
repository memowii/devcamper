import React from "react";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { IconStore } from "../../common/components/IconStore";
import { RegisterForm } from "./RegisterForm";

export const RegisterPage = () => (
  <InnerLayoutWithCard colMd="6" cardClass="p-4 mb-4">
    <h1>{IconStore("faUserPlus")} Register</h1>

    <p>
      Register to list your bootcamp or rate, review and favorite bootcamps.
    </p>

    <RegisterForm />
  </InnerLayoutWithCard>
);
