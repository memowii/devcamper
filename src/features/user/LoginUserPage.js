import React from "react";
import { Link } from "react-router-dom";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { IconStore } from "../../common/components/IconStore";
import { LoginUserForm } from "./LoginUserForm";

export const LoginUserPage = () => {
  return (
    <InnerLayoutWithCard colMd="6" cardClass="p-4 mb-4">
      <h1>{IconStore("faSignInAlt")} Login</h1>

      <p>Log in to list your bootcamp or rate, review and favorite bootcamps</p>

      <LoginUserForm />

      <p>
        Forgot Password? <Link to="/reset-password">Reset Password</Link>
      </p>
    </InnerLayoutWithCard>
  );
};
