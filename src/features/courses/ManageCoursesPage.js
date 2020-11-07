import React, { useCallback, useEffect, useState } from "react";
import { Table, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import useFetch from "use-http";
import { toast } from "react-toastify";

import { BootcampCard } from "../bootcamps/BootcampCard";
import { TableRow } from "../../common/components/TableRow";
import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { BackButton } from "../../common/components/BackButton";
import img1 from "../../assets/images/image_1.jpg";
import { getLoggedInUserData } from "../../common/utils";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";
import { Fatal } from "../../common/components/Fatal";

export const ManageCoursesPage = () => {
  const { id: userId } = getLoggedInUserData();
  const { get, response, error, loading } = useFetch(BASE_API_URL);
  const [bootcamp, setBootcamp] = useState({});

  const fetchBootcamp = useCallback(async () => {
    const fetchedBootcamp = await get(`/bootcamps?user=${userId}`);

    if (response.ok) {
      setBootcamp(fetchedBootcamp.data[0]);
    } else {
      toast(
        "An error occurred while fetching your bootcamp. Please try again later.",
        {
          autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
          pauseOnHover: false,
          closeButton: false,
          closeOnClick: false,
          toastId: "toastId-4",
          type: toast.TYPE.ERROR,
          onClose: () => toast.dismiss(),
        }
      );
    }
  }, [userId, response.ok, get]);

  useEffect(() => {
    fetchBootcamp();
  }, [fetchBootcamp]);

  const putBootcampOptions = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-5 mb-4">
          <Spinner color="primary" />
        </div>
      );
    }

    if (error) {
      return (
        <Fatal message="An error ocurred while fetching your bootcamp. Please try again later." />
      );
    }

    if (bootcamp.courses?.length > 0) {
      return <ThereIsBootcamp {...bootcamp} />;
    } else {
      return <NoBootcamp {...bootcamp} />;
    }
  };

  return (
    <InnerLayoutWithCard>
      <BackButton to="/manage-bootcamp" className="btn-link text-secondary">
        Manage Bootcamp
      </BackButton>

      <h1 className="mb-4">Manage Courses</h1>

      {putBootcampOptions()}
    </InnerLayoutWithCard>
  );
};

const ThereIsBootcamp = ({ id }) => {
  return (
    <>
      <BootcampCard
        photo={img1}
        name="Devworks Bootcamp"
        raverageRatingating="4.9"
        place="Boston, MA"
        careers="Web Development, UI/UX, Mobile Development"
      />

      <Link
        to={`/manage-courses/${id}/add-course`}
        className="btn btn-primary btn-block mb-4"
      >
        Add Bootcamp Course
      </Link>

      <Table striped>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {/* <TableRow tdsContent={["Front End Web Development"]} /> */}
          {/* <TableRow tdsContent={["Full Stack Web Development"]} /> */}
        </tbody>
      </Table>
    </>
  );
};

const NoBootcamp = ({ id }) => {
  return (
    <>
      <p className="lead">You have not yet added any courses.</p>

      <Link
        to={`/manage-courses/${id}/add-course`}
        className="btn btn-primary btn-block"
      >
        Add Your first course
      </Link>
    </>
  );
};
