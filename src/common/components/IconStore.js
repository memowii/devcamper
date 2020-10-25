import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPencilAlt,
  faGlobe,
  faCheck,
  faTimes,
  faUserPlus,
  faSignInAlt,
  faLaptopCode,
  faChevronLeft,
  faUser,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faComments,
  faPencilAlt,
  faGlobe,
  faCheck,
  faTimes,
  faUserPlus,
  faSignInAlt,
  faLaptopCode,
  faChevronLeft,
  faUser,
  faSignOutAlt
};

export const IconStore = (icon, className = "") => {
  if (typeof icons[icon] !== "undefined") {
    return React.createElement(FontAwesomeIcon, {
      icon: icons[icon],
      className,
    });
  }

  // In case the icon wasn't found, notify with a message.
  return React.createElement(() => (
    <p>The icon {icon} hasn't been added to the store.</p>
  ));
};
