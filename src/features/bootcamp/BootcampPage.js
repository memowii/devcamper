import React, { useState, useEffect, useCallback } from "react";
import { Col } from "reactstrap";
import useFetch from "use-http";

import { InnerLayout } from "../../common/components/InnerLayout";
import { Spinner } from "../../common/components/Spinner";
import { Fatal } from "../../common/components/Fatal";
import { BootcampLeftSide } from "./BootcampLeftSide";
import { BootcampRightSide } from "./BootcampRightSide";

import { BASE_API_URL } from "../../common/costants";

export const BootcampPage = ({ match }) => {
  const { bootcampId } = match.params;
  const [bootcamp, setBootcamp] = useState({});
  const { response, get, loading, error } = useFetch(BASE_API_URL);

  const fetchBootcampData = useCallback(async () => {
    const [fetchedBootcamp, fetchedCourses] = await Promise.all([
      get(`/bootcamps/${bootcampId}`),
      get(`/bootcamps/${bootcampId}/courses`),
    ]);
    fetchedBootcamp.data.courses = fetchedCourses.data;
    
    if (response.ok) setBootcamp(fetchedBootcamp.data);
  }, [response, get, bootcampId]);

  useEffect(() => {
    fetchBootcampData();
  }, [fetchBootcampData]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Fatal
        message="Bootcamp information not available."
        className="w-100 py-4"
      />
    );
  }

  return (
    <InnerLayout>
      <Col md="8">
        <BootcampLeftSide {...bootcamp} />
      </Col>

      <Col md="4">
        <BootcampRightSide {...bootcamp} />
      </Col>
    </InnerLayout>
  );
};
