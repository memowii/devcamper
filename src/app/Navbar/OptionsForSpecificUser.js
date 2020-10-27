import React from "react";
// REVIEW: Check if NavLink should be a Link.
import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { IconStore } from "../../common/components/IconStore";
import { getLoggedInUserData } from "../../common/utils";
import { selectUserToken } from "../../features/user/userSlice";

export const OptionsForSpecificUser = () => {
  const token = useSelector(selectUserToken);
  const userData = getLoggedInUserData(token);
  const history = useHistory();

  const goTo = (path) => history.push(path);

  if (!userData) {
    return (
      <>
        <NavItem>
          <NavLink className="nav-link" to="/login" exact>
            {IconStore("faSignInAlt")} Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/register">
            {IconStore("faUserPlus")} Register
          </NavLink>
        </NavItem>
      </>
    );
  }

  if (userData && userData.role === "user") {
    return (
      <Dropdown>
        <DropdownItem onClick={() => goTo("/managereviews")}>
          Manage Reviews
        </DropdownItem>
        <DropdownItem onClick={() => goTo("/manage-account")}>
          Manage Account
        </DropdownItem>
      </Dropdown>
    );
  }

  if (userData && userData.role === "publisher") {
    return (
      <Dropdown>
        <DropdownItem onClick={() => goTo("/manage-bootcamp")}>
          Manage Bootcamps
        </DropdownItem>
        <DropdownItem onClick={() => goTo("/manage-account")}>
          Manage Account
        </DropdownItem>
      </Dropdown>
    );
  }
};

const Dropdown = ({ children }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {IconStore("faUser")} Account{" "}
    </DropdownToggle>
    <DropdownMenu>
      {children}
      <DropdownItem divider />
      <DropdownItem to="/reviews">
        {IconStore("faSignOutAlt")} Logout
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);
