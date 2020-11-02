import React, { useEffect, useCallback, useState } from "react";
import useFetch from "use-http";
import { Form, FormGroup, Label, Input, Spinner } from "reactstrap";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/image_1.jpg";
import { BootcampCard } from "../bootcamps/BootcampCard";
import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BASE_API_URL } from "../../common/costants";
import { getLoggedInUserData, isEmpty } from "../../common/utils";
import { Fatal } from "../../common/components/Fatal";

export const ManageBootcampPage = () => {
  const { id: userId } = getLoggedInUserData();
  const { get, response, loading, error } = useFetch(BASE_API_URL);
  const [bootcamp, setBootcamp] = useState({});

  const fetchBootcamp = useCallback(async () => {
    const fetchedBootcamp = await get(`/bootcamps?user=${userId}`);

    if (response.ok) {
      if (fetchedBootcamp.count > 0) {
        setBootcamp(fetchedBootcamp.data[0]);
      } else {
        setBootcamp({});
      }
    }
  }, [userId, response.ok, get]);

  useEffect(() => {
    fetchBootcamp();
  }, [fetchBootcamp]);

  const putBootcampOptions = () => {
    if (loading)
      return (
        <div className="d-flex justify-content-center mt-5 mb-4">
          <Spinner color="primary" />
        </div>
      );

    if (error)
      return (
        <Fatal message="An error ocurred while fetching your bootcamp. Please try again later." />
      );

    if (isEmpty(bootcamp)) {
      return <NoBootcamp />;
    } else {
      return <ThereIsBootcamp />;
    }
  };

  return (
    <InnerLayoutWithCard>
      <h1 className="mb-4">Manage Bootcamp</h1>

      {putBootcampOptions()}

      <p className="text-muted mt-5">
        * You can only add one bootcamp per account.
      </p>
      <p className="text-muted">
        * You must be affiliated with the bootcamp in some way in order to add
        it to DevCamper.
      </p>
    </InnerLayoutWithCard>
  );
};

const ThereIsBootcamp = () => {
  return (
    <>
      <BootcampCard
        photo={img1}
        name="Devworks Bootcamp"
        averageRating="8.8"
        place="Boston, MA"
        careers="Web Development, UI/UX, Mobile Development"
      />

      <Form className="mb-4">
        <FormGroup>
          <div className="custom-file">
            <Input type="file" name="photo" className="custom-file-input" />
            <Label className="custom-file-label" for="photo">
              Add Bootcamp Image
            </Label>
          </div>
        </FormGroup>
        <Input
          type="submit"
          className="btn btn-light btn-block"
          value="Upload Image"
        />
      </Form>

      <Link to="/add-bootcamp" className="btn btn-primary btn-block">
        Edit Bootcamp Details
      </Link>

      <Link to="/manage-courses" className="btn btn-secondary btn-block">
        Manage Courses
      </Link>

      <Link to="/manage-courses" className="btn btn-danger btn-block">
        Remove Bootcamp
      </Link>
    </>
  );
};

const NoBootcamp = () => {
  return (
    <>
      <p className="lead">You have not yet added a bootcamp</p>

      <Link to="/add-bootcamp" className="btn btn-primary btn-block">
        Add Bootcamp
      </Link>
    </>
  );
};
