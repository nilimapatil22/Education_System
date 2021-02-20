import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import AddCourse from "../courses/AddCourse";
class MainPage extends Component {
  state = {};
  render() {
    return (
        <form className="mainpage">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">WelCome</a>

            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                
                

                </li>
            </ul>
            </div>
            {/* <Link to="/students/add" className="btn btn-outline-light">
            Add Students
            </Link> */}
            <Link className="btn btn-outline-light" exact to="/login/enroll">
                    Back
                </Link>
            <Link to="/" className="btn btn-outline-light">
            Log Out
            </Link>
            
            </nav>
            <br></br>
            <form method="get" action="/login/enroll/payment">
            <button className="btn-lg" >Enroll To course</button>
                </form><br/>
            
            </form>

    );
  }
}

export default MainPage;