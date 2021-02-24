import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ViewStudent extends Component {
  state = {
    user: {

    }
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:7171/api/getStudent/${this.props.match.params.userId}`
      )
      .then((result) => {
        this.setState({
          user: result.data,
        });
      });
  }

  render() {
    return (
      <div className="viewUser">
        <h1>
          <span className="badge badge-dark">View User</span>
        </h1>
        <div className="row">
          <Link
            className="btn btn-primary mr-2"
            to={"/login/listofallstudents"}>Go Back
                    </Link>
        </div>

        <table className="table table-bordered">

          <tr>
            <td>First Name</td>
            <th>{this.state.user.firstName}</th>
          </tr>
          <tr>
            <td>Last Name</td>
            <th>{this.state.user.lastName}</th>
          </tr>
          <tr>
            <td>Email</td>
            <th>{this.state.user.email}</th>
          </tr>

          <tr>
            <td>Phone Number</td>
            <th>{this.state.user.phoneNumber}</th>
          </tr>
          <tr>
            <td>Address</td>
            <th>{this.state.user.address}</th>
          </tr>
          {/* <tr>
            <td>Role Type</td>
            <th>{this.state.user.roleType}</th>
          </tr> */}
        </table>
      </div>
    );
  }
}

export default ViewStudent;