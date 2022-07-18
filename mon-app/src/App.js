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
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      <Row style={{ marginRight: "10px", marginLeft: "10px" }}>
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
        <Col xs="10" md="8" style={{marginBottom: "10px"}}>
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
              <img width="100px" src="./images/ban-logo.png" alt="Logo Ban" />
            </Col>
            <Col>
              <h1 style={{ textAlign: "Left" }}>
                Hello, 👋 je m’appelle Alban !
              </h1>
              <h5 style={{ textAlign: "Left" }}>
                Je suis développeur web & mobile JS
              </h5>
            </Col>
            <Col xs="10" style={{ display: "flex", justifyContent: "start" }}>
              <img
                style={{ marginRight: "10px" }}
                width="50px"
                src="./images/javascript.png"
                alt="logo javasctipt"
              />
              <img
                style={{ marginRight: "10px" }}
                width="50px"
                src="./images/react.png"
                alt="logo react"

              />
              <img
                style={{ marginRight: "10px" }}
                width="50px"
                src="./images/redux.png"
                alt="logo redux"
              />
              <img width="50px" 
              src="./images/mongodb.png" 
              alt="logo mongoDB"
              />
            </Col>
            <Col xs="12" style={{ marginTop: "10px" }}>
              <Row>
                <Col md="8">
                  <p style={{ textAlign: "justify" }}>
                    Passionné par le numérique grâce à mes précédentes
                    expériences en startup, j’ai suivi le bootcamp La Capsule en
                    2022 afin de me former à la programmation.
                    <span style={{ fontWeight: "bold" }}>
                      Je recherche actuellement mon premier CDI en tant que
                      junior
                    </span>
                    , de préférence sur des frameworks JS mais je reste ouvert à
                    d’autres langages comme Java et PhP.{" "}
                  </p>
                </Col>
                <Col md="4">
                  <img
                    style={{ width: "180px" }}
                    src="./images/chevron_anime.gif"
                    alt="chevron animé"

                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs="12"
              style={{
                display: "flex",
                justifyContent: "start",
                marginBottom: "10px",
              }}
            >
              <Button
                href="https://www.linkedin.com/in/alban-fresil/"
                style={{ backgroundColor: "black" }}
              >
                💬 On discute ?️
              </Button>
            </Col>
            </Row>

<Row style={{marginTop: "70px"}}>
              <h1 style={{ textAlign: "Left" }}>
                  ✏️ Projets récents
              </h1>
            <Col xs="12" md="6" className="p-2">
              <Card>
                <video
                  autoPlay ="autoplay"
                  alt="illustration du projet"
                  src="https://dms.licdn.com/playlist/C4E05AQHYQKXDUePYhA/mp4-720p-30fp-crf28/0/1656884814405?e=1658728800&v=beta&t=eRd_Ht3rAHucNBtNCBLkwNc5-SV_SrU4G-dotNqWWzE"
                  width="100%"
                />
                <CardText>
                <span style={{fontWeight:"bold"}}>Technos :</span><br/>
                   <Badge className="mx-1" color="success">Node.js</Badge>
                   <Badge className="mx-1" color="primary">Express</Badge>
                   <Badge className="mx-1" color="success">MongoDB</Badge>
                   </CardText>
                <CardBody>
                  <CardTitle tag="h5">Ticketac</CardTitle>
                  <CardText>Hackaton en duo avec <a>Xavier Mélinand</a>. Front & Back réalisés en 2 jour.</CardText>
                  <Button
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:ugcPost:6949478093929525248?utm_source=linkedin_share&utm_medium=member_desktop_share&utm_content=post"
                    style={{ backgroundColor: "black" }}
                      >
                    👀 Jeter un oeil
                  </Button> 

                </CardBody>
              </Card>
            </Col>
            <Col xs="12" md="6" className="p-2">
              <Card>
                <img
                  alt="illustration du projet"
                  src="./images/homepage_dmb_brasserie.png"
                  width="100%"
                />
                <CardText>
                <span style={{fontWeight:"bold"}}>Technos :</span><br/>
                   <Badge className="mx-1" color="primary">Wordpress</Badge>
                   <Badge className="mx-1" color="warning">Googe Analytics</Badge>
                   </CardText>
                <CardBody>
                  <CardTitle tag="h5">DMB Brasserie</CardTitle>
                  <CardText>Site réalisé avec Wordpress en 2019 pour mon projet de fabrication de cuves de brassage pro. </CardText>
                  <Button
                    target="_blank"
                    href="https://dmb-brasserie.com"
                    style={{ backgroundColor: "black" }}
                      >
                    👀 Jeter un oeil
                  </Button> 

                </CardBody>
              </Card>
            </Col>
</Row>
        </Col>
      </Container>
      
    </div>
  );
}

export default App;
