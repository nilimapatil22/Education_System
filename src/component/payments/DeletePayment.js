import React, { Component } from "react";
import axios from "axios";
class deletePayment extends Component {
  state = {};
  componentDidMount() {
    axios
      .delete(
        `http://localhost:7171/api/deletePayment/${this.props.match.params.paymentId}/${this.props.match.params.userId}`)
      .then(
        (result) => {
          alert("Payment Details is Removed.");
          this.props.history.push("http://localhost:7171/api/getAllPayment");
        },
        (error) => {
          alert("Payment is not Removed.");
        }
      );
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default  deletePayment()
