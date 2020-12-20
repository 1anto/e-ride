import React from 'react'
const Link = require("react-router-dom").Link;

function Navbar() {
    return (
        <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    );
  }
  export default Navbar;