import React from "react";
import { Col, Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import { ReviewCard } from "../components/ReviewCard";
import { InnerLayout } from "../components/InnerLayout";

export const Reviews = () => {
  return (
    <InnerLayout>
      <Col md="8">
        <NavLink
          to="/bootcamp"
          target="_blank"
          className="btn btn-secondary my-3"
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Bootcamp Info
        </NavLink>

        <h1 className="mb-4">DevWorks Bootcamp Reviews</h1>

        <ReviewCard
          title="Fantastic Bootcamp"
          rating="10"
          review="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi similique mollitia, praesentium, animi harum officia
                      dolores corporis ex tempore consequuntur dolorem ullam dolorum
                      magnam corrupti quaerat tempora repudiandae! Similique,
                      molestiae. Iste, blanditiis recusandae unde tenetur eius
                      exercitationem rerum a fuga."
          author="Kevin Smith"
        />

        <ReviewCard
          title="Learned a Lot"
          rating="9"
          review="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi similique mollitia, praesentium, animi harum officia
                      dolores corporis ex tempore consequuntur dolorem ullam dolorum
                      magnam corrupti quaerat tempora repudiandae! Similique,
                      molestiae. Iste, blanditiis recusandae unde tenetur eius
                      exercitationem rerum a fuga."
          author="Jill Samson"
        />
      </Col>

      <Col md="4">
        <h1 className="text-center my-4">
          <Badge color="success" className="rounded-circle p-3">
            8.8
          </Badge>{" "}
          Rating
        </h1>

        <NavLink to="/add-review" className="btn btn-primary btn-block my-3">
          <FontAwesomeIcon icon={faPencilAlt} /> Review This Bootcamp
        </NavLink>
      </Col>
    </InnerLayout>
  );
};
