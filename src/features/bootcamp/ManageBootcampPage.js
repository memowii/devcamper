import React, { useEffect, useCallback, useState } from "react";
import useFetch from "use-http";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import img1 from "../../assets/images/image_1.jpg";
import { BootcampCard } from "../bootcamps/BootcampCard";
import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
  DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
} from "../../common/costants";
import { getLoggedInUserData, isEmpty } from "../../common/utils";
import { Fatal } from "../../common/components/Fatal";

export const ManageBootcampPage = () => {
  const { id: userId, token } = getLoggedInUserData();
  const { get, del, response, loading, error } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const [bootcamp, setBootcamp] = useState({});
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchBootcamp = useCallback(async () => {
    const fetchedBootcamp = await get(`/bootcamps?user=${userId}`);

    if (response.ok) {
      if (fetchedBootcamp.count > 0) {
        setBootcamp(fetchedBootcamp.data[0]);
      } else {
        setBootcamp({});
      }
    }
  }, [userId, response, get]);

  useEffect(() => {
    fetchBootcamp();
  }, [fetchBootcamp]);

  const putBootcampOptions = () => {
    if (loading && !isDeleting)
      return (
        <div className="d-flex justify-content-center mt-5 mb-4">
          <Spinner color="primary" />
        </div>
      );

    if (error && !isDeleting) {
      return (
        <Fatal message="An error ocurred while fetching your bootcamp. Please try again later." />
      );
    }

    if (isEmpty(bootcamp)) {
      return <NoBootcamp />;
    } else {
      return <ThereIsBootcamp {...bootcamp} toggleModal={toggleModal} />;
    }
  };

  const toggleModal = () => setModal(!modal);

  const deleteBootcamp = async (bootcampId) => {
    setIsDeleting(true);
    await del(`/bootcamps/${bootcampId}`);

    if (response.ok) {
      toast("Your bootcamp has been deleted.", {
        autoClose: DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
        pauseOnHover: false,
        closeButton: false,
        closeOnClick: false,
        toastId: "toastId-1",
        type: toast.TYPE.ERROR,
        onClose: () => {
          toast.dismiss();
          history.go(0);
        },
      });
    } else {
      toast(
        "An error ocurred while removing this bootcamp. Please try again later.",
        {
          autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
          pauseOnHover: false,
          closeButton: false,
          closeOnClick: false,
          toastId: "toastId-2",
          type: toast.TYPE.ERROR,
          onClose: () => toast.dismiss(),
        }
      );
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

      <Modal isOpen={modal} toggle={toggleModal} size="sm">
        <ModalHeader toggle={toggleModal}>Remove bootcamp</ModalHeader>
        <ModalBody>Are you sure you want to remove this bootcamp?</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              toggleModal();
              deleteBootcamp(bootcamp.id);
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

const ThereIsBootcamp = ({ id, toggleModal }) => {
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

      <Link
        to={`/manage-bootcamp/${id}/edit-bootcamp`}
        className="btn btn-primary btn-block"
      >
        Edit Bootcamp Details
      </Link>

      <Link to="/manage-courses" className="btn btn-secondary btn-block">
        Manage Courses
      </Link>

      <Button className="btn btn-danger btn-block" onClick={toggleModal}>
        Remove Bootcamp
      </Button>
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
