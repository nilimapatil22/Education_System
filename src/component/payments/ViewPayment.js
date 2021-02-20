import React, { Component } from "react";
import axios from "axios";
class ViewPayment extends React.Component {
  state = {
  
     paymentData:[]
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:7171/api/getAllPayment`
      )
      .then((result) => {
        this.setState({
          paymentData: result.data,
        });
      });
  }

  homePage = (event) => {
    // event.preventDefault();
    // alert("send to home page");
    this.props.history.push("/getAllPayment");
  };
  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark">View Payment</span>
        </h1>
        <table className="table table-bordered">
          <tr>
            <td>Payment Id</td>
            <th>{this.state.paymentData.paymentId}</th>
          </tr>
          <tr>
            <td>Payment amount</td>
            <th>{this.state.paymentData.amount}</th>
          </tr>
          <tr>
            <td>Payment Status</td>
            <th>{this.state.paymentData.paymentStatus}</th>
          </tr>
          <tr>
            <td>Payment Type</td>
            <th>{this.state.paymentData.paymentType}</th>
          </tr>
          <tr>
            <td>Student ID</td>
            <th>{this.state.paymentData.studentId}</th>
          </tr>
        </table>

        <div className="form-group">
          <button className="btn btn-primary" onClick={this.homePage}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default ViewPayment;
