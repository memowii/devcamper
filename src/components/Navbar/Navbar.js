import React, { useState } from "react";
import {
  Collapse,
  Navbar as NavbarRS,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
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
    <NavbarRS expand="md" dark fixed="top" color="primary">
      <Container>
        <NavbarBrand href="#">
          <FontAwesomeIcon icon={faLaptopCode} /> DevCamper
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-md-block">
              <NavLink href="#">|</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Browse Bootcamps</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </NavbarRS>
  );
};
