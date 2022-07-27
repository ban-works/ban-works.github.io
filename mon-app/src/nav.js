import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge,
} from "reactstrap";
import {Link} from 'react-router-dom';

export default function AppNav(){
    const [isOpen, setIsOpen] = React.useState(false);
    return ( <Row style={{ marginRight: "10px", marginLeft: "10px" }}>
    <Navbar expand="md" light>
      <NavbarBrand href="/">
        <p style={{ fontWeight: "bold", marginTop: "12px" }}>
          alban fresil
        </p>
      </NavbarBrand>
      <NavbarToggler
        className="me-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Collapse navbar isOpen={isOpen} style={{ justifyContent: "end" }}>
        <Nav navbar style={{ textAlign: "left" }}>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/alban-fresil/">
              LinkedIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/ban-works/">GitHub</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="https://www.instagram.com/ban_works/">
              Instagram
            </NavLink>
          </NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  </Row>

    )

};