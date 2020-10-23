import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export const BootcampsPagination = () => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink>Previous</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>Next</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};
