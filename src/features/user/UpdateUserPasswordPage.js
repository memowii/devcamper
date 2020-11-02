import React from "react";
import { Form, FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { toast } from "react-toastify";
import { writeStorage } from "@rehooks/local-storage";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { schemaResolver, defaultValues } from "./updateUserPasswordFormConfs";
import {
  BASE_API_URL,
  DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
  DELAY_TIME_WHEN_FAILED_REGISTRATION,
  PASSWORD_IS_INCORRECT,
} from "../../common/costants";
import { getLoggedInUserData, getErrorType } from "../../common/utils";
import { LoadingButton } from "../../common/components/LoadingButton";

export const UpdateUserPasswordPage = () => {
  const { token } = getLoggedInUserData();
  const {
    handleSubmit,
    register,
    errors,
    trigger,
    formState,
    setError,
  } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { isSubmitted } = formState;
  const { put, response, loading } = useFetch(`${BASE_API_URL}/auth`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const validatePasswordsAfterSubmitting = () => {
    if (!isSubmitted) return;
    trigger(["newPassword", "newPasswordConf"]);
  };

  const handleSubmitUpdatedPassword = async (passwordData) => {
    const { currentPassword, newPassword, newPasswordConf } = passwordData;
    const resData = await put("/updatepassword", {
      currentPassword,
      newPassword,
      newPasswordConf,
    });

    if (response.ok) {
      toast.success("Your password has been updated.", {
        autoClose: DELAY_TIME_WHEN_SUCCESSFUL_REGISTRATION,
        position: toast.POSITION.TOP_RIGHT,
        closeButton: false,
        toastId: "toastId-0",
      });
      writeStorage("sessionToken", token);
    } else {
      if (getErrorType(resData) === PASSWORD_IS_INCORRECT) {
        setError("currentPassword", {
          type: "manual",
          message: "your password is incorrect",
        });
      } else {
        toast.error(
          "An error occurred in your password update, please try again later.",
          {
            autoClose: DELAY_TIME_WHEN_FAILED_REGISTRATION,
            position: toast.POSITION.TOP_RIGHT,
            closeButton: false,
            toastId: "toastId-1",
          }
        );
      }
    }
  };

  return (
    <InnerLayoutWithCard>
      <h1 className="mb-2">Update Password</h1>

      <Form onSubmit={handleSubmit(handleSubmitUpdatedPassword)}>
        <FormGroup>
          <Label>Current Password</Label>
          <Input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            innerRef={register}
            invalid={errors.currentPassword ? true : false}
          />
          <FormFeedback>{errors.currentPassword?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>New Password</Label>
          <Input
            type="password"
            name="newPassword"
            placeholder="New Password"
            innerRef={register}
            invalid={errors.newPassword ? true : false}
            onChange={validatePasswordsAfterSubmitting}
          />
          <FormFeedback>{errors.newPassword?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Confirm New Password</Label>
          <Input
            type="password"
            name="newPasswordConf"
            placeholder="Confirm New Password"
            innerRef={register}
            invalid={errors.newPasswordConf ? true : false}
            onChange={validatePasswordsAfterSubmitting}
          />
          <FormFeedback>{errors.newPasswordConf?.message}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <LoadingButton
            loading={loading}
            text="Update Password"
            color="dark"
            loadingText="Updating your password"
          />
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
