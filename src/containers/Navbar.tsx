import React from 'react';
import logo from '../assets/logo.png';
const Link = require("react-router-dom").Link;

function Navbar(props: any) {
  const {handleLogout} = props;

  return (
    <>
      <Link to="/" className="app-logo">
        <img src={logo} alt="e-ride logo"/>
        <h1>e-Ride</h1>
      </Link>

      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <button className="nav-btn selected">Electric Cars</button>
          </li>
          <li>
            <button className="nav-btn">Suitability Tool</button>
          </li>
          <li>
            <button className="nav-btn">My bookings</button>
          </li>
          <li>
            <button className="nav-btn" onClick={handleLogout()}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;