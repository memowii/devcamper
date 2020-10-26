import React from "react";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { IconStore } from "../../common/components/IconStore";
import { RegisterUserForm } from "./RegisterUserForm";

export const RegisterUserPage = () => (
  <InnerLayoutWithCard colMd="6" cardClass="p-4 mb-4">
    <h1>{IconStore("faUserPlus")} Register</h1>

    <p>
      Register to list your bootcamp or rate, review and favorite bootcamps.
    </p>

    <RegisterUserForm />
  </InnerLayoutWithCard>
);
