import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { InnerLayout } from "../components/InnerLayout";

import { Bootcamp } from "../components/Bootcamp";
import { Spinner } from "../components/Spinner";
import { Fatal } from "../components/Fatal";
import * as bootcampsActions from "../actions/bootcampsActions";

const _BootcampContainer = (props) => {
  const { id } = useParams();
  const { fetchOne, bootcamp, loading, error } = props;

  useEffect(() => {
    fetchOne(id);
  }, [fetchOne, id]);

  const putBootcamp = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />;
    }

    return <Bootcamp {...bootcamp} />;
  };

  return <InnerLayout>{putBootcamp()}</InnerLayout>;
};

const mapStateToProps = (reducers) => {
  return reducers.bootcampsReducer;
};

export const BootcampContainer = connect(
  mapStateToProps,
  bootcampsActions
)(_BootcampContainer);
