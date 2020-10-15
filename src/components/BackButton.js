import React from "react";
import { NavLink } from "react-router-dom";

import { IconStore } from "./IconStore";

export const BackButton = ({ to, className, children }) => {
  const _to = to ? to : "#";
  const _className = className ? className : "";

  return (
    <NavLink to={_to} target="_blank" className={`btn my-3 ${_className}`}>
      {IconStore("faCheck")} {children}
    </NavLink>
  );
};
