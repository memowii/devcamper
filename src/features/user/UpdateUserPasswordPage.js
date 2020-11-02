import React from "react";
import { Form, FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { useForm } from "react-hook-form";

import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";
import { schemaResolver, defaultValues } from "./updateUserPasswordFormConfs";

export const UpdateUserPasswordPage = () => {
  const { handleSubmit, register, errors, trigger, formState } = useForm({
    defaultValues,
    resolver: schemaResolver,
  });
  const { isSubmitted } = formState;

  const validatePasswordsAfterSubmitting = () => {
    if (!isSubmitted) return;
    trigger(["newPassword", "newPasswordConf"]);
  };

  const handleSubmitUpdatedPassword = (data) => console.log(data);

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
          <Input
            type="submit"
            value="Update Password"
            className="btn btn-dark btn-block"
          />
        </FormGroup>
      </Form>
    </InnerLayoutWithCard>
  );
};
