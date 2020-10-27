import React from "react";
import { Button, Spinner } from "reactstrap";

export const LoadingButton = ({ loading, loadingText }) => {
  return (
    <Button type="submit" color="primary" block>
      {!loading ? (
        "Submit"
      ) : (
        <>
          <Spinner tag="span" size="sm" color="light" /> {loadingText}
        </>
      )}
    </Button>
  );
};
