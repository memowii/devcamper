import React, { useCallback, useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  FormFeedback,
} from "reactstrap";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import {
  schemaResolver,
  defaultValues,
  DELAY_TIME_WHEN_BOOTCAMP_IS_CREATED,
  DELAY_TIME_WHEN_BOOTCAMP_NAME_IS_USED,
} from "./addBootcampFormConfs";
import {
  BASE_API_URL,
  EMAIL_IN_USE_ERROR,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
} from "../../common/costants";
import { getLoggedInUserData, getErrorType } from "../../common/utils";
import { LoadingButton } from "../../common/components/LoadingButton";

export const EditBootcampPage = ({ match }) => {
  const { bootcampId } = match.params;
  const { token } = getLoggedInUserData();
  const { handleSubmit, register, errors, setError, reset } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { put, get, response, loading } = useFetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const history = useHistory();

  const handleSubmitBootcamp = async (bootcampData) => {
    const resData = await put(`/bootcamps/${bootcampId}`, bootcampData);

    if (response.ok) {
      toast("Your bootcamp has been updated.", {
        autoClose: DELAY_TIME_WHEN_BOOTCAMP_IS_CREATED,
        pauseOnHover: false,
        closeButton: false,
        toastId: "toastId-1",
        type: toast.TYPE.SUCCESS,
        onClose: () => {
          toast.dismiss();
          history.push("/manage-bootcamp");
          history.go(0);
        },
      });
    } else {
      // REVIEW: Check for the variable EMAIL_IN_USE_ERROR.
      if (getErrorType(resData) === EMAIL_IN_USE_ERROR) {
        toast(
          "A bootcamp with that name already exists. Please use a different name.",
          {
            autoClose: DELAY_TIME_WHEN_BOOTCAMP_NAME_IS_USED,
            pauseOnHover: false,
            closeButton: false,
            closeOnClick: false,
            toastId: "toastId-3",
            type: toast.TYPE.ERROR,
            onClose: () => toast.dismiss(),
          }
        );
        setError("name", {
          type: "manual",
          message: "Please use a different name.",
        });
      } else {
        toast(
          "An error occurred in your bootcamp publication. Please try again later.",
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
    }
  };

  const fetchBootcamp = useCallback(async () => {
    const fetchedBootcamp = await get(`/bootcamps/${bootcampId}`);

    if (response.ok) {
      fetchedBootcamp.data.address =
        fetchedBootcamp.data.location.formattedAddress;
      reset(fetchedBootcamp.data);
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
          onClose: () => {
            toast.dismiss();
            history.push("/manage-bootcamp");
            history.go(0);
          },
        }
      );
    }
  }, [bootcampId, response, get, history, reset]);

  useEffect(() => {
    fetchBootcamp();
  }, [fetchBootcamp]);

  return (
    <section className="mt-5">
      <Container>
        <h1 className="mb-2">Add Bootcamp</h1>

        <p>
          Important: You must be affiliated with a bootcamp to add to DevCamper
        </p>

        <Form onSubmit={handleSubmit(handleSubmitBootcamp)}>
          <Row>
            <Col md="6">
              <Card color="white" className="py-2 px-4">
                <CardBody>
                  <h3>Location & Contact</h3>

                  <p className="text-muted">
                    If multiple locations, use the main or largest
                  </p>

                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Bootcamp Name"
                      innerRef={register}
                      invalid={errors.name ? true : false}
                    />
                    <FormFeedback>{errors.name?.message}</FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label>Address</Label>
                    <Input
                      type="text"
                      name="address"
                      placeholder="Full Address"
                      innerRef={register}
                      invalid={errors.address ? true : false}
                    />
                    <FormFeedback>{errors.address?.message}</FormFeedback>
                    <small className="form-text text-muted">
                      Street, city, state, etc
                    </small>
                  </FormGroup>

                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      innerRef={register}
                      invalid={errors.phone ? true : false}
                    />
                    <FormFeedback>{errors.phone?.message}</FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Contact Email"
                      innerRef={register}
                      invalid={errors.email ? true : false}
                    />
                    <FormFeedback>{errors.email?.message}</FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label>Website</Label>
                    <Input
                      type="text"
                      name="website"
                      placeholder="Website URL"
                      innerRef={register}
                      invalid={errors.website ? true : false}
                    />
                    <FormFeedback>{errors.website?.message}</FormFeedback>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card color="white" className="py-2 px-4">
                <CardBody>
                  <h3>Other Info</h3>
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      name="description"
                      rows="5"
                      placeholder="Description (What you offer, etc)"
                      maxLength="500"
                      innerRef={register}
                      invalid={errors.description ? true : false}
                    />
                    <FormFeedback>{errors.description?.message}</FormFeedback>
                    <small className="form-text text-muted">
                      No more than 500 characters
                    </small>
                  </FormGroup>
                  <FormGroup>
                    <Label>Careers</Label>
                    <Input
                      type="select"
                      name="careers"
                      className="custom-select"
                      multiple
                      innerRef={register}
                      invalid={errors.careers ? true : false}
                    >
                      <option>Select all that apply</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">
                        Mobile Development
                      </option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Business">Business</option>
                      <option value="Other">Other</option>
                    </Input>
                    <FormFeedback>{errors.careers?.message}</FormFeedback>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="housing"
                        innerRef={register}
                      />{" "}
                      Housing
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="jobAssistance"
                        innerRef={register}
                      />{" "}
                      Job Assistance
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="jobGuarantee"
                        innerRef={register}
                      />{" "}
                      Job Guarantee
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="acceptGi"
                        innerRef={register}
                      />{" "}
                      Accepts GI Bill
                    </Label>
                  </FormGroup>

                  <p className="text-muted my-4">
                    *After you add the bootcamp, you can add the specific
                    courses offered
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <FormGroup>
            <LoadingButton
              text="Submit Bootcamp"
              color="success"
              className="my-4"
              loadingText="Creating bootcamp ..."
              loading={loading}
            />
          </FormGroup>
        </Form>
      </Container>
    </section>
  );
};
