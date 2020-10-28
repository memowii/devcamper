import React, { Fragment } from "react";

import { BootcampCard } from "./BootcampCard";
import image1 from "../../assets/images/image_1.jpg";

export const BootcampList = ({ bootcamps = [] }) => {
  return bootcamps.map((bootcamp) => (
    <Fragment key={bootcamp.id}>
      <BootcampCard
        id={bootcamp.id}
        photo={image1}
        name={bootcamp.name}
        averageRating={bootcamp.averageRating}
        place={`${bootcamp.location.city}, ${bootcamp.location.state}`}
        careers={bootcamp.careers.join(", ")}
      />
    </Fragment>
  ));
};
