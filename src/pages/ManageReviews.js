import React from "react";
import { Table } from "reactstrap";

import { usePageWithoutFixedTop } from "../hooks/usePageWithoutFixedTop";
import { TableRow } from "../components/TableRow";
import { InnerLayoutWithCard } from "../components/InnerLayoutWithCard";

export const ManageReviews = () => {
  usePageWithoutFixedTop();
  return (
    <InnerLayoutWithCard>
      <h1 className="mb-4">Manage Reviews</h1>

      <Table striped>
        <thead>
          <tr>
            <th scope="col">Bootcamp</th>
            <th scope="col">Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <TableRow tdsContent={["DevWorks Bootcamp", "10"]} />
          <TableRow tdsContent={["Codemasters", "7"]} />
        </tbody>
      </Table>
    </InnerLayoutWithCard>
  );
};
