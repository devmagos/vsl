import React from 'react'
import './JudicialReviewInTheUpperTribunal.css'
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import VslNav from '../Navbar/Navigation.js';
import SignupForm from '../Signup/Signup';
import Footer from '../Footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function JudicialReviewInTheUpperTribunal() {
  return (
    <div class="container-fluid">
    <Row>
      <Header />
    </Row>

    <Row>
      <VslNav />
    </Row>

       <Row className='form-solicitors'>
                <Col md="5" className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-125 position-relative">
                  <div class="row g-0 p-4 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <Col p="5 d-flex flex-column position-static justify-items-justify" className='welcome-text'>
                      <h2 class="color"><strong>Judicial Review In TheUpper Tribunal</strong></h2>
                      <p class="card-text text-align-justify line-height-3">
                      <strong>
                      We are one of London’s Premier Family Law Firms with a 
                      unique family team of four that specialise in family, 
                      commercial and immigration law.
                      </strong>
                      </p>
                      <div class="justify-content-justify">
                        <button class="btn p-3 m-1 text-light btncolor btn-sm" type="button"><Link to="../JudicialReviewInTheUpperTribunal" class="nav-link">Contact Us</Link></button>
                        <button class="btn p-3 m-1 text-light btncolor btn-sm" type="button"><Link to="../JudicialReviewInTheUpperTribunal" class="nav-link">Book an Appointment</Link></button>
                      </div>
                    </Col>
                  </div>
                </Col>

              <Col md="7">
                  <SignupForm />
              </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
      </div>
  )
}

export default JudicialReviewInTheUpperTribunal;