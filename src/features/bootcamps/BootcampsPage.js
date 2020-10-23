import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";
import useFetch from "use-http";

import { BootcampList } from "./BootcampList";
import { BootcampsPagination } from "./BootcampsPagination";
import { BootcampsSidebar } from "./BootcampsSidebar";
import { Spinner } from "../../common/components/Spinner";
import { Fatal } from "../../common/components/Fatal";

import { BASE_API_URL } from "../../common/costants";

export const BootcampsPage = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const { response, get, loading, error } = useFetch(BASE_API_URL);

  const fetchBootcampsData = useCallback(async () => {
    const fetchedBootcamps = await get("/bootcamps");
    if (response.ok) setBootcamps(fetchedBootcamps.data);
  }, [response, get]);

  useEffect(() => {
    fetchBootcampsData();
  }, [fetchBootcampsData]);

  const putBootcamps = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />;
    }

    return <BootcampList bootcamps={bootcamps} />;
  };

  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col md="4">
            <BootcampsSidebar />
          </Col>

          <Col md="8">
            {putBootcamps()}

            <BootcampsPagination />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
