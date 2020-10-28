import React from "react";
import { Link } from "react-router-dom";
import { IconStore } from "./IconStore";

export const TableRow = ({ _id, bootcamp, rating }) => {
  return (
    <tr>
      <td>{bootcamp.name}</td>
      <td>{rating}</td>
      <td>
        <Link
          to={`/bootcamp/${_id}/add-review`}
          className="btn btn-secondary mr-1"
        >
          {IconStore("faPencilAlt")}
        </Link>
        <button className="btn btn-danger">{IconStore("faTimes")}</button>
      </td>
    </tr>
  );
};
