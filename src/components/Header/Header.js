import React from 'react'
import './Header.css'
import Vsl from "../Images/vsl.png"

function Header() {
  return (
    <div class="container">
        <header class="d-flex flex-wrap p-2">
        <div class="d-flex text-decoration-none fsize">
          <div>
          <a href="/" class="d-flex text-dark text-decoration-none">
            <img src={Vsl} className='logosize' alt="victoria solicitors logo" />
            <h1><span class="">Victoria Solicitors</span></h1>
          </a>
          </div>

            <div class="d-flex fsize" id='fsize'>
              <div>
                <p>Email address</p>
                <p>info@victoriasolicitorslimited.co.uk</p>
              </div>

              <div>
                <p className='expert-text'>Speak to an expert</p>
                <p className='expert-text'>+44 1604 344 000</p>
              </div>

              <div>
              <p>Client reviews</p>
              <p>4.8/5.0</p>
              </div>
          </div>
        </div>
        </header>
      </div>
  )
}

export default Header