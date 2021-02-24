import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ViewMessageStudent extends Component {
  state = {
    message: {

    }
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:7171/api/getStudentMessage/${this.props.match.params.messageId}`
      )
      .then((result) => {
        this.setState({
          message: result.data,
        });
      });
  }

  render() {
    return (
      <div className="viewMessage">
        <h1>
          <span className="badge badge-dark">View Message</span>
        </h1>
        <div className="row">
          <Link
            className="btn btn-primary mr-2" align="right" to={"/login/messagesstudent"}>Go Back
            </Link>
        </div>
        <table className="table table-bordered">
          {/* <tr>
            <td>Message Id</td>
            <th>{this.state.message.messageId}</th>
          </tr> */}
          <tr>
            <td>Message</td>
            <th>{this.state.message.message}</th>
          </tr>
          <tr>
            <td>Student Id</td>
            <th>{this.state.message.studentId}</th>
          </tr>

          <tr>
            <td>Created Date</td>
            <th>{this.state.message.createdDate}</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default ViewMessageStudent;
