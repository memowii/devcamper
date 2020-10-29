import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import { IconStore } from "./IconStore";

export const TableRow = ({ _id, bootcamp, rating, toggleModal }) => {
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
        <Button color="danger" onClick={toggleModal}>{IconStore("faTimes")}</Button>
      </td>
    </tr>
  );
};
