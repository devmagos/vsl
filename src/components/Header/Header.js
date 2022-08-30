import React from 'react'
import './Header.css'
import Vsl from "../Images/vsl.png"
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
        <div class="header-text">

                <span>
                  <Link to="/">
                      <img src={Vsl} className='logosize' alt="victoria solicitors logo" />
                  </Link>
                </span>

                <span>
                  <h1><strong>VICTORIA SOLICITORS LIMITED</strong></h1>
                </span>

                <span>
                  <p><strong>Email address</strong></p>
                  <p><strong>info@victoriasolicitorslimited.co.uk</strong></p>
                </span>

                <span>
                  <p><strong>Speak to an expert</strong></p>
                  <p><strong>+44 1604 344 000</strong></p>
                </span>

                <span>
                  <p><strong>Client reviews</strong></p>
                  <p><strong>4.8/5.0</strong></p>
                </span>
        </div>
      </>
  )
}

export default Header