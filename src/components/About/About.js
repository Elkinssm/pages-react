import React, { Component } from "react";
import "./styles.css";
import img from "./52393397.png";
import Alert from "react-bootstrap/Alert";
import CustomAccordion from "../elements/CustomAccordion";
import { Container, Col, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    this.state = {
      vCard: [
        { title: "Titulo 1", text: "Texto 1" },
        { title: "Titulo 2", text: "Texto 2" },
        { title: "Titulo 3", text: "Texto 3" }
      ]
    };

    return (
      <div className="about">
        <div className="txt">
          <Alert variant="light">My profile</Alert>
          <Alert variant="success">Hi!</Alert>
          <Alert variant="primary">My name is Elkin Silva Manrique</Alert>
        </div>
        <div className="img">
          <img src={img} alt="profile"></img>
        </div>

        <div>
          <h1>Accordion Bootstrap</h1>

          <CustomAccordion tabs={this.state.vCard}></CustomAccordion>
        </div>
        <h1> Container </h1>
        <Container>
          <Row>
            <Col xs ={12} md={12} lg={6} className={"col"}>1 of 2</Col>
            <Col xs ={12} md={12} lg={6} className={"col"}>2 of 2</Col>
          </Row>
          <Row>
            <Col xs ={12} md={12} lg={1} className={"col"}>2 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>1 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>3 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>4 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>5 of 12</Col> 
            <Col xs ={12} md={12} lg={1} className={"col"}>6 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>7 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>8 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>9 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>10 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>11 of 12</Col>
            <Col xs ={12} md={12} lg={1} className={"col"}>12 of 12</Col>
          </Row>
          <Row>
            <Col xs ={12} md={12} lg={2} className={"col"}>2 of 12</Col>
            <Col xs ={12} md={12} lg={2} className={"col"}>1 of 12</Col>
            <Col xs ={12} md={12} lg={3} className={"col"}>3 of 12</Col>
            <Col xs ={12} md={12} lg={3} className={"col"}>4 of 12</Col>
            <Col xs ={12} md={12} lg={2} className={"col"}>5 of 12</Col> 
            
          </Row>
        </Container>
      </div>
    );
  }
}
