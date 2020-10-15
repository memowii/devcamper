import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { Spinner } from "../components/Spinner";
import { Fatal } from "../components/Fatal";
import * as reviewsActions from "../actions/reviewsActions";

import { InnerLayout } from "../components/InnerLayout";

export const _Reviews = (props) => {
  const { id } = useParams();
  const { fetchBootcampReviews, reviews, loading, error } = props;

  useEffect(() => {
    fetchBootcampReviews(id);
  }, [id, fetchBootcampReviews]);

  const putReviews = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} className="w-100 py-4" />;
    }

    return <p>reviews list</p>;
  };

  return (
    <InnerLayout>
      <p>reviews</p>
      {/* {putReviews()} */}

      {/* <Col md="8">
        <BackButton to="/bootcamp" className="btn-secondary">
          Bootcamp Info
        </BackButton>

        <h1 className="mb-4">DevWorks Bootcamp Reviews</h1>

        <ReviewCard
          title="Fantastic Bootcamp"
          rating="10"
          review="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi similique mollitia, praesentium, animi harum officia
                      dolores corporis ex tempore consequuntur dolorem ullam dolorum
                      magnam corrupti quaerat tempora repudiandae! Similique,
                      molestiae. Iste, blanditiis recusandae unde tenetur eius
                      exercitationem rerum a fuga."
          author="Kevin Smith"
        />

        <ReviewCard
          title="Learned a Lot"
          rating="9"
          review="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi similique mollitia, praesentium, animi harum officia
                      dolores corporis ex tempore consequuntur dolorem ullam dolorum
                      magnam corrupti quaerat tempora repudiandae! Similique,
                      molestiae. Iste, blanditiis recusandae unde tenetur eius
                      exercitationem rerum a fuga."
          author="Jill Samson"
        />
      </Col>

      <Col md="4">
        <h1 className="text-center my-4">
          <Badge color="success" className="rounded-circle p-3">
            8.8
          </Badge>{" "}
          Rating
        </h1>

        <NavLink to="/add-review" className="btn btn-primary btn-block my-3">
          {IconStore("faPencilAlt")} Review This Bootcamp
        </NavLink>
      </Col> */}
    </InnerLayout>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.reviewsReducer;
};

export const Reviews = connect(mapStateToProps, reviewsActions)(_Reviews);
