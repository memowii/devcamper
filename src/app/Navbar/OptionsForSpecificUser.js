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
import useFetch from "use-http";
import { useDispatch } from "react-redux";
import { deleteFromStorage } from "@rehooks/local-storage";

import { IconStore } from "../../common/components/IconStore";
import { getLoggedInUserData } from "../../common/utils";
import { selectUserToken } from "../../features/user/userSlice";
import { BASE_API_URL } from "../../common/costants";
import { userAdded } from "../../features/user/userSlice";

export const OptionsForSpecificUser = () => {
  const { get, response } = useFetch(BASE_API_URL + "/auth");
  const token = useSelector(selectUserToken),
    userData = getLoggedInUserData(token),
    dispatch = useDispatch(),
    history = useHistory();

  const handleLogOut = async () => {
    await get("/logout");

    if (response.ok) {
      deleteFromStorage("sessionToken");
      dispatch(userAdded({ token: "" }));
      history.push("/login");
    } else {
      deleteFromStorage("sessionToken");
      dispatch(userAdded({ token: "" }));
      history.push("/login");
    }
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
      <Dropdown onLogout={handleLogOut}>
        <DropdownItem path="/manage-reviews">Manage Reviews</DropdownItem>
      </Dropdown>
    );
  }

  if (userData && userData.role === "publisher") {
    return (
      <Dropdown onLogout={handleLogOut}>
        <DropdownItem path="/manage-bootcamp">Manage Bootcamps</DropdownItem>
      </Dropdown>
    );
  }
};

const Dropdown = ({ children, onLogout }) => {
  const history = useHistory();
  const goTo = (path) => history.push(path);
  const { path } = children.props;

  const ClonedDropdownItem = () =>
    cloneElement(children, { onClick: () => goTo(path) });

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {IconStore("faUser")} Account{" "}
      </DropdownToggle>
      <DropdownMenu>
        <ClonedDropdownItem />
        <DropdownItem onClick={() => goTo("/manage-account")}>
          Manage Account
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={onLogout}>
          {IconStore("faSignOutAlt")} Logout
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
