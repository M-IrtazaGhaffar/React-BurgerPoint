import React from 'react'
import "./Nav.css";
import logo from "../images/favicon.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav">
        <div className='nav-1'>
          <img src={logo} alt="logo" />
          <h1>
            Burger House
          </h1>
        </div>
        <div className="nav-2">
          <Link to='*'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/feedback'>Feedback</Link>
        </div>
      </div>
    </>
  )
}

export default Nav