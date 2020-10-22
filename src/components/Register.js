import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSnackbar } from "react-simple-snackbar";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  FormFeedback,
  Button,
  Spinner,
} from "reactstrap";
import { IconStore } from "../components/IconStore";

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().email().trim().required(),
  password: yup
    .string()
    .min(3)
    .trim()
    .oneOf([yup.ref("password_conf"), null], "The passwords must match.")
    .required(),
  password_conf: yup
    .string()
    .min(3)
    .trim()
    .oneOf([yup.ref("password"), null], "The passwords must match.")
    .required(),
  role: yup.string().required(),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  password_conf: "",
  role: "",
};

const snackbarOptions = {
  style: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  closeStyle: {
    color: "#155724",
  },
};

export const Register = ({
  handleUserRegistration,
  loading,
  successfulRegistration,
}) => {
  const { handleSubmit, register, errors, trigger, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isSubmitted } = formState;
  const [openSnackbar, closeSnackbar] = useSnackbar(snackbarOptions);

  const validatePasswordsAfterSubtting = () => {
    if (!isSubmitted) return;

    trigger(["password", "password_conf"]);
  };

  React.useEffect(() => {
    if (successfulRegistration) {
      openSnackbar("blah");
      // wait for 4 seconsd and
      // close snacbkar
      // move user to list of bootcamps
    }
  }, [successfulRegistration]);

  return (
    <>
      <h1>{IconStore("faUserPlus")} Register</h1>

      <p>
        Register to list your bootcamp or rate, review and favorite bootcamps
      </p>

      <Form onSubmit={handleSubmit(handleUserRegistration)}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter full name"
            innerRef={register}
            invalid={errors.name ? true : false}
          />
          <FormFeedback>{errors.name?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email Address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            innerRef={register}
            invalid={errors.email ? true : false}
          />
          <FormFeedback>{errors.email?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            innerRef={register}
            invalid={errors.password ? true : false}
            onChange={validatePasswordsAfterSubtting}
          />
          <FormFeedback>{errors.password?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="password_conf">Confirm Password</Label>
          <Input
            type="password"
            name="password_conf"
            placeholder="Confirm password"
            innerRef={register}
            invalid={errors.password_conf ? true : false}
            onChange={validatePasswordsAfterSubtting}
          />
          <FormFeedback>{errors.password_conf?.message}</FormFeedback>
        </FormGroup>

        <Card body className="mb-3">
          <h5>User Role</h5>

          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="role"
                value="user"
                innerRef={register}
              />{" "}
              Regular User (Browse, Write reviews, etc)
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="role"
                value="publisher"
                innerRef={register}
                invalid
              />{" "}
              Bootcamp Publisher
            </Label>
          </FormGroup>

          <FormGroup style={{ marginBottom: 0 }}>
            <Input
              style={{ display: "none" }}
              invalid={errors.role ? true : false}
            />
            <FormFeedback>{errors.role?.message}</FormFeedback>
          </FormGroup>
        </Card>

        <p className="text-danger">
          * You must be affiliated with the bootcamp in some way in order to add
          it to DevCamper.
        </p>

        <FormGroup>
          <Button type="submit" color="primary" block>
            {!loading ? (
              "Submit"
            ) : (
              <>
                <Spinner tag="span" size="sm" color="light" /> Registering user
              </>
            )}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};