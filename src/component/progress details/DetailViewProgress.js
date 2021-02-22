import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class DetailviewProgress extends Component {
  state = {
    progress: {}
    
  };
   componentDidMount() {
     axios
       .get(
         `http://localhost:7171/api/getProgressDetailsById/${this.props.match.params.gradeId}`
       )
       .then((result) => {
         this.setState({
          progress: result.data,
         });
       });
   }


  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark"> Progress Details</span>
        </h1>
        <div className = "row">  
            <Link 
                className="btn btn-primary mr-2" align ="right" to={"/login/listofprogress"}>Go Back
            </Link>              
        </div>
        <table className="table table-bordered">
          <tr>
            <td>Grade Id</td>
            <th>{this.state.progress.gradeId}</th>
          </tr>
          <tr>
            <td>Grade</td>
            <th>{this.state.progress.grade}</th>
          </tr>
          <tr>
            <td>Course Id</td>
            <th>{this.state.progress.courseId}</th>
          </tr>
          <tr>
            <td>Admin Id</td>
            <th>{this.state.progress.adminId}</th>
          </tr>
         
          <tr>
            <td>Student Id</td>
            <th>{this.state.progress.studentId}</th>
          </tr>

        </table>

       
      </div>
    );
  }
}

export default DetailviewProgress;