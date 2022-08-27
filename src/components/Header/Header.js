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
                  <h1>Victoria Solicitors</h1>
                </span>

                <span>
                  <p>Email address</p>
                  <p>info@victoriasolicitorslimited.co.uk</p>
                </span>

                <span>
                  <p>Speak to an expert</p>
                  <p>+44 1604 344 000</p>
                </span>

                <span>
                  <p>Client reviews</p>
                  <p>4.8/5.0</p>
                </span>
        </div>
      </>
  )
}

export default Header