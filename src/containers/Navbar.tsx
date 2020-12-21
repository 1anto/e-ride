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

      <nav className="custom-navbar custom-navbar-light">
        <ul className="nav custom-navbar-nav">
          <li>
            <Link to="/">
              <button className="nav-btn">Electric Cars</button>
              </Link>
          </li>
          <li>
            <Link to="/suitability-tool">
              <button className="nav-btn">Suitability Tool</button>
            </Link>
          </li>
          <li>
            <Link to="/my-bookings">
              <button className="nav-btn">My bookings</button>
            </Link>
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