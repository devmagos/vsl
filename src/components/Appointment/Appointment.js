import React from 'react'
import './Appointment.css'
// import { Link } from "react-router-dom";
import Header from '../Header/Header';
import VslNav from '../Navbar/Navigation.js';
import SignupForm from '../Signup/Signup';
import Footer from '../Footer/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Appointment() {
  return (
    <div class="container-fluid">
    <Row>
      <Header />
    </Row>

    <Row>
      <VslNav />
    </Row>

       <Row className='form-solicitors'>
                <Col md="6" className="row g-0 rounded overflow-hidden flex-md-row mb-4 h-125 position-relative">
                  <div class="row g-0 p-4 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <Col p="5 d-flex flex-column position-static" className='welcome-text'>
                      <h3 class="m-3 color"><strong>Appointments - Victoria Solicitors!</strong></h3>
                      <p class="card-text m-2 p-3 line-height-3">
                      <strong>
                      We are one of London’s Premier Family Law Firms with a 
                      unique family team of four that specialise in family, 
                      commercial and immigration law.
                      </strong>
                      </p>
                      {/* <div class="m-2">
                        <button class="btn p-3 text-light btncolor btn-sm" type="button"><Link to="../Appointment" class="nav-link">Contact Us</Link></button>
                        <button class="btn p-3 m-2 text-light btncolor btn-sm" type="button"><Link to="../Appointment" class="nav-link">Book an Appointment</Link></button>
                      </div> */}
                    </Col>
                  </div>
                </Col>

              <Col md="6">
                  <SignupForm />
              </Col>
      </Row>

      <Row>
        <Footer />
      </Row>
      </div>
  )
}

export default Appointment;