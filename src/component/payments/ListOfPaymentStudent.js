import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ListOfPaymentStudent extends React.Component {
  state = {

    paymentData: []
  }

  editPayment(paymentId) {
    this.props.history.push(`/editpayment/${paymentId}`);

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

  render() {
    return (
      <div>
        <h1 className="badge badge-dark">All Payment Details</h1><br />
        <div className="row">
          <Link
            className="btn btn-primary mr-2" to={"/login/mainpagestudent"}>Go Back
                    </Link>

        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th>Payment Id</th> */}
                <th>Amount</th>
                <th>Payment Type</th>
                <th>Payment Status</th>
                <th>Student ID</th>
                <th>Action</th>
                {/* <th>student ID</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.paymentData.map(
                paymentData =>
                  <tr key={paymentData.paymentId}>
                    {/* <td>{paymentData.paymentId}</td> */}
                    <td>{paymentData.amount}</td>
                    <td>{paymentData.paymentType}</td>
                    <td>{paymentData.paymentStatus}</td>
                    <td>{paymentData.studentId}</td>
                    <td>
                      <Link
                        className="btn btn-primary mr-2"
                        to={`/viewpaymentstudent/${paymentData.paymentId}`}>View
                                                    </Link>
                    </td>
                  </tr>


              )}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default ListOfPaymentStudent;
