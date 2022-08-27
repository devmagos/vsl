import React from 'react'
import './FooterNav.css'
// import Container from 'react-bootstrap/Container';
// import { a } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
function FooterNav() {
  return (
          <div class="container-fluid mb-0">
            <footer class="row py-5 my-0 border-top">
              <Navbar className="navcolor" expand="lg">
                  <Navbar.Toggle className="align-toggle" aria-controls="vsl-navbar-Navbar" />
                  <Navbar.Collapse className="" id="vsl-navbar-Navbar">
                    <Navbar className="colornav">
                      <Navbar.Text className="colornav"><a href="#about-us" className="colornav-a">About Us</a></Navbar.Text>
                      <Navbar.Text className="colornav"><a href="#contact-us" className="colornav-a" aria-current="page">Contact Us</a></Navbar.Text>
                      {/* <Navbar.Text className="colornav"><a href="#privacy-policy" className="colornav-a">Privacy Policy</a></Navbar.Text>
                      <Navbar.Text className="colornav"><a href="#disclaimer" className="colornav-a">Disclaimer</a></Navbar.Text> */}
                      <Navbar.Text className="colornav"><a href="#divorce" className="colornav-a">Divorce & Family</a></Navbar.Text>
                      <Navbar.Text className="colornav"><a href="#ukservices" className="colornav-a" aria-current="page">UK Immigration Services</a></Navbar.Text>
                      <Navbar.Text className="colornav"><a href="#services" className="colornav-a" aria-current="page">Law Services</a></Navbar.Text>
                    </Navbar>
                  </Navbar.Collapse>
              </Navbar>
            </footer>
          </div>
      )
    }

export default FooterNav;
