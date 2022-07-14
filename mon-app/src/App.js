// import logo from "./images/ban-logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Col, Row, Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
      <Row  style={{display: 'flex', justifyContent: 'start', marginTop: '10px'}}>
          <Col xs="12" style={{display: 'flex', justifyContent: 'start'}}>
          <p style={{fontWeight: "bold"}}>alban fresil</p>
          </Col>
          <Col xs="12" style={{display: 'flex', justifyContent: 'start', marginLeft: "-6px"}}>
          <img width="100px" src="./images/ban-logo.png"/>
          </Col>
          <Col>
          <h1 style={{textAlign: 'Left'}}>Hello, 👋  je m’appelle Alban !</h1>
          <h5 style={{textAlign: 'Left'}}>Je suis développeur web full stack </h5>
          </Col>
          <Col xs="12" style={{display: 'flex', justifyContent: 'start'}}>
          <img style={{marginRight: '10px'}} width="50px" src="./images/javascript.png"/>
          <img style={{marginRight: '10px'}} width="50px" src="./images/react.png"/>
          <img style={{marginRight: '10px'}} width="50px" src="./images/redux.png"/>
          <img width="50px" src="./images/mongodb.png"/>
          </Col>
          <Col xs="12" md="6" style={{ marginTop: '10px'}}>
          <p style={{textAlign: 'justify'}}>Passionné par le numérique grâce à mes précédentes expériences en startup,  
          j’ai suivi le bootcamp La Capsule en 2022 afin de me former à la programmation. 
          <span style={{fontWeight:'bold'}}>Je recherche actuellement mon premier CDI en tant que junior</span>, de préférence sur des frameworks JS mais je reste ouvert à d’autres langages comme Java et PhP. </p>
          
          </Col>
          <Col xs="12" style={{display: 'flex', justifyContent: 'start'}}>
          <Button href="https://www.linkedin.com/in/alban-fresil/"
          style={{backgroundColor:'black'}}
          >
        💬  On discute ?️           
        </Button>
          </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
