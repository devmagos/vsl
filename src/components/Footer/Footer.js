import React from 'react'
import Vsl from "../images/vsl.PNG"

function Footer() {
  return (
    
      <div class="col-md-12 mb-0">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-0 border-top">
            <div class="col-md-12 mb-4">
                <nav class="navbar navbar-expand navbar-success bg-success text-light" aria-label="Second navbar example">
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
                            <a class="nav-link text-light" aria-current="page" href="#">About Us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Contact Us</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Privacy Policy</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Disclaimer</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Divorce & Family</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Law Services</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Uk Immigration Services</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
            </div>

            
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