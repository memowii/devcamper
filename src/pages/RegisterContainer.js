import React from "react";
import { connect } from "react-redux";

import { InnerLayoutWithCard } from "../components/InnerLayoutWithCard";
import * as authActions from "../actions/authActions";
import { Register } from "../components/Register";

const _RegisterContainer = (props) => {
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

const mapStateToProps = (reducers) => {
  return reducers.authReducer;
};

export const RegisterContainer = connect(
  mapStateToProps,
  authActions
)(_RegisterContainer);
