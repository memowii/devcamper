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
    FinalComp = ({ location }) =>
      userData ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      );
  } else if (allowedUserRole !== userData.role) {
    console.log('ent 1');
    FinalComp = () => (
      <Redirect
        to={{
          pathname: "/unauthorized",
          state: { role: userData.role },
        }}
      />
    );
  } else {
    FinalComp = () => <Component />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) => (
        <FinalComp
          location={
            (!allowedUserRole && location) ||
            (allowedUserRole !== userData.role && "")
          }
        />
      )}
    />
  );
};
