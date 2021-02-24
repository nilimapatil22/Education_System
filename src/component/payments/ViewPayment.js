import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ViewPayment extends Component {
  state = {
    payment: {}

  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:7171/api/getmyPayment/${this.props.match.params.paymentId}`
      )
      .then((result) => {
        this.setState({
          payment: result.data,
        });
      });
  }


  render() {
    return (
      <div className="paymentviewdetail" >
        <h1>
          <span className="badge badge-dark"> Payment Details</span>
        </h1>
        <div className="row">
          <Link
            className="btn btn-primary mr-2" align="right" to={"/login/listofpayment"}>Go Back
            </Link>
        </div>
        <form className="card col-md-6 offset-md-3 offset-md-3">
          <table className="table table-bordered">
            {/* <tr>
            <td>Payment Id</td>
            <th>{this.state.payment.paymentId}</th>
          </tr> */}
            <tr>
              <td>Amount</td>
              <th>{this.state.payment.amount}</th>
            </tr>
            <tr>
              <td>Payment Status</td>
              <th>{this.state.payment.paymentStatus}</th>
            </tr>
            <tr>
              <td>Payment Type</td>
              <th>{this.state.payment.paymentType}</th>
            </tr>

            <tr>
              <td>Student Id</td>
              <th>{this.state.payment.studentId}</th>
            </tr>

          </table>
        </form>


      </div>
    );
  }
}

export default ViewPayment;