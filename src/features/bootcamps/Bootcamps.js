import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { BootcampCard } from "./BootcampCard";
import { Sidebar } from "./Sidebar";
import { Spinner } from "../../common/components/Spinner";
import { Fatal } from "../../common/components/Fatal";

import image1 from "../../assets/images/image_1.jpg";

export const Bootcamps = (props) => {
  const { fetchAll } = props;

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const putBootcamps = () => {
    if (props.loading) {
      return <Spinner />;
    }

    if (props.error) {
      return <Fatal message={props.error} />;
    }

    return props.bootcamps.map((bootcamp) => (
      <React.Fragment key={bootcamp.id}>
        <BootcampCard
          id={bootcamp.id}
          photo={image1}
          name={bootcamp.name}
          averageRating={bootcamp.averageRating}
          place={`${bootcamp.location.city}, ${bootcamp.location.state}`}
          careers={bootcamp.careers.join(", ")}
        />
      </React.Fragment>
    ));
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
