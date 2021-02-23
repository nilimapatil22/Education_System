import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ViewCourse extends Component {
  state = {
    course: {
    
    }
  };
  componentDidMount() {
     axios
       .get(
         `http://localhost:7171/api/getCourse/${this.props.match.params.courseId}`
       )
       .then((result) => {
         this.setState({
          course: result.data,
         });
       });
   }

  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark">View Course</span>
        </h1>
        <div className = "row">
                    <Link 
                        className="btn btn-primary mr-2"
                         to={"/listofcourse"}>Go Back
                    </Link>                 
                </div>

        <table className="table table-bordered">
          <tr>
            <td>Course Id</td>
            <th>{this.state.course.courseId}</th>
          </tr>
          <tr>
            <td>Course Name</td>
            <th>{this.state.course.courseName}</th>
          </tr>
          <tr>
            <td>Course Fee (INR)</td>
            <th>{this.state.course.fee}</th>
          </tr>
          <tr>
            <td>Course Duration (Days)</td>
            <th>{this.state.course.duration}</th>
          </tr>
          
        </table>
      </div>
    );
  }
}

export default ViewCourse;




