import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

export const TableRow = ({ tdsContent }) => {
  return (
    <tr>
      {tdsContent.map((tdContent, idx) => (
        <td key={idx}>{tdContent}</td>
      ))}
      <td>
        <NavLink to="/add-course" className="btn btn-secondary mr-1">
          <FontAwesomeIcon icon={faPencilAlt} />
        </NavLink>
        <button className="btn btn-danger">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </td>
    </tr>
  );
};
