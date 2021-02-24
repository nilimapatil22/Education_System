import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ViewTrainingSchedule extends Component {
  state = {
    schedule: {}

  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:7171/api/getStudentSchedule/${this.props.match.params.scheduleId}`
      )
      .then((result) => {
        this.setState({
          schedule: result.data,
        });
      });
  }


  render() {
    return (
      <div className="viewSchedule">
        <h1>
          <span className="badge badge-dark">View Schedule</span>
        </h1>
        <div className="row">
          <Link
            className="btn btn-primary mr-2" align="right" to={"/login/trainingschedulestudent"}>Go Back
            </Link>
        </div>
        <table className="table table-bordered">
          {/* <tr>
            <td>Schedule Id</td>
            <th>{this.state.schedule.scheduleId}</th>
          </tr> */}
          <tr>
            <td>Student Id</td>
            <th>{this.state.schedule.studentId}</th>
          </tr>
          <tr>
            <td>Course Name</td>
            <th>{this.state.schedule.courseName}</th>
          </tr>
          <tr>
            <td>Trainer Name</td>
            <th>{this.state.schedule.trainerName}</th>
          </tr>
          <tr>
            <td>Start Date</td>
            <th>{this.state.schedule.startDate}</th>
          </tr>
          <tr>
            <td>End Date</td>
            <th>{this.state.schedule.endDate}</th>
          </tr>

        </table>


      </div>
    );
  }
}

export default ViewTrainingSchedule;
