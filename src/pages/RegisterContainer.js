import React from "react";
import { connect } from "react-redux";

import { InnerLayoutWithCard } from "../components/InnerLayoutWithCard";
import * as usersActions from "../actions/usersActions";
import { Register } from "../components/Register";

const _RegisterContainer = () => {
  return (
    <InnerLayoutWithCard colMd="6" cardClass="p-4 mb-4">
      <Register />
    </InnerLayoutWithCard>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export const RegisterContainer = connect(
  mapStateToProps,
  usersActions
)(_RegisterContainer);
