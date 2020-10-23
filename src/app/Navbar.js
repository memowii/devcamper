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

import { IconStore } from "../common/components/IconStore";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <RSNavbar expand="md" dark color="primary">
      <Container>
        <NavLink className="navbar-brand" to="/">
          {IconStore("faLaptopCode")} DevCamper
        </NavLink>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
