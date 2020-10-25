import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("ent 1");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        // fakeAuth.isAuthenticated ? (
        false ? (
          Component
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
