import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

import { RatingBadge } from "../../common/components/RatingBadge";
import { IconStore } from "../../common/components/IconStore";
import { AcceptedSymbol } from "./AcceptedSymbol";

import img1 from "../../assets/images/image_1.jpg";

export const BootcampRightSide = ({ id, name, averageRating, housing, jobAssistance, jobGuarantee, acceptGi }) => {
  return (
    <>
      <img src={img1} className="img-thumbnail" alt={name} />

      <h1 className="text-center my-4">
        <RatingBadge className="p-3" rounded>
          {averageRating}
        </RatingBadge>{" "}
        Rating
      </h1>

      <Link
        to={`/bootcamp/${id}/reviews`}
        className="btn btn-dark btn-block my-3"
      >
        {IconStore("faComments")} Read Reviews
      </Link>
      <Link
        to={`/bootcamp/${id}/add-review`}
        className="btn btn-light btn-block my-3"
      >
        {IconStore("faPencilAlt")} Write a Review
      </Link>
      <Link to="#" target="_blank" className="btn btn-secondary btn-block my-3">
        {IconStore("faGlobe")} Visit Website
      </Link>

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
    </>
  );
};
