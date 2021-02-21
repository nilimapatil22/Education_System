import axios from 'axios';
import React, { Component } from 'react'

 class AddTrainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        trainerId:"",
        trainerName:"",
        phoneNo:"",
        email:"",
        adminId:"",
         }
         this.registerTrainer=this.registerTrainer.bind(this);
    }

    registerTrainer=async(e)=>{
      e.preventDefault()
      let trainerDetails={
        trainerId:this.state.trainerId,
        trainerName:this.state.trainerName,
        phoneNo:this.state.phoneNo,
        email:this.state.email,
        adminId:this.state.adminId
      }
      console.log("Trainerdata="+JSON.stringify(trainerDetails))

      await axios.post("http://localhost:7171/api/addTrainer",trainerDetails)
      .then((responseData)=>{
      })
    this.props.history.push('/trainer');
  }
  cancel(){
    this.props.history.push('/login');
  }
    
    render() {
        return (
            <div>
                <form onSubmit={this.registerTrainer}>

                <h1 className="text-center">
                  <span className="badge badge-dark">Trainer Register</span>
                </h1>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.trainerNameError}</div>
                  <label>Trainer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="trainerName"
                    placeholder="Enter Trainer Name"
                    value={this.state.trainerName}
                    onChange={(event) =>
                      this.setState({ trainerName: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <div className="alert-danger">{this.state.phoneNoError}</div>
                  <label>Trainer Phone No</label>
                  <input
                    type="string"
                    className="form-control"
                    id="phoneNo"
                    placeholder="Enter PhoneNo"
                    value={this.state.phoneNo}
                    onChange={(event) =>
                      this.setState({ phoneNo: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.emailError}</div>
                  <label>Trainer Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.adminIdError}</div>
                  <label>Admin Id</label>
                  <input
                    type="number"
                    className="form-control"
                    id="adminId"
                    placeholder="Enter Admin Id"
                    value={this.state.adminId}
                    onChange={(event) =>
                      this.setState({ adminId: event.target.value })
                    }
                  />
                </div>

               
                <div className="text-center"> 
                
                  <button type="submit" className="btn btn-primary"
                  onClick={this.registerTrainer}>
                  Register
                  </button>
                </div>
               
              </form>
            </div>
        )
    }
}
export default AddTrainer