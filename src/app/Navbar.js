import React, { useState } from "react";
import {
  Collapse,
  Navbar as RSNavbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink as RSNavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { IconStore } from "../common/components/IconStore";
import { getLoggedInUserData } from "../common/utils";
import { selectUserToken } from "../features/user/userSlice";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(selectUserToken);
  const userData = getLoggedInUserData(token);
  const history = useHistory();
  let OptionsForSpecificUser;

  const toggle = () => setIsOpen(!isOpen);

  if (!userData) {
    OptionsForSpecificUser = () => (
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
    OptionsForSpecificUser = () => (
      <Dropdown>
        <DropdownItem onClick={() => history.push("/managereviews")}>
          Manage Reviews
        </DropdownItem>
        <DropdownItem onClick={() => history.push("/manage-account")}>
          Manage Account
        </DropdownItem>
      </Dropdown>
    );
  }

  if (userData && userData.role === "publisher") {
    OptionsForSpecificUser = () => (
      <Dropdown>
        <DropdownItem onClick={() => history.push("/manage-bootcamp")}>
          Manage Bootcamps
        </DropdownItem>
        <DropdownItem onClick={() => history.push("/manage-account")}>
          Manage Account
        </DropdownItem>
      </Dropdown>
    );
  }

  return (
    <RSNavbar expand="md" dark color="primary">
      <Container>
        <NavLink className="navbar-brand" to="/">
          {IconStore("faLaptopCode")} DevCamper
        </NavLink>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <OptionsForSpecificUser />

            <NavItem className="d-none d-md-block">
              <RSNavLink className="nav-link">|</RSNavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/bootcamps">
                Browse Bootcamps
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </RSNavbar>
  );
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
