// import logo from "./images/ban-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      <Row style={{marginRight: '10px', marginLeft: '10px'}}>
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
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Row></Row>
        <Col xs="6">
          <Row
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "30px",
            }}
          >
            <Col
              xs="12"
              style={{
                display: "flex",
                justifyContent: "start",
                marginLeft: "-6px",
              }}
            >
              <img width="100px" src="./images/ban-logo.png" />
            </Col>
            <Col>
              <h1 style={{ textAlign: "Left" }}>
                Hello, 👋 je m’appelle Alban !
              </h1>
              <h5 style={{ textAlign: "Left" }}>
                Je suis développeur web full stack{" "}
              </h5>
            </Col>
            <Col xs="12" style={{ display: "flex", justifyContent: "start" }}>
              <img
                style={{ marginRight: "10px" }}
                width="50px"
                src="./images/javascript.png"
              />
              <img
                style={{ marginRight: "10px" }}
                width="50px"
                src="./images/react.png"
              />
              <img
                style={{ marginRight: "10px" }}
                width="50px"
                src="./images/redux.png"
              />
              <img width="50px" src="./images/mongodb.png" />
            </Col>
            <Col xs="12" style={{ marginTop: "10px" }}>
              <Row>
              <Col md='8'>
              <p style={{ textAlign: "justify" }}>
                Passionné par le numérique grâce à mes précédentes expériences
                en startup, j’ai suivi le bootcamp La Capsule en 2022 afin de me
                former à la programmation.
                <span style={{ fontWeight: "bold" }}>
                  Je recherche actuellement mon premier CDI en tant que junior
                </span>
                , de préférence sur des frameworks JS mais je reste ouvert à
                d’autres langages comme Java et PhP.{" "}
              </p>
              </Col>
              <Col md='4'>              
              <img style={{width: '180px'}} src='./images/chevron_anime.gif'/>
            </Col>
              </Row>

              
            </Col>
            <Col xs="12" style={{ display: "flex", justifyContent: "start" }}>
              <Button
                href="https://www.linkedin.com/in/alban-fresil/"
                style={{ backgroundColor: "black" }}
              >
                💬 On discute ?️
              </Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
