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
      <div className="addcourse">
        <h1>
          <span className="badge badge-dark">View Course</span>
        </h1>
        <div className="row">
          <Link
            className="btn btn-primary mr-2"
            to={"/listofcourse"}>Go Back
                    </Link>
        </div>

        <table className="table table-bordered">
          <tr>
            <td><b>Course Id</b></td>
            <th>{this.state.course.courseId}</th>
          </tr>
          <tr>
            <td><b>Course Name</b></td>
            <th>{this.state.course.courseName}</th>
          </tr>
          <tr>
            <td><b>Course Fee(INR)</b></td>
            <th>{this.state.course.fee}</th>
          </tr>
          <tr>
            <td><b>Course Duration(Days)</b></td>
            <th>{this.state.course.duration}</th>
          </tr>

        </table>
      </div>
    );
  }
}

export default ViewCourse;




