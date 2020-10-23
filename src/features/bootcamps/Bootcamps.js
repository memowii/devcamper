import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import useFetch from "use-http";

import { BootcampList } from "./BootcampList";
import { Sidebar } from "./Sidebar";
import { Spinner } from "../../common/components/Spinner";
import { Fatal } from "../../common/components/Fatal";

import { BASE_API_URL } from "../../common/costants";

export const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const { response, get, loading, error } = useFetch(BASE_API_URL);

  const fetchBootcamps = useCallback(async () => {
    const fetchedBootcamps = await get("/bootcamps");
    if (response.ok) setBootcamps(fetchedBootcamps.data);
  }, [response, get]);

  useEffect(() => {
    fetchBootcamps();
  }, [fetchBootcamps]);

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
            <Sidebar />
          </Col>

          <Col md="8">
            {putBootcamps()}

            <Pagination>
              <PaginationItem>
                <PaginationLink>Previous</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>Next</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
