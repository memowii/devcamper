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
  CardBody,
} from "reactstrap";

import { usePageWithoutFixedTop } from "../../hooks/usePageWithoutFixedTop";

export const Bootcamps = () => {
  usePageWithoutFixedTop();
  return (
    <section className="my-5">
      <Container>
        <Row>
          {/* SIDEBAR */}
          <Col md="4">
            <Card body className="mb-4">
              <h4 class="mb-3">By Location</h4>
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
                  class="btn btn-primary btn-block"
                />
              </Form>
            </Card>

            <h4>Filter</h4>
            <Form>
              <FormGroup>
                <Label> Rating</Label>
                <Input type="select" className="custom-select mb-2">
                  <option value="any" selected>
                    Any
                  </option>
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
                  <option value="any" selected>
                    Any
                  </option>
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
                class="btn btn-primary btn-block"
              />
            </Form>
          </Col>

          <Col md="8"></Col>
        </Row>
      </Container>
    </section>
  );
};

<section class="my-5">
  <div class="container">
    <div class="row">
      {/* <!-- Sidebar --> */}
      <div class="col-md-4">
        <div class="card card-body mb-4">
          <h4 class="mb-3">By Location</h4>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="miles"
                    placeholder="Miles From"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="zipcode"
                    placeholder="Enter Zipcode"
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Find Bootcamps"
              class="btn btn-primary btn-block"
            />
          </form>
        </div>

        <h4>Filter</h4>
        <form>
          <div class="form-group">
            <label> Rating</label>
            <select class="custom-select mb-2">
              <option value="any" selected>
                Any
              </option>
              <option value="9">9+</option>
              <option value="8">8+</option>
              <option value="7">7+</option>
              <option value="6">6+</option>
              <option value="5">5+</option>
              <option value="4">4+</option>
              <option value="3">3+</option>
              <option value="2">2+</option>
            </select>
          </div>

          <div class="form-group">
            <label> Budget</label>
            <select class="custom-select mb-2">
              <option value="any" selected>
                Any
              </option>
              <option value="20000">$20,000</option>
              <option value="15000">$15,000</option>
              <option value="10000">$10,000</option>
              <option value="8000">$8,000</option>
              <option value="6000">$6,000</option>
              <option value="4000">$4,000</option>
              <option value="2000">$2,000</option>
            </select>
          </div>
          <input
            type="submit"
            value="Find Bootcamps"
            class="btn btn-primary btn-block"
          />
        </form>
      </div>
      {/* <!-- Main col --> */}
      <div class="col-md-8">
        {/* <!-- Bootcamps --> */}
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="img/image_1.jpg" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="bootcamp.html">
                    Devworks Bootcamp
                    <span class="float-right badge badge-success">8.8</span>
                  </a>
                </h5>
                <span class="badge badge-dark mb-2">Boston, MA</span>
                <p class="card-text">
                  Web Development, UI/UX, Mobile Development
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="img/image_2.jpg" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="bootcamp.html">
                    ModernTech Bootcamp
                    <span class="float-right badge badge-success">7.5</span>
                  </a>
                </h5>
                <span class="badge badge-dark mb-2">Boston, MA</span>
                <p class="card-text">
                  Web Development, UI/UX, Mobile Development
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="img/image_3.jpg" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="bootcamp.html">
                    Codemasters
                    <span class="float-right badge badge-success">9.2</span>
                  </a>
                </h5>
                <span class="badge badge-dark mb-2">Burlington, VT</span>
                <p class="card-text">
                  Web Development, Data Science, Marketing
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="img/image_4.jpg" class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="bootcamp.html">
                    DevCentral Bootcamp
                    <span class="float-right badge badge-success">6.4</span>
                  </a>
                </h5>
                <span class="badge badge-dark mb-2">Kingston, RI</span>
                <p class="card-text">
                  Web Development, UI/UX, Mobile Development, Marketing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pagination --> */}
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>
