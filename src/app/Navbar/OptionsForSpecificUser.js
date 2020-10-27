import React, { cloneElement } from "react";
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

  const logOut = () => {
    // call api to logout
    // clean token from storage
    // clean token from store
  };

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
        <DropdownItem path="/manage-reviews">Manage Reviews</DropdownItem>
      </Dropdown>
    );
  }

  if (userData && userData.role === "publisher") {
    return (
      <Dropdown>
        <DropdownItem path="/manage-bootcamp">Manage Bootcamps</DropdownItem>
      </Dropdown>
    );
  }
};

const Dropdown = ({ children }) => {
  const history = useHistory();
  const goTo = (path) => history.push(path);
  const { path } = children.props;

  const ClonedDropdown = () =>
    cloneElement(children, { onClick: () => goTo(path) });

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {IconStore("faUser")} Account{" "}
      </DropdownToggle>
      <DropdownMenu>
        <ClonedDropdown />
        <DropdownItem onClick={() => goTo("/manage-account")}>
          Manage Account
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem to="/reviews">
          {IconStore("faSignOutAlt")} Logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
