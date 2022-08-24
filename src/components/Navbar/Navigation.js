import React from 'react'
import './Navigation.css'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function VslNav() {
  return (
      <Container fluid mb="0">
    <Navbar className="navcolor" expand="lg">
        <Navbar.Toggle className="align-toggle" aria-controls="vsl-navbar-Navbar" />
        <Navbar.Collapse className="" id="vsl-navbar-Navbar">
          <Navbar className="me-auto colornav">
            <Navbar.Text className="colornav"><Link to="../Services" className="colornav-link">Services</Link></Navbar.Text>
            <Navbar.Text className="colornav"><Link to="../DivorceFamily" className="colornav-link">Divorce / Family</Link></Navbar.Text>
            <Navbar.Text className="colornav"><Link to="../ImmigrationServices" className="colornav-link">Immigration Services</Link></Navbar.Text>
            <Navbar.Text className="colornav"><Link to="../ImmigrationApplications" className="colornav-link">Immigration Applications</Link></Navbar.Text>
            <Navbar.Text className="colornav"><Link to="../WorkVisas" className="colornav-link">Work Visas</Link></Navbar.Text>
            <Navbar.Text className="colornav"><Link to="../ChallengeRefusals" className="colornav-link">Challenge Refusals</Link></Navbar.Text>
            <Navbar.Text className="colornav"><Link to="../ContactUs" className="colornav-link">Contact Us</Link></Navbar.Text>
          </Navbar>
        </Navbar.Collapse>
    </Navbar>
      </Container>
  );
}

export default VslNav;
