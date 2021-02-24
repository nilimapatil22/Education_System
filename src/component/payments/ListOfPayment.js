import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ListOfPayment extends React.Component {
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
      <div className="paymentviewdetail color">
        <h1  ><span className="badge badge-dark">All Payment Details</span></h1><br />
        <div className="row">
          <Link
            className="btn btn-primary mr-2" to={"/login/mainpageadmin"}>Go Back
                    </Link>

        </div>
        <div className="row card col-md-8 offset-md-2 offset-md-2 ">
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
                        to={`/viewpayment/${paymentData.paymentId}`}>View
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

export default ListOfPayment;
