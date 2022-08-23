import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Vsl from "../images/vsl.PNG"

function Footer() {
  return (
    
      <div class="col-md-12 mb-0">
        <footer class="row py-5 my-0 border-top">
        <Container fluid mb="0">
          <Navbar className="navcolor" expand="lg">
              <Navbar.Toggle className="align-toggle" aria-controls="vsl-navbar-Navbar" />
              <Navbar.Collapse className="" id="vsl-navbar-Navbar">
                <Navbar className="me-auto colornav">
                        {/* <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#about-us">About Us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#contact-us">Contact Us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#privacy-policy">Privacy Policy</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#disclaimer">Disclaimer</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#divorce">Divorce & Family</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#services">Law Services</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#services">Uk Immigration Services</a>
                          </li> */}
                  <Navbar.Text className="colornav"><Link to="#about-us" className="colornav-link">About Us</Link></Navbar.Text>
                  <Navbar.Text className="colornav"><Link to="#divorce" className="colornav-link">Divorce & Family</Link></Navbar.Text>
                  <Navbar.Text className="colornav"><Link to="#services" className="colornav-link" aria-current="page">UK Immigration Services</Link></Navbar.Text>
                  <Navbar.Text className="colornav"><Link to="#contact-us" className="colornav-link" aria-current="page">Contact Us</Link></Navbar.Text>
                  <Navbar.Text className="colornav"><Link to="#services" className="colornav-link" aria-current="page">Law Services</Link></Navbar.Text>
                  <Navbar.Text className="colornav"><Link to="../Appointment" className="colornav-link">Work Visas</Link></Navbar.Text>
                  <Navbar.Text className="colornav"><Link to="../Appointment" className="colornav-link">Challenge Refusals</Link></Navbar.Text>
                  <Navbar.Text className="colornav"><Link to="../Appointment" className="colornav-link">Contact Us</Link></Navbar.Text>
                </Navbar>
              </Navbar.Collapse>
          </Navbar>
        </Container>

      {/* GOOGLE MEET LINK => https://meet.google.com/qom-pdvg-bgm */}

            {/* <div class="col-md-12 mb-4">
                <nav class="navbar navbar-expand bcolor text-light" aria-label="vsl footer nav">
                    <div class="container-fluid">
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                
                      <div class="collapse navbar-collapse p-3" id="navbarsExample02">
                        <ul class="navbar-nav me-auto">
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#about-us">About Us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#contact-us">Contact Us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#privacy-policy">Privacy Policy</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#disclaimer">Disclaimer</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#divorce">Divorce & Family</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#services">Law Services</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#services">Uk Immigration Services</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
            </div> */}

            
          <div class="col-md-3">
            <img src={Vsl} alt="vsl logo" />
          </div>
      
          <div class="col-md-9">
              <div class="row row-md-12 p-1">
              <div class="col-md-6">
              <p>CALL NOW FOR A FRIENDLY CHAT:</p>
              <p>Main Phone: +44 1604 344 000 Or Drop Us a Line:</p>
              <p><a href="#">info@victoriasolicitorslimited.co.uk</a></p>
              </div>
              
              <div class="col-md-6">
              <p>Visit Our UK Office: 17, Black Cat Drive, Northampton, NN5 4 EA</p>
              <p>
              Africa Contact: Victoria Chambers (Enquiries only) Main Phone: 
              +2348099243347 +234 8184934865
              </p>
              </div>
              </div>

              <div class="row row-md-12 mt-3">
              <p class="col-md-3"></p>
              <p class="col-md-6">
                Copyright © 2020 Victoria Solicitors, All rights reserved
              </p>
              <p class="col-md-3"></p>

              </div>
          </div>
          
        </footer>
      </div>
  )
}

export default Footer