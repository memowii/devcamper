import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/image_1.jpg";
import { BootcampCard } from "../bootcamps/BootcampCard";
import { InnerLayoutWithCard } from "../../common/components/InnerLayoutWithCard";

export const ManageBootcampPage = () => {
  return (
    <InnerLayoutWithCard>
      <h1 className="mb-4">Manage Bootcamp</h1>

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

      <Link to="/add-bootcamp" className="btn btn-primary btn-block">
        Edit Bootcamp Details
      </Link>

      <Link to="/manage-courses" className="btn btn-secondary btn-block">
        Manage Courses
      </Link>

      <Link to="/manage-courses" className="btn btn-danger btn-block">
        Remove Bootcamp
      </Link>

      <p className="text-muted mt-5">
        * You can only add one bootcamp per account.
      </p>
      <p className="text-muted">
        * You must be affiliated with the bootcamp in some way in order to add
        it to DevCamper.
      </p>
    </InnerLayoutWithCard>
  );
};
