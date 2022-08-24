import React from 'react'
import './Footer.css'
import FooterNav from '../FooterNav/FooterNav';
import Iframe from '../Iframe/Iframe';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
    <FooterNav />
      <div class="col-md-12 mb-0">
        <footer class="row my-0">
          <div class="col-md-3">
            <Iframe />
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
    </>
  )
}

export default Footer