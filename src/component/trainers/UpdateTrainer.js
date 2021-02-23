import React, { Component } from 'react'
import axios from "axios"
 class UpdateTrainer extends Component {
    constructor(props){
        super(props);
        this.state={
            trainerId:this.props.match.params.trainerId,
            trainerName:"",
            phoneNo:"",
            email:"",
            courseName:"",
            adminId:"",
            trainerIdError: "",
            trainerNameError: "",
            phoneNoError: "",
            emailError: "",
            courseNameError:"",
            adminIdError:"",
            trainerData:[]
        }
        this.saveTrainer=this.saveTrainer.bind(this);
    }
    
componentDidMount(){
    axios.put(`http://localhost:7171/api/getTrainer/${this.state.trainerId}`).then((res)=>{
        let trainerData=res.data;
        this.setState=({
            trainerName:trainerData.trainerName,
            phoneNo:trainerData.phoneNo,
            email:trainerData.email,
            courseName:trainerData.courseName,
            adminId:trainerData.adminId
        });
    });
 }

    saveTrainer= async(e)=>{
        e.preventDefault();
        let TrainerData={trainerId:this.state.trainerId,
                        trainerName:this.state.trainerName, 
                        phoneNo:this.state.phoneNo, 
                        email:this.state.email,
                        courseName:this.state.courseName,
                        adminId:this.state.adminId
                         }
            console.log("trainer="+JSON.stringify(TrainerData))

           await axios.put("http://localhost:7171/api/updateTrainer",TrainerData).then(responce=>{
           
        })
        this.props.history.push('/listoftrainer');
    }

    cancel(){
        this.props.history.push('/listoftrainer');
    }
    render() {
        return (
            <div>
                <div className="payment">
             
              <h1>
          <span className="badge badge-dark">Trainer List</span>
        </h1>
        <form onSubmit={this.saveTrainer}>
        
        <div className="form-group">
          <div className="alert-danger">{this.state.trainerNameError}</div>
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
                    
          <br></br>

          <div className="form-group">
          <div className="alert-danger">{this.state.phoneNoError}</div>
          <input
            type="number"
            className="form-control"
            id="phoneNo"
            placeholder="Enter Phone Number"
            value={this.state.phoneNo}
            onChange={(event) =>
              this.setState({ phoneNo: event.target.value })
            }
          />
           </div>

           <div className="form-group">
          <div className="alert-danger">{this.state.emailError}</div>
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
          <input
            type="text"
            className="form-control"
            id="courseName"
            placeholder="Enter CourseName"
            value={this.state.courseName}
            onChange={(event) =>
              this.setState({ courseName: event.target.value })
            }
          />
           </div>
    
    
        <div className="form-group">
        <input type="Number"
                    className="form-control"
                    value={this.state.adminId}
                    placeholder="Enter Admin Id"
                    onChange={(event) =>
                    this.setState({ adminId: event.target.value })
                }/>
                   
          </div>
        <button type="submit" className="btn btn-primary " onClick={this.saveTrainer}>
          Save Trainer
        </button><button type="submit" className="btn btn-danger " onClick={this.cancel.bind(this)}>
          Cancel
        </button>
        </form>
            </div>
            </div>
        )
    }
}
export default UpdateTrainer