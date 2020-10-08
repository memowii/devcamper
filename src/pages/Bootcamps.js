import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { connect } from "react-redux";

import { BootcampCard } from "../components/BootcampCard";
import { Sidebar } from "../components/Sidebar";
import * as bootcampsActions from "../actions/bootcampsActions";

import image1 from "../assets/images/image_1.jpg";

const _Bootcamps = (props) => {
  const { fetchAll } = props;

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const putContent = () => {
    if (props.loading) {
      return <p>Loading...</p>;
    }

    if (props.error) {
      return <p>Error</p>;
    }

    return props.bootcamps.map((bootcamp) => (
      <React.Fragment key={bootcamp.id}>
        <BootcampCard
          photo={image1}
          name={bootcamp.name}
          averageRating={10}
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
            {putContent()}

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

const mapStateToProps = (reducers) => {
  return reducers.bootcampsReducer;
};

export const Bootcamps = connect(mapStateToProps, bootcampsActions)(_Bootcamps);
