import React, { useEffect, useCallback, useState } from "react";
import useFetch from "use-http";
import { toast } from "react-toastify";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BackButton } from "../../common/components/BackButton";
import { AddReviewForm } from "./AddReviewForm";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";

export const AddReviewPage = ({ match }) => {
  const { bootcampId } = match.params;
  const [bootcamp, setBootcamp] = useState({});
  const { get, response } = useFetch(BASE_API_URL);

  const fetchBootcamp = useCallback(async () => {
    const fetchedBootcamp = await get(`/bootcamps/${bootcampId}`);

    if (response.ok) setBootcamp(fetchedBootcamp.data);
    else {
      toast.error("Right now our servers are down. Please try again later.", {
        autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
        toastId: "toastid",
      });
    }
  }, [get, bootcampId]);

  useEffect(() => {
    fetchBootcamp();
  }, [fetchBootcamp]);

  return (
    <InnerLayoutWithCard>
      <BackButton
        to={`/bootcamp/${bootcampId}`}
        className="btn-link text-secondary"
      >
        Bootcamp Info
      </BackButton>

      <h1 className="mb-2">{bootcamp.name} Bootcamp</h1>

      <h3 className="text-primary mb-4">Write a Review</h3>

      <p>You must have attended and graduated this bootcamp to review it.</p>

      <AddReviewForm bootcampId={bootcampId} />
    </InnerLayoutWithCard>
  );
};
