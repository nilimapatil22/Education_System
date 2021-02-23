import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

class Welcome extends Component {
    state = {};
    render() {
      return (
          <form className="welcome">
              <h2>Welcome!</h2><br/><br/>
              <div class="d-flex justify-content-center">
                
                    <Link to="/loginstudent"  className="btn btn-primary mr-2" >Student</Link>
               
              
                    <Link to="/loginadmin"  className="btn btn-primary mr-2" >Admin</Link>
             
              </div>

          </form>        
      )}
}

export default Welcome
