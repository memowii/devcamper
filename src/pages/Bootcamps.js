import React from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";
import { BootcampCard } from "../components/BootcampCard";
import { Sidebar } from "../components/Sidebar";

import image1 from "../assets/images/image_1.jpg";
import image2 from "../assets/images/image_2.jpg";
import image3 from "../assets/images/image_3.jpg";
import image4 from "../assets/images/image_4.jpg";

export const Bootcamps = () => {
  usePageWithoutFixedTop();
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Col md="4">
            <Sidebar />
          </Col>

          <Col md="8">
            <BootcampCard
              img={image1}
              title="Devworks Bootcamp"
              rating="8.8"
              place="Boston, MA"
              courses="Web Development, UI/UX, Mobile Development"
            />

            <BootcampCard
              img={image2}
              title="ModernTech Bootcamp"
              rating="7.5"
              place="Boston, MA"
              courses="Web Development, UI/UX, Mobile Development"
            />

            <BootcampCard
              img={image3}
              title="Codemasters"
              rating="9.2"
              place="Burlington, VT"
              courses="Web Development, Data Science, Marketing"
            />

            <BootcampCard
              img={image4}
              title="DevCentral Bootcamp"
              rating="6.4"
              place="Kingston, RI"
              courses="Web Development, UI/UX, Mobile Development, Marketing"
            />

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
