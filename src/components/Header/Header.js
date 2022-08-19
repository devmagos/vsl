import React from 'react'
import './Header.css'
import Vsl from "../images/vsl.PNG"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <div class="container">
        <header class="d-flex flex-wrap justify-content-space-between">
        <Row>
          <Col md="3">
          <a href="/" class="d-flex text-dark text-decoration-none">
            <img src={Vsl} alt="vsl logo" />
            <span class="fs-5 m-2">Victoria Solicitors</span>
          </a>
          </Col>
          <Col md="1"></Col>
          <Col md="8" class="d-flex justify-content-justify">
            <Row md="12" class="d-flex align-items-center">
              <Col md="4">
                <p>Email address</p>
                <p>info@victoriasolicitorslimited.co.uk</p>
              </Col>
              <Col md="2"></Col>
              <Col md="4">
                <p>Speak to an expert</p>
                <p>+44 1604 344 000</p>
              </Col>
              <Col md="2">
              <p>Client reviews</p>
              <p>4.8/5.0</p>
              </Col>
            </Row>
          </Col>
        </Row>
        </header>
      </div>
  )
}

export default Header