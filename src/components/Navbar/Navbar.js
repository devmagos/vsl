import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    // NAVBAR SECTION  
    
      <div className='nav-width'>
        <nav class="navbar navcolor d-flex container-fluid" aria-label="Second navbar" style={{padding: "1.5rem",}}>
          <Link to="../Home" class="nav-link">Home</Link> 
          <Link to="../Appointment" class="nav-link">Services</Link> 
          <Link to="../Appointment" class="nav-link">Divorce/Family</Link> 
          <Link to="../Appointment" class="nav-link">Immigration Services</Link> 
          <Link to="../Appointment" class="nav-link">Immigration Applications</Link> 
          <Link to="../Appointment" class="nav-link">Family Visas</Link> 
          <Link to="../Appointment" class="nav-link">Work Visas</Link>
          <Link to="../Appointment" class="nav-link">Challenge Refusals</Link>
          <Link to="../Appointment" class="nav-link">Contact Us</Link>
        </nav>
    </div>

  )
}

export default Navbar