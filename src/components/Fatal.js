import React from "react";

export const Fatal = ({ message, className }) => {
  const _className = className ? className : "";

  return (
    <div className={`alert alert-primary my-5 ${_className}`}>
      <h6 className="text-center">{message}</h6>
    </div>
  );
};
