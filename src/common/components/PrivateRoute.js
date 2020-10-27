import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { getLoggedInUserData } from "../utils";
import { selectUserToken } from "../../features/user/userSlice";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { allowedUserRole } = rest;
  const token = useSelector(selectUserToken);
  const userData = getLoggedInUserData(token);
  let FinalComp;

  if (!allowedUserRole) {
    FinalComp = (props) =>
      userData ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      );
  } else if (allowedUserRole !== userData.role) {
    FinalComp = () => (
      <Redirect
        to={{
          pathname: "/unauthorized",
          state: { role: userData.role },
        }}
      />
    );
  } else {
    FinalComp = (props) => <Component {...props} />;
  }

  return <Route {...rest} render={(props) => <FinalComp {...props} />} />;
};
