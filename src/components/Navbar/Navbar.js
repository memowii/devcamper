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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <RSNavbar expand="md" dark fixed="top" color="primary">
      <Container>
        <NavLink className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faLaptopCode} /> DevCamper
        </NavLink>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/login" exact>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/register">
                <FontAwesomeIcon icon={faUserPlus} /> Register
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
