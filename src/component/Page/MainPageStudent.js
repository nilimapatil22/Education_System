import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class MainPageStudent extends Component {
  state = {};
  render() {
    return (
        <form className="mainpage">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">Welcome</a>

            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                
                

                </li>
            </ul>
            </div>
            {/* <Link to="/students/add" className="btn btn-outline-light">
            Add Students
            </Link> */}
            <Link to="/" className="btn btn-outline-light">
            Log Out
            </Link>
            
            </nav>
            <div class="row align-items-center">
              <table className = "table table-striped">
                <tr>
                
                  <td>
                    <div class="col-6">
                      <p><u>Resources</u></p>
                    </div>
                  </td>
                
                  <td>
                    <div class="col-6">
                      <p><u>Career</u></p>
                    </div>
                  </td>
                  <td>
                    <div class="col-6">
                      <p><u>Featured Link</u></p>
                    </div>
                  </td>
              

                </tr>
                <tr>
                  <td>
                  <div class="col-6">
                    <Link to="/login/listofallstudents" className="btn btn-light">My Connect</Link>
                  </div>
                  </td>
                  <td>
                  <div class="col-6">
                    <Link to="/enrollcourse" className="btn btn-light">Enroll Course</Link>
                  </div>
                  </td>
                  <td>
                  <div class="col-6">
                    <Link to="/" className="btn btn-light">Trainer</Link>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>
                  <div class="col-6">
                    {/* <Link to="/" className="btn btn-light">My Connect</Link> */}
                  </div>
                  </td>
                  <td>
                  <div class="col-6">
                    <Link to="/login/trainingschedulestudent" className="btn btn-light">Training Schedule</Link>
                  </div>
                  </td>
                  <td>
                  <div class="col-6">
                     <Link to="/login/messagesstudent" className="btn btn-light">Messages</Link> 
                  </div>
                  </td>
                </tr>
                <tr>
                  <td>
                  <div class="col-6">
                    {/* <Link to="/" className="btn btn-light">My Connect</Link> */}
                  </div>
                  </td>
                  <td>
                  <div class="col-6">
                    <Link to="/login/listofprogressstudent" className="btn btn-light">Progress Details</Link>
                  </div>
                  </td>
                  <td>
                  <div class="col-6">
                      <Link to="/makepayment" className="btn btn-light">Payment</Link>  
                  </div>
                  </td>
                </tr>

              </table>
              </div>
            
            </form>

    );
  }
}

export default MainPageStudent;