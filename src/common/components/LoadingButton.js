import React from "react";
import { Button, Spinner } from "reactstrap";

export const LoadingButton = ({
  loading,
  text = "Submit",
  color = "primary",
  loadingText,
  className = "",
}) => {
  return (
    <Button type="submit" color={color} className={className} block disabled={loading ? true : false}>
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
