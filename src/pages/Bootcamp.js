import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPencilAlt,
  faGlobe,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/images/image_1.jpg";
import { CourseCard } from "../components/CourseCard";
import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";

export const Bootcamp = () => {
  usePageWithoutFixedTop();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <Col md="8">
            <h1>DevWorks Bootcamp</h1>

            <p>
              Devworks is a full stack JavaScript Bootcamp located in the heart
              of Boston that focuses on the technologies you need to get a high
              paying job as a web developer
            </p>

            <p className="lead mb-4">
              Average Course Cost: <span className="text-primary">$10,000</span>
            </p>

            <CourseCard
              title="Front End Web Development"
              duration="Duration: 8 Weeks"
              description="This course will provide you with all of the essentials to
                  become a successful frontend web developer. You will learn to
                  master HTML, CSS and front end JavaScript, along with tools
                  like Git, VSCode and front end frameworks like Vue"
              cost="Cost: $8,000 USD"
              skill="Skill Required: Beginner"
              scholarship={true}
            />

            <CourseCard
              title="Full Stack Web Development"
              duration="Duration: 12 Weeks"
              description="In this course you will learn full stack web development, 
                  first learning all about the frontend with HTML/CSS/JS/Vue and then 
                  the backend with Node.js/Express/MongoDB"
              cost="Cost: $10,000 USD"
              skill="Skill Required: Intermediate"
              scholarship={false}
            />
          </Col>

          <Col md="4">
            <img src={img1} className="img-thumbnail" alt="" />

            <h1 className="text-center my-4">
              <Badge color="success" className="rounded-circle p-3">
                8.8
              </Badge>{" "}
              Rating
            </h1>

            <NavLink to="/reviews" className="btn btn-dark btn-block my-3">
              <FontAwesomeIcon icon={faComments} /> Read Reviews
            </NavLink>
            <NavLink to="/reviews" className="btn btn-light btn-block my-3">
              <FontAwesomeIcon icon={faPencilAlt} /> Write a Review
            </NavLink>
            <NavLink
              to="/"
              target="_blank"
              className="btn btn-secondary btn-block my-3"
            >
              <FontAwesomeIcon icon={faGlobe} /> Visit Website
            </NavLink>

            <div id="map" style={{ width: "100%", height: "300px" }}>
              A map should be here.
            </div>

            <ListGroup flush className="mt-4">
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="text-success" />{" "}
                Housing
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="text-danger" /> Job
                Assistance
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faTimes} className="text-danger" /> Job
                Guarantee
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="text-danger" />{" "}
                Accepts GI Bill
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
