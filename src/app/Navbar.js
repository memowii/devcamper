import React, { useState } from "react";
import {
  Collapse,
  Navbar as RSNavbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink as RSNavLink,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { IconStore } from "../common/components/IconStore";
import { getLoggedInUserData } from "../common/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = getLoggedInUserData();
  let NavItemsForUser;

  const toggle = () => setIsOpen(!isOpen);

  if (!userData) {
    NavItemsForUser = () => (
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
    console.log(userData);
    NavItemsForUser = () => (
      <>
        <NavItem>
          <NavLink className="nav-link" to="/login" exact>
            {IconStore("faSignInAlt")} Account user
          </NavLink>
        </NavItem>
      </>
    );
  }

  if (userData && userData.role === "publisher") {
    console.log(userData);
    NavItemsForUser = () => (
      <>
        <NavItem>
          <NavLink className="nav-link" to="/login" exact>
            {IconStore("faSignInAlt")} Account publisher
          </NavLink>
        </NavItem>
      </>
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
            <Switch>
              <Route children={NavItemsForUser} />
            </Switch>

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
