import React from "react";
import classnames from "classnames";

export const Fatal = ({ message, className }) => {
  const fatalClass = classnames("alert alert-primary my-5", {
    [className]: className,
  });

  return (
    <div className={fatalClass}>
      <h6 className="text-center">{message}</h6>
    </div>
  );
};
