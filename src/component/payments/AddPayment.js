import React, { Component } from 'react'
import axios from "axios";

export default class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentId: "",
      amount: "",
      date: '',
      paymentType: "",
      paymentStatus: "",
      studentId: "",
      //paymentIdError: "",
      feeError: "",
      paymentTypeError: "",
      accountNoError: "",
      paymentStatusError: "",
      studentIdError: "",
      dateError: "",
      PaymentData: { "paymentId": 0, "amount": 0, "date": "", "paymentType": "", "paymentStatus": 0, "studentId": "" }
    }
    this.savepayment = this.savepayment.bind(this);

  }

  validate = () => {
    let flag = true;
    if (!this.state.studentId) {
      flag = false;
      this.setState({ studentIdError: "Student Id Is Required" });
    } else {
      this.setState({ studentIdError: "" });
    }

    if (!this.state.date) {
      flag = false;
      this.setState({ dateError: "Date Is Required" });
    } else {
      this.setState({ dateError: "" });
    }
    if (!this.state.paymentType) {
      flag = false;
      this.setState({ paymentTypeError: "PaymentType Is Required" });
    } else {
      this.setState({ paymentTypeError: "" });
    }
    if (!this.state.amount) {
      flag = false;
      this.setState({ amountError: "Amount Is Required" });
    } else {
      this.setState({ amountError: "" });
    }
    if (!this.state.paymentStatus) {
      flag = false;
      this.setState({ paymentStatusError: "paymentStatus Is Required" });
    } else {
      this.setState({ paymentStatusError: "" });
    }
    return flag;
  }



  savepayment = async (event) => {
    event.preventDefault();
    let isValid = this.validate();
    if (!isValid) {
      return false;
    }
    //event.preventDefault();

    let PaymentData = {
      paymentId: this.paymentId,
      amount: this.state.amount,
      date: this.state.date,
      paymentStatus: this.state.paymentStatus,
      paymentType: this.state.paymentType,

      studentId: this.state.studentId
    }

    console.log("u entered ....." + JSON.stringify(PaymentData))
    await axios.post("http://localhost:7171/api/addPaymentByStudent", PaymentData).then(responseData => {
      this.props.history.push('/login/listofpaymentstudent');
    }).catch((error) => {
      alert(error.response.data.message);
    });

  }

  cancel() {
    this.props.history.push("/login/mainpagestudent");
  }


  render() {
    return (
      <div className="paymentviewdetail">
        <form onSubmit={this.savepayment} className="card col-md-6 offset-md-3 offset-md-3">
          <div>
            <h1>Welcome And Proceed To Payment</h1>
            <h1>
              <span className="badge badge-dark">Make Payment</span>
            </h1>


            <div className="form-group ">
              <div className="alert-danger">{this.state.amountError}</div>
              <input
                type="text"
                className="form-control"
                id="amount"

                placeholder="Enter amount"
                value={this.state.amount}
                required
                onChange={(event) =>
                  this.setState({ amount: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <div className="alert-danger">{this.state.dateError}</div>
              <input
                type="date"
                className="form-control"
                id="date"

                placeholder="Enter Date"
                value={this.state.date}
                onChange={(event) =>
                  this.setState({ date: event.target.value })
                }
                required

              />
            </div>
            <div className="form-group">
              <div className="alert-danger">{this.state.paymentStatusError}</div>

              <select
                className="form-control"
                value={this.state.paymentStatus}
                required
                onChange={(event) =>
                  this.setState({ paymentStatus: event.target.value })
                }
              >
                <option>Select Payment Status</option>
                <option key="successful" value="successful" name="successful">
                  Successful
              </option>
                <option key="unsuccessful" value="unsuccessful">
                  Unsuccessful
            </option>

              </select>
            </div>

            <div className="form-group">
              <div className="alert-danger">{this.state.paymentTypeError}</div>
              <select
                className="form-control"
                value={this.state.paymentType}
                required
                onChange={(event) =>
                  this.setState({ paymentType: event.target.value })
                }
              >
                <option>Select Payment Type</option>
                <option key="credit" value="credit">
                  Credit
              </option>
                <option key="debit" value="debit">
                  Debit
            </option>

              </select>
            </div>

            <div className="form-group">
              <div className="alert-danger">{this.state.studentIdError}</div>
              <input type="Number"
                className="form-control"
                value={this.state.studentId}

                placeholder="Enter Student Id"
                required
                onChange={(event) =>
                  this.setState({ studentId: event.target.value })
                } />

            </div>
            <button type="submit" className="btn btn-primary " onClick={this.savepayment}>
              Make Payment
        </button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}