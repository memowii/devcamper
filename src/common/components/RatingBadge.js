import React from "react";
import { Badge } from "reactstrap";

import { isFloat } from "../../common/utils";

export const RatingBadge = ({ children: rating, className, rounded }) => {
  const _className = className ? className : "";
  const _rounded = rounded ? "rounded-circle" : "";
  const _rating = parseRating(rating);
  let color, ratingValue;

  if (!_rating) {
    color = "dark";
  } else if (_rating <= 5) {
    color = "danger";
  } else if (_rating > 5 && rating < 8) {
    color = "warning";
  } else {
    color = "success";
  }

  ratingValue = !_rating ? "N/A" : _rating;

  return (
    <Badge className={`${_className} ${_rounded}`} color={color}>
      {ratingValue}
    </Badge>
  );
};

const parseRating = (rating) => {
  if (!rating) return null;

  if (isFloat(rating)) {
    return parseFloat(rating, 10);
  } else {
    return parseInt(rating, 10);
  }
};
