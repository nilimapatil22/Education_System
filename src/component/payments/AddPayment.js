import React, { Component } from 'react'
import axios from "axios";


export default class AddPayment extends Component {
    constructor(props){
        super(props);
        this.state={
            paymentId:"",
            amount:"",
            paymentType:"",
            paymentStatus:"",
            studentId:"",
            //paymentIdError: "",
            feeError: "",
            paymentTypeError: "",
            accountNoError: "",
            paymentStatusError: "",
            studentIdError: "",
            PaymentData:{"paymentId":0,"amount": 0,"paymentType": "","paymentStatus": 0,"studentId": ""}
        }
    }
    handleChange(event){
        const {amount,paymentStatus,paymentType,studentId}=event.target;
        this.setState({[event.target.amount]:event.target.value,
            [event.target.paymentType]:event.target.value,
            [event.target.paymentStatus]:event.target.value,
            [event.target.studentId]:event.target.value}
            ); 
        }

    

      handleSubmit(){
        let PaymentData={
            "amount":this.state.amount,
            "paymentType":this.state.paymentType,
            "paymentStatus":this.state.paymentStatus,
            "studentId":this.state.studentId
        }
            console.log("u entered ....."+PaymentData);
            axios
            .post(`http://localhost:7171/api/addPaymentByStudent`,PaymentData)

            .then((responseData)=>{
            console.log(" payment added  "+responseData.data.message)}
            )
            .catch((errorData)=>{console.log("error while adding payment data")})
    
    }

    render() {
        return (
            <div className="payment">
              <h1>Welcome And Proceed To Payment</h1>
              <h1>
          <span className="badge badge-dark">Make Payment</span>
        </h1>
        <form onSubmit={this.handleSubmit} >
        
        <div className="form-group">
          <div className="alert-danger">{this.state.amountError}</div>
          <input
            type="text"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            value={this.state.amount}
            onChange={(event) =>
              this.setState({ amount: event.target.value })
            }
          /><br></br>

          <div className="form-group">
          <div className="alert-danger">{this.state.paymentTypeError}</div>
          <select
            className="form-control"
            value={this.state.paymentType}
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

        </div>
        <div className="form-group">
          <div className="alert-danger">{this.state.paymentStatusError}</div>
          <select
            className="form-control"
            value={this.state.paymentStatus}
            onChange={(event) =>
              this.setState({ paymentStatus: event.target.value })
            }
          >
           <option>Select Payment Status</option>
              <option key="successful" value="successful">
              Successful
              </option>
              <option key="unsuccessful" value="unsuccessful">
              Unsuccessful
            </option>
           
          </select>
        </div>
      

        <div className="form-group">
          <div className="alert-danger">{this.state.studentIdError}</div>
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Enter Student ID"
            value={this.state.studentId}
            onChange={(event) =>
              this.setState({ studentId: event.target.value })
            }
          />
        </div>
        

        <form method="get" action="/login/enroll/payment/course" className="text-center"><button type="submit" className="btn btn-primary ">
          Make Payment
        </button></form>
        </form>
            </div>
        )
    }
}
