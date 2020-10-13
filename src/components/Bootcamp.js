import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem, Col } from "reactstrap";

import { CourseCard } from "../components/CourseCard";
import { IconStore } from "../components/IconStore";
import { formatCost } from "../utils/formatCost";
import { RatingBadge } from "./RatingBadge";
import { AcceptedSymbol } from "./AcceptedSymbol";

import img1 from "../assets/images/image_1.jpg";

export const Bootcamp = ({
  name,
  description,
  averageCost,
  averageRating,
  courses = [],
  housing,
  jobAssistance,
  jobGuarantee,
  acceptGi,
}) => {
  return (
    <>
      <Col md="8">
        <h1>{name}</h1>

        <p>{description}</p>

        <p className="lead mb-4">
          Average Course Cost:{" "}
          <span className="text-primary">{formatCost(averageCost)}</span>
        </p>

        {courses.length > 0 &&
          courses.map((course) => (
            <React.Fragment key={course._id}>
              <CourseCard {...course} />
            </React.Fragment>
          ))}
      </Col>

      <Col md="4">
        <img src={img1} className="img-thumbnail" alt={name} />

        <h1 className="text-center my-4">
          <RatingBadge className="p-3" rounded>
            {averageRating}
          </RatingBadge>{" "}
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
            <AcceptedSymbol accepted={housing} /> Housing
          </ListGroupItem>
          <ListGroupItem>
            <AcceptedSymbol accepted={jobAssistance} /> Job Assistance
          </ListGroupItem>
          <ListGroupItem>
            <AcceptedSymbol accepted={jobGuarantee} /> Job Guarantee
          </ListGroupItem>
          <ListGroupItem>
            <AcceptedSymbol accepted={acceptGi} /> Accepts GI Bill
          </ListGroupItem>
        </ListGroup>
      </Col>
    </>
  );
};
