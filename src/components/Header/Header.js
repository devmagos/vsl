import React from 'react'
import Vsl from "../images/vsl.PNG"

function Header() {
  return (
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-0 mb-0">
          <a href="/" class="d-flex align-items-center mb-0 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="12"><use href="#bootstrap"/></svg>
            <img src={Vsl} alt="vsl logo" />
            <span class="fs-4">Victoria Solicitors</span>
          </a>
        </header>
      </div>
  )
}

export default Header