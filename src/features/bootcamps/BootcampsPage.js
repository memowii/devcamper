import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";
import useFetch from "use-http";
import { useLocation, useHistory } from "react-router-dom";

import { BootcampList } from "./BootcampList";
import { BootcampsPagination } from "./BootcampsPagination";
import { BootcampsSidebar } from "./BootcampsSidebar";
import { Spinner } from "../../common/components/Spinner";
import { Fatal } from "../../common/components/Fatal";
import { BASE_API_URL } from "../../common/costants";
import { getQueryString } from "../../common/utils";

export const BootcampsPage = () => {
  const [initialBootcamps, setInitialBootcamps] = useState([]);
  const [bootcamps, setBootcamps] = useState([]);
  const { response, get, loading, error } = useFetch(BASE_API_URL);
  const location = useLocation();
  const history = useHistory();

  const fetchBootcampsData = useCallback(async () => {
    const fetchedBootcamps = await get("/bootcamps");
    if (response.ok) {
      setInitialBootcamps(fetchedBootcamps.data);
      setBootcamps(fetchedBootcamps.data);
    }
  }, [response, get]);

  useEffect(() => {
    fetchBootcampsData();
  }, [fetchBootcampsData]);

  useEffect(() => {
    // console.log("changed");
  }, [location]);

  const putBootcamps = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />;
    }

    return <BootcampList bootcamps={bootcamps} />;
  };

  const handleFilterBootcamps = (filterData) => {
    let { rating, budget } = filterData;
    rating = rating === "any" ? "" : rating;
    budget = budget === "any" ? "" : budget;

    let filteredBootcamps = initialBootcamps.slice();

    if (rating) {
      filteredBootcamps = filteredBootcamps.filter(
        (bootcamp) => bootcamp.averageRating >= rating
      );
    }

    if (budget) {
      const parsedBudget = parseInt(budget, 10);
      filteredBootcamps = filteredBootcamps.filter(
        (bootcamp) => bootcamp.averageCost >= parsedBudget
      );
    }

    setBootcamps(filteredBootcamps);
    history.push(`/bootcamps${getQueryString({ rating, budget })}`);
  };

  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col md="4">
            <BootcampsSidebar onFilterBootcamps={handleFilterBootcamps} />
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
