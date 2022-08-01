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
import { Link } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Col xs="10" md="8" style={{ marginBottom: "10px" }}>
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
              <img width="50px" src="./images/mongodb.png" alt="logo mongoDB" />
            </Col>
            <Col xs="12" style={{ marginTop: "10px" }}>
              <Row>
                <Col md="8">
                  <p style={{ textAlign: "justify" }}>
                    Passionné par le numérique grâce à mes précédentes
                    expériences en startup, j'ai suivi le bootcamp La Capsule en
                    2022 afin de me former à la programmation.
                    <span style={{ fontWeight: "bold" }}>
                      Je recherche actuellement mon premier CDI en tant que
                    </span>
                    , de préférence sur des frameworks JS mais je reste ouvert à
                    d'autres langages comme Java et PhP.{" "}
                  </p>
                  <div
                    style={{
                      backgroundColor: "ghostwhite",
                      padding: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <span style={{ fontSize: "20px", paddingRight: "10px" }}>
                      📄
                    </span>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1SjLx734w34OaoU684A7ppGIRSP4FYmM6/view?usp=sharing"
                    >
                      Consultez mon CV
                    </a>
                  </div>
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
          <Row style={{ marginTop: "30px" }}>
            <h1 style={{ textAlign: "Left" }}>✏️ Articles</h1>
            <Col xs="12" style={{ paddingRight: "30px" }}>
              <div style={{ backgroundColor: "ghostwhite", padding: "10px" }}>
                <span style={{ fontSize: "40px" }}>✌️ </span>
                <Link
                  style={{ fontSize: "20px", color: "black" }}
                  to="/post/intro"
                >
                  Cheat Sheet - Set Up Commands for Git, Express, React & React
                  Native
                </Link>
              </div>
            </Col>
            <Row style={{ marginTop: "30px" }}>
              <h1 style={{ textAlign: "Left" }}>🛠 Projets récents</h1>
              <Col xs="12" md="6" className="p-2">
                <Card>
                  <img
                    alt="Capture d'écran du projet ticketac"
                    src="./images/ticketac-screenshot.png"
                    width="100%"
                  />
                  <CardText>
                    <div style={{ padding: "12px" }}>
                      <span style={{ fontWeight: "bold" }}>Technos :</span>
                      <br />
                      <Badge className="mx-1" color="success">
                        Node.js
                      </Badge>
                      <Badge className="mx-1" color="primary">
                        Express
                      </Badge>
                      <Badge className="mx-1" color="success">
                        MongoDB
                      </Badge>
                    </div>
                  </CardText>
                  <CardBody
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <CardTitle tag="h5">Ticketac</CardTitle>
                    <CardText>
                      Hackaton en duo avec{" "}
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/xavier-melinand-169306238/"
                      >
                        Xavier Mélinand
                      </a>
                      . Front & Back réalisés en 2 jour.
                    </CardText>
                    <Button
                      target="_blank"
                      href="https://youtu.be/oVz9McqWkXw"
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
                    alt="Capture d'écran du projet ticketac"
                    src="./images/morningnews-screenshot.png"
                    width="100%"
                  />
                  <CardText>
                    <div style={{ padding: "12px" }}>
                      <span style={{ fontWeight: "bold" }}>Technos :</span>
                      <br />
                      <Badge className="mx-1" color="success">
                        Node.js
                      </Badge>
                      <Badge className="mx-1" color="primary">
                        Express
                      </Badge>
                      <Badge className="mx-1" color="primary">
                        React
                      </Badge>
                      <Badge className="mx-1" color="success">
                        MongoDB
                      </Badge>
                      <Badge className="mx-1" color="danger">
                        NewsAPI
                      </Badge>
                    </div>
                  </CardText>
                  <CardBody
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <CardTitle tag="h5">Morning News</CardTitle>
                    <CardText>
                      Deuxième projet React avec utilisation de{" "}
                      <a target="_blank" href="https://newsapi.org/">
                        News API
                      </a>
                    </CardText>
                    <Button
                      target="_blank"
                      href="https://youtu.be/5PAjhOk7XLY"
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
                    alt="Capture d'écran du projet DMB Brasserie"
                    src="./images/homepage_dmb_brasserie.png"
                    width="100%"
                  />
                  <CardText>
                    <div style={{ padding: "12px" }}>
                      <span style={{ fontWeight: "bold" }}>Technos :</span>
                      <br />
                      <Badge className="mx-1" color="primary">
                        Wordpress
                      </Badge>
                      <Badge className="mx-1" color="warning">
                        Google Analytics
                      </Badge>
                    </div>
                  </CardText>
                  <CardBody
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <CardTitle tag="h5">DMB Brasserie</CardTitle>
                    <CardText>
                      Site réalisé avec Wordpress en 2019 pour mon projet de
                      fabrication de cuves de brassage pro.{" "}
                    </CardText>
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
              <Col xs="12" md="6" className="p-2">
                <Card>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <img
                      alt="Capture d'écran du projet LocaPic"
                      src="./images/locapic-screenshot.jpg"
                      style={{ maxHeight: "250px", maxWidth: "120px" }}
                    />
                  </div>

                  <CardText>
                    <br />
                    <div style={{ padding: "12px" }}>
                      <span style={{ fontWeight: "bold" }}>Technos :</span>
                      <Badge className="mx-1" color="primary">
                        React Native
                      </Badge>
                      <Badge className="mx-1" color="primary">
                        Express
                      </Badge>
                      <Badge className="mx-1" color="secondary">
                        Expo
                      </Badge>
                      <Badge className="mx-1" color="secondary">
                        Redux
                      </Badge>
                      <Badge className="mx-1" color="danger">
                        websocket.io
                      </Badge>
                    </div>
                  </CardText>
                  <CardBody
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <CardTitle tag="h5">LocaPic</CardTitle>
                    <CardText>
                      Application réalisée en React Native sur 4 jours.
                      <br />
                      Features :
                      <br />- Géolocalisation de plusieurs users - Chat en
                      direct via websocket.io - Ajout de POI et du username en
                      stockage local
                    </CardText>
                    <Button
                      target="_blank"
                      href="https://youtube.com/shorts/xTN7AmpGaMY?feature=share"
                      style={{ backgroundColor: "black" }}
                    >
                      👀 Jeter un oeil
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Home;
