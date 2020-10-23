import React, { useState, useEffect, useCallback } from "react";
import useFetch from "use-http";

import { InnerLayout } from "../../common/components/InnerLayout";
import { Spinner } from "../../common/components/Spinner";
import { Fatal } from "../../common/components/Fatal";

import { BASE_API_URL } from "../../common/costants";

export const BootcampPage = ({ match }) => {
  const { bootcampId } = match.params;
  const [bootcamp, setBootcamp] = useState({});
  const { response, get, loading, error } = useFetch(BASE_API_URL);

  const fetchBootcampData = useCallback(async () => {
    const fetchedBootcamp = await get(`/bootcamps/${bootcampId + "x"}`);
    if (response.ok) setBootcamp(fetchedBootcamp.data);
  }, [response, get]);

  useEffect(() => {
    fetchBootcampData();
  }, [fetchBootcampData]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Fatal
        message="Bootcamp information not available."
        className="w-100 py-4"
      />
    );
  }

  return <h1>bootcamp</h1>;
  // return (
  //   <InnerLayout>
  //     <Col md="8">
  //       <h1>{name}</h1>

  //       <p>{description}</p>

  //       <p className="lead mb-4">
  //         Average Course Cost:{" "}
  //         <span className="text-primary">
  //           {formatCost(averageCost) ? formatCost(averageCost) : "N/A"}
  //         </span>
  //       </p>

  //       {putCourses()}
  //     </Col>

  //     <Col md="4">
  //       <img src={img1} className="img-thumbnail" alt={name} />

  //       <h1 className="text-center my-4">
  //         <RatingBadge className="p-3" rounded>
  //           {averageRating}
  //         </RatingBadge>{" "}
  //         Rating
  //       </h1>

  //       <NavLink
  //         to={`/bootcamp/${id}/reviews`}
  //         className="btn btn-dark btn-block my-3"
  //       >
  //         {IconStore("faComments")} Read Reviews
  //       </NavLink>
  //       <NavLink
  //         to={`/bootcamp/${id}/add-review`}
  //         className="btn btn-light btn-block my-3"
  //       >
  //         {IconStore("faPencilAlt")} Write a Review
  //       </NavLink>
  //       <NavLink
  //         to="#"
  //         target="_blank"
  //         className="btn btn-secondary btn-block my-3"
  //       >
  //         {IconStore("faGlobe")} Visit Website
  //       </NavLink>

  //       <div id="map" style={{ width: "100%", height: "300px" }}>
  //         A map should be here.
  //       </div>

  //       <ListGroup flush className="mt-4">
  //         <ListGroupItem>
  //           <AcceptedSymbol accepted={housing} /> Housing
  //         </ListGroupItem>
  //         <ListGroupItem>
  //           <AcceptedSymbol accepted={jobAssistance} /> Job Assistance
  //         </ListGroupItem>
  //         <ListGroupItem>
  //           <AcceptedSymbol accepted={jobGuarantee} /> Job Guarantee
  //         </ListGroupItem>
  //         <ListGroupItem>
  //           <AcceptedSymbol accepted={acceptGi} /> Accepts GI Bill
  //         </ListGroupItem>
  //       </ListGroup>
  //     </Col>
  //   </InnerLayout>
  // );
};
