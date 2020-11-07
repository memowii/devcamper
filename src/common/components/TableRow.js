import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import { IconStore } from "./IconStore";

export const TableRow = ({ name, rating, to, toggleModal }) => {
  return (
    <tr>
      <td>{name}</td>
      {rating && <td>{rating}</td>}
      <td>
        <Link to={to} className="btn btn-secondary mr-1">
          {IconStore("faPencilAlt")}
        </Link>
        <Button color="danger" onClick={toggleModal}>
          {IconStore("faTimes")}
        </Button>
      </td>
    </tr>
  );
};
