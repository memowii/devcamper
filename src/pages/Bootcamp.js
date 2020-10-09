import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem, Col, Badge } from "reactstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import img1 from "../assets/images/image_1.jpg";

import { CourseCard } from "../components/CourseCard";
import { InnerLayout } from "../components/InnerLayout";
import { IconStore } from "../components/IconStore";
import * as bootcampsActions from "../actions/bootcampsActions";

const _Bootcamp = (props) => {
  const { id } = useParams();
  const { fetchOne } = props;

  useEffect(() => {
    fetchOne(id);
  }, [fetchOne, id]);

  return (
    <InnerLayout>
      <Col md="8">
        <h1>DevWorks Bootcamp</h1>

        <p>
          Devworks is a full stack JavaScript Bootcamp located in the heart of
          Boston that focuses on the technologies you need to get a high paying
          job as a web developer
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
          {IconStore("faComments")} Read Reviews
        </NavLink>
        <NavLink to="/reviews" className="btn btn-light btn-block my-3">
          {IconStore("faPencilAlt")} Write a Review
        </NavLink>
        <NavLink
          to="/"
          target="_blank"
          className="btn btn-secondary btn-block my-3"
        >
          {IconStore("faGlobe")} Visit Website
        </NavLink>

        <div id="map" style={{ width: "100%", height: "300px" }}>
          A map should be here.
        </div>

        <ListGroup flush className="mt-4">
          <ListGroupItem>
            {IconStore("faCheck", "text-success")} Housing
          </ListGroupItem>
          <ListGroupItem>
            {IconStore("faCheck", "text-danger")} Job Assistance
          </ListGroupItem>
          <ListGroupItem>
            {IconStore("faTimes", "text-danger")} Job Guarantee
          </ListGroupItem>
          <ListGroupItem>
            {IconStore("faCheck", "text-danger")} Accepts GI Bill
          </ListGroupItem>
        </ListGroup>
      </Col>
    </InnerLayout>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.bootcampsReducer;
};

export const Bootcamp = connect(mapStateToProps, bootcampsActions)(_Bootcamp);
