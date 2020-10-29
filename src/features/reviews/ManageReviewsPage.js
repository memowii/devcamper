import React, { useState, useEffect, useCallback, Fragment } from "react";
import {
  Spinner,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import useFetch from "use-http";
import { toast } from "react-toastify";

import { TableRow } from "../../common/components/TableRow";
import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";
import { getLoggedInUserData } from "../../common/utils";
import { Fatal } from "../../common/components/Fatal";

export const ManageReviewsPage = () => {
  const { id: userId, token } = getLoggedInUserData();
  const { get, del, response, loading, error } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [reviews, setReviews] = useState([]);
  const [modal, setModal] = useState(false);
  const [reviewId, setReviewId] = useState();
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleModal = (reviewId) => {
    setModal(!modal);
    setReviewId(reviewId);
  };

  const fetchReviewsForUserData = useCallback(async () => {
    const fetchedReviews = await get(`/reviews?user=${userId}`);

    if (response.ok) setReviews(fetchedReviews.data);
  }, [get, response, userId]);

  useEffect(() => {
    fetchReviewsForUserData();
  }, [fetchReviewsForUserData]);

  const deleteReview = async (reviewId) => {
    setIsDeleting(true);
    await del(`/reviews/${reviewId}`);

    if (response.ok) {
      setReviews((reviews) =>
        reviews.filter((review) => review._id !== reviewId)
      );
      toggleModal(null);
    } else {
      toggleModal(null);
      toast.error(
        "An error ocurred while deleting this review. Please try again later.",
        {
          autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false,
          toastId: "toastid",
        }
      );
    }
  };

  const putReviews = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-5 mb-4">
          <Spinner color="primary" />
        </div>
      );
    }

    if (error && !isDeleting) {
      return (
        <Fatal message="An error ocurred while fetching your reviews. Please try again later." />
      );
    }

    if (reviews.length > 0) {
      return (
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
                <TableRow
                  {...review}
                  toggleModal={() => toggleModal(review._id)}
                />
              </Fragment>
            ))}
          </tbody>
        </Table>
      );
    } else {
      return <Fatal message="You have not rated any bootcamp yet." />;
    }
  };

  return (
    <InnerLayoutWithCard>
      <h1 className="mb-4">Manage Reviews</h1>

      {putReviews()}

      <Modal isOpen={modal} toggle={toggleModal} size="sm">
        <ModalHeader toggle={toggleModal}>Delete review</ModalHeader>
        <ModalBody>Are you sure you want to delete this review?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteReview(reviewId)}>
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={() => toggleModal(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </InnerLayoutWithCard>
  );
};
