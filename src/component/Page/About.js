import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";
export default class About extends Component {
    render() {
        return (
            <div className="aboutus">
                <h1>About Us</h1>
              <h6>We have to become a learning society, committed to quality education from early childhood right through to re-training in later life.</h6>
           <Link to ="/contact">Contact Us</Link>
           
            </div>
        )
    }
}
