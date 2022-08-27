import React from 'react'
import './Navigation.css'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function VslNav() {
  return (
      <Container fluid>
    <Navbar className="navcolor" expand="lg">
        <Navbar.Toggle className="align-toggle" aria-controls="vsl-navbar-Navbar" />
        <Navbar.Collapse className="" id="vsl-navbar-Navbar">
          <Navbar className="colornav">
            <NavDropdown title="Services" href="../Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
            <Link to="../CommercialServices" className="drop">Commercial Services</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <Link to="../ImmigrationLegalServices" className="drop">Immigration Legal Services</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
            <Link to="../UKMigraintLegalSupport" className="drop">UK Migraint Legal Support</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
            <Link to="../AdviceAndRepresentationsForUK" className="drop">Advice and Representations for UK</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
            <Link to="../ImmigrationApplication" className="drop">Immigration Application</Link>
            </NavDropdown.Item>
            </NavDropdown>

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
