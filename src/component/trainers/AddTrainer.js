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
        courseName:"",
        // adminId:"",
        trainerIdError:"",
        trainerNameError:"",
        phoneNoError:"",
        emailError:"",
        courseNameError:""
        // adminIdError:""

         }
         this.registerTrainer=this.registerTrainer.bind(this);
    }

    validate = () => {
      let flag = true;

      //validation of trainer name
      if(this.state.trainerName===""){
        flag=false;
         this.setState({trainerNameError:"trainer's first Name is required"});
       } 
       else if(!/[A-Z]{1}[a-z]/.test(this.state.trainerName)){
        this.setState({trainerNameError:"first letter should be capital"})
      }
       else{
         this.setState({trainerNameError:""});
      }

      //validation of trainer phone no
      if (this.state.phoneNo==="") {
        flag = false;
        this.setState({ phoneNoError: "phoneNo Is Required" });
      } 
      else if(!/(7|8|9)\d{9}/.test(this.state.phoneNo)){
        this.setState({phoneNoError:"Phone number contain 10 digits"})
      }
      else {
        this.setState({ phoneNoError: "" });
      }

      //validation of email
      if (this.state.email==="") {
        flag = false;
        this.setState({ emailError: "Email is required" });
      } 
      else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)){
        this.setState({emailError:"Email should be in proper format"})
      }      
      else {
        this.setState({ email: "" });
      }

      //validation of course name
      if (this.state.courseName==="") {
        flag = false;
        this.setState({ courseNameError: "courseName is required" });
      } else {
        this.setState({ courseName: "" });
      }

      // //validation of adminId
      // if (this.state.adminId==="") {
      //   flag = false;
      //   this.setState({ adminIdError: "adminId is required" });
      // } else {
      //   this.setState({ adminId: "" });
      // }

      return flag;
    };

    registerTrainer=async(e)=>{
      e.preventDefault();

      let isValid = this.validate();
      if (!isValid) {
        return false;
      }
      
      let trainerDetails={
        trainerId:this.state.trainerId,
        trainerName:this.state.trainerName,
        phoneNo:this.state.phoneNo,
        email:this.state.email,
        courseName:this.state.courseName
        // adminId:this.state.adminId
      }
      console.log("Trainerdata="+JSON.stringify(trainerDetails))

      await axios.post("http://localhost:7171/api/addTrainer",trainerDetails)
      .then((responseData)=>{
      })
    this.props.history.push('/listoftrainer');
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
                  <div className="alert-danger" >{this.state.trainerNameError}</div>
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
                  <div className="alert-danger">{this.state.courseNameError}</div>
                  <label>Course Name</label>
                  <input
                    type="courseName"
                    className="form-control"
                    id="courseName"
                    placeholder="Enter Course Name"
                    value={this.state.courseName}
                    onChange={(event) =>
                      this.setState({ courseName: event.target.value })
                    }
                  />
                </div>

                {/* <div className="form-group">
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
                </div> */}

               
                <div className="text-center"> 
                
                  <button type="submit" className="btn btn-primary"
                  onClick={this.registerTrainer}>
                  Add Trainer
                  </button>
                </div>
               
              </form>
            </div>
        )
    }
}
export default AddTrainer