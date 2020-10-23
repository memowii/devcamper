import React from "react";
import { NavLink } from "react-router-dom";
import { IconStore } from "./IconStore";

export const TableRow = ({ tdsContent }) => {
  return (
    <tr>
      {tdsContent.map((tdContent, idx) => (
        <td key={idx}>{tdContent}</td>
      ))}
      <td>
        <NavLink to="/add-course" className="btn btn-secondary mr-1">
          {IconStore("faPencilAlt")}
        </NavLink>
        <button className="btn btn-danger">{IconStore("faTimes")}</button>
      </td>
    </tr>
  );
};
