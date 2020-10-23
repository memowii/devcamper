import React from "react";
import { Badge } from "reactstrap";
import classnames from "classnames";

import { isFloat } from "../../common/utils";

export const RatingBadge = ({ children: rating, className, rounded }) => {
  const ratingBadgeClass = classnames({
    [className]: className,
    "rounded-circle": rounded,
  });
  const _rating = parseRating(rating);
  let color, ratingValue;

  color = getRatingColor(_rating);
  ratingValue = !_rating ? "N/A" : _rating;

  return (
    <Badge className={ratingBadgeClass} color={color}>
      {ratingValue}
    </Badge>
  );
};

const parseRating = (rating) => {
  if (!rating) return null;

  if (isFloat(rating)) {
    return parseFloat(rating, 10).toFixed(1);
  } else {
    return parseInt(rating, 10);
  }
};

const getRatingColor = (rating) => {
  if (!rating) {
    return "dark";
  } else if (rating <= 5) {
    return "danger";
  } else if (rating > 5 && rating < 8) {
    return "warning";
  } else {
    return "success";
  }
};
