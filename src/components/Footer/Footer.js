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
              <p>
                Sunrise Solicitors is the trading name of Sunrise Solicitors Ltd (company registration no. 6405492). 
                Sunrise Solicitors Offices are regulated by SRA under SRA ID 490903 (London Office) and SRA ID 645256 
                (Manchester Office). Sunrise Solicitors are also members of Immigration Law Practitioners' Association (ILPA).
              </p>

              <p>
                Copyright © 2020 Sunrise Solicitors, All rights reserved
              </p>

              <form class="float-end">
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <button class="btn text-light bg-success btn-lg position-sticky" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    Leave a message
                </button>
                </div>
              </form>
          </div>
          
        </footer>
      </div>
  )
}

export default Footer