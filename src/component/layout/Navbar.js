import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
    
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">Student Education App</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contacts
              </NavLink>
             
            </li>
          </ul>
        </div>
      </nav>
     
    
    );
  }
}

export default Navbar;
