import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
  Table,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
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
  const { id: userId, token } = getLoggedInUserData();
  const { get, del, response, error, loading } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [bootcamp, setBootcamp] = useState({});
  const [modal, setModal] = useState(false);
  const [courseId, setCourseId] = useState();
  const [isDeleting, setIsDeleting] = useState(false);
  const history = useHistory();

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
          toastId: "toastId-1",
          type: toast.TYPE.ERROR,
          onClose: () => toast.dismiss(),
        }
      );
    }
  }, [userId, response.ok, get]);

  useEffect(() => {
    fetchBootcamp();
  }, [fetchBootcamp]);

  const putCoursesOptions = () => {
    if (loading && !isDeleting) {
      return (
        <div className="d-flex justify-content-center mt-5 mb-4">
          <Spinner color="primary" />
        </div>
      );
    }

    if (error && !isDeleting) {
      return (
        <Fatal message="An error ocurred while fetching your bootcamp. Please try again later." />
      );
    }

    if (bootcamp.courses?.length > 0) {
      return <CoursesOptions {...bootcamp} toggleModal={toggleModal} />;
    } else {
      return <NoCoursesOptions {...bootcamp} />;
    }
  };

  const toggleModal = (courseId) => {
    setModal(!modal);
    setCourseId(courseId);
  };

  const deleteCourse = async () => {
    setIsDeleting(true);
    await del(`/courses/${courseId}`);

    if (response.ok) {
      toast("The course has been deleted.", {
        autoClose: 3000,
        pauseOnHover: false,
        closeButton: false,
        closeOnClick: false,
        toastId: "toastId-2",
        type: toast.TYPE.SUCCESS,
        onClose: () => {
          toast.dismiss();
          history.go(0);
        },
      });
    } else {
      toast(
        "An error occurred while deleting the course. Please try again later.",
        {
          autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
          pauseOnHover: false,
          closeButton: false,
          closeOnClick: false,
          toastId: "toastId-3",
          type: toast.TYPE.ERROR,
          onClose: () => toast.dismiss(),
        }
      );
    }
  };

  return (
    <InnerLayoutWithCard>
      <BackButton to="/manage-bootcamp" className="btn-link text-secondary">
        Manage Bootcamp
      </BackButton>

      <h1 className="mb-4">Manage Courses</h1>

      {putCoursesOptions()}

      <Modal isOpen={modal} toggle={toggleModal} size="sm">
        <ModalHeader toggle={toggleModal}>Remove course</ModalHeader>
        <ModalBody>Are you sure you want to remove this course?</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              deleteCourse();
              toggleModal(null);
            }}
          >
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={() => toggleModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </InnerLayoutWithCard>
  );
};

const NoCoursesOptions = ({ id }) => {
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

const CoursesOptions = ({
  id,
  name,
  averageRating,
  place,
  careers,
  courses,
  toggleModal,
}) => {
  return (
    <>
      <BootcampCard
        id={id}
        photo={img1}
        name={name}
        averageRating={averageRating}
        place={place}
        careers={careers}
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
          {courses.length > 0 &&
            courses.map((course) => (
              <Fragment key={course._id}>
                <TableRow
                  name={course.title}
                  to={`/manage-courses/${course._id}/edit-course`}
                  toggleModal={() => toggleModal(course._id)}
                />
              </Fragment>
            ))}
        </tbody>
      </Table>
    </>
  );
};
