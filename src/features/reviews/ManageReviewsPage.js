import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Spinner, Table } from "reactstrap";
import useFetch from "use-http";

import { TableRow } from "../../common/components/TableRow";
import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BASE_API_URL } from "../../common/costants";
import { getLoggedInUserData } from "../../common/utils";
import { Fatal } from "../../common/components/Fatal";

export const ManageReviewsPage = () => {
  const { id: userId } = getLoggedInUserData();
  const { get, response, loading, error } = useFetch(BASE_API_URL);
  const [reviews, setReviews] = useState([]);

  const fetchReviewsForUserData = useCallback(async () => {
    const fetchedReviews = await get(`/reviews?user=${userId}`);

    if (response.ok) setReviews(fetchedReviews.data);
  }, [get, response]);

  useEffect(() => {
    fetchReviewsForUserData();
  }, [fetchReviewsForUserData]);

  if (loading) return <Spinner />;

  if (error)
    return (
      <Fatal message="An error ocurred while fetching your reviews. Please try again later." />
    );

  return (
    <InnerLayoutWithCard>
      <h1 className="mb-4">Manage Reviews</h1>

      {reviews.length > 0 ? (
        <Table striped>
          <thead>
            <tr>
              <th scope="col">Bootcamp</th>
              <th scope="col">Rating</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <Fragment key={review._id}>
                <TableRow {...review} />
              </Fragment>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>no reviews</p>
      )}
    </InnerLayoutWithCard>
  );
};
// 1 case where there are no reviews (show message)
// 2 delete a review
