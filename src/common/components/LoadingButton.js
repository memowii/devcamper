import React from "react";
import { Button, Spinner } from "reactstrap";

export const LoadingButton = ({
  loading,
  text = "Submit",
  color = "primary",
  loadingText,
}) => {
  return (
    <Button type="submit" color={color} block>
      {!loading ? (
        text
      ) : (
        <>
          <Spinner tag="span" size="sm" color="light" /> {loadingText}
        </>
      )}
    </Button>
  );
};
