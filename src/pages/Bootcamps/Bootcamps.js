import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { usePageWithoutFixedTop } from "../../hooks/usePageWithoutFixedTop";
import { BootcampCard } from "../../components/BootcampCard";

import image1 from "../../assets/images/image_1.jpg";
import image2 from "../../assets/images/image_2.jpg";
import image3 from "../../assets/images/image_3.jpg";
import image4 from "../../assets/images/image_4.jpg";

export const Bootcamps = () => {
  usePageWithoutFixedTop();
  return (
    <section className="my-5">
      <Container>
        <Row>
          {/* SIDEBAR */}
          <Col md="4">
            <Card body className="mb-4">
              <h4 className="mb-3">By Location</h4>
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Input
                        type="text"
                        name="miles"
                        placeholder="Miles From"
                      />
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup>
                      <Input
                        type="text"
                        name="zipcode"
                        placeholder="Enter Zipcode"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Input
                  type="submit"
                  value="Find Bootcamps"
                  className="btn btn-primary btn-block"
                />
              </Form>
            </Card>

            <h4>Filter</h4>
            <Form>
              <FormGroup>
                <Label> Rating</Label>
                <Input type="select" className="custom-select mb-2">
                  <option value="any">Any</option>
                  <option value="9">9+</option>
                  <option value="8">8+</option>
                  <option value="7">7+</option>
                  <option value="6">6+</option>
                  <option value="5">5+</option>
                  <option value="4">4+</option>
                  <option value="3">3+</option>
                  <option value="2">2+</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label> Budget</Label>
                <Input type="select" className="custom-select mb-2">
                  <option value="any">Any</option>
                  <option value="20000">$20,000</option>
                  <option value="15000">$15,000</option>
                  <option value="10000">$10,000</option>
                  <option value="8000">$8,000</option>
                  <option value="6000">$6,000</option>
                  <option value="4000">$4,000</option>
                  <option value="2000">$2,000</option>
                </Input>
              </FormGroup>

              <Input
                type="submit"
                value="Find Bootcamps"
                className="btn btn-primary btn-block"
              />
            </Form>
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
