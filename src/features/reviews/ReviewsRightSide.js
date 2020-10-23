import React from "react";
import { Link } from "react-router-dom";

import { IconStore } from "../../common/components/IconStore";
import { RatingBadge } from "../../common/components/RatingBadge";

export const ReviewsRightSide = ({ bootcamp = {} }) => {
  return (
    <>
      <h1 className="text-center my-4">
        <RatingBadge className="p-3" rounded>
          {bootcamp.averageRating}
        </RatingBadge>{" "}
        Rating
      </h1>

      <Link
        to={`/bootcamp/${bootcamp.id}/add-review`}
        className="btn btn-primary btn-block my-3"
      >
        {IconStore("faPencilAlt")} Review This Bootcamp
      </Link>
    </>
  );
};
