import React, { Component } from 'react'
import axios from "axios";

export default class AddPayment extends Component {
    constructor(props){
        super(props);
        this.state={
            paymentId:"",
            fee:"",
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
        this.savepayment=this.savepayment.bind(this);
       
    }


      savepayment= async(e)=>{

        e.preventDefault();
       
        let PaymentData={
          paymentId:this.paymentId,
            fee:this.state.fee,
            paymentStatus:this.state.paymentStatus,
            paymentType:this.state.paymentType,
           
            studentId:this.state.studentId
        }
        
            console.log("u entered ....."+JSON.stringify(PaymentData))
            await axios.post("http://localhost:7171/api/addPaymentByStudent",PaymentData).then(responseData=>{
            })
            this.props.history.push('/login/listofpaymentstudent');
          }
            
          cancel(){
            this.props.history.push("/login/mainpagestudent");
        }
    

    render() {
        return (
            <form onSubmit={this.savepayment}>
              <div className="payment">
              <h1>Welcome And Proceed To Payment</h1>
              <h1>
          <span className="badge badge-dark">Make Payment</span>
        </h1>
       
        
        <div className="form-group">
          <div className="alert-danger">{this.state.amountError}</div>
          <input
            type="text"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            value={this.state.fee}
            onChange={(event) =>
              this.setState({ fee: event.target.value })
            }
          />
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
        <input type="Number"
                    className="form-control"
                    value={this.state.studentId}
                    placeholder="Choose Student Id"
                    onChange={(event) =>
                    this.setState({ studentId: event.target.value })
                }/>
                    
          </div>
        <button type="submit" className="btn btn-primary " onClick={this.savepayment}>
          Make Payment
        </button>
        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>
              Cancel
            </button>
            </div>
            </form>
        )
    }
}
