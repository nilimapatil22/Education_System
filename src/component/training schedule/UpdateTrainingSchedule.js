import React, { Component } from 'react';
import axios from 'axios';

class UpdateTrainingSchedule extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            scheduleId:this.props.match.params.scheduleId,
            courseId:"",
            studentId:"",
            trainerId:"",
            createdByUserId:"",
            startDate:"",
            endDate:"",
            courseIdError:"",
            trainerIdError:"",
            startDateError:"",
            studentIdError:"",
            userIdError:"",
            endDateError:"",
            scheduleData:[]
        }
        this.saveSchedule=this.saveSchedule.bind(this);
    }
    componentDidMount(){
      axios.put(`http://localhost:7171/api/getSchedule/${this.state.scheduleId}`).then((res)=>{
          let scheduleData=res.data;
          this.setState=({
            courseId:scheduleData.courseId,
            studentId:scheduleData.studentId,
            createdByUserId:scheduleData.createdByUserId,
            trainerId:scheduleData.trainerId,
            startDate:scheduleData.startDate,
            endDate:scheduleData.endDate

          });
      });
   }
   validate = () => {
    let flag = true;
    if (!this.state.studentId) {
      flag = false;
      this.setState({ studentIdError: "Student Id Is Required" });
    } else {
      this.setState({ studentIdError: "" });
    }
    if (!this.state.courseId) {
      flag = false;
      this.setState({ courseIdError: "Course Id Is Required" });
    } else {
      this.setState({ courseIdError: "" });
    }
    if (!this.state.trainerId) {
      flag = false;
      this.setState({ trainerIdError: "Trainer Id Is Required" });
    } else {
      this.setState({ trainerIdError: "" });
    }
    if (!this.state.startDate) {
      flag = false;
      this.setState({ startDateError: "Start Date Is Required" });
    } else {
      this.setState({ startDateError: "" });
    }
    if (!this.state.endDate) {
      flag = false;
      this.setState({ endDateError: "End Date Is Required" });
    } else {
      this.setState({ endDateError: "" });
    }
    return flag;
  };
  
   saveSchedule= async(e)=>{
          e.preventDefault();
          let isValid = this.validate();
             if (!isValid) {
            return false;
          }
          let scheduleData={scheduleId:this.state.scheduleId,
            studentId: this.state.studentId,
            courseId:this.state.courseId,
            trainerId:this.state.trainerId,
            createdByUserId: this.state.createdByUserId,
            startDate: this.state.startDate,
            endDate:this.state.endDate
                           }
              console.log("schedule="+JSON.stringify(scheduleData))
  
             await axios.put("http://localhost:7171/api/updateSchedule",scheduleData).then(responce=>{
             
          })
          this.props.history.push('/login/trainingschedule');
      }
 
      cancel(){
          this.props.history.push('/login/trainingschedule');
      }
    
    render() {
        return (
          <form onSubmit={this.saveSchedule}>
          <h1>
            <span className="badge badge-dark">Create Training Schedule</span>
          </h1>
          <div className="form-group mr2">
            <div className="alert-danger">{this.state.studentIdError}</div>
            <label>Enter Student Id</label>
            <input
              type="number"
              className="form-control"
              id="studentId"
              placeholder="Enter Student Id"
              required
              value={this.state.studentId}
              onChange={(event) =>
                this.setState({ studentId: event.target.value })
              }
            />
      
              </div>
          <div className="form-group">
            <div className="alert-danger">{this.state.courseIdError}</div>
            <label>Enter Course Id</label>
            <input
              type="number"
              className="form-control"
              id="courseId"
              placeholder="Enter Course Id"
              required
              value={this.state.courseId}
              onChange={(event) =>
                this.setState({ courseId: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <div className="alert-danger">{this.state.trainerIdError}</div>
            <label>Enter Trainer Id</label>
            <input
              type="number"
              className="form-control"
              id="trainerId"
              placeholder="Enter Trainer Id"
              required
              value={this.state.trainerId}
              onChange={(event) =>
                this.setState({ trainerId: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <div className="alert-danger">{this.state.userIdError}</div>
            <label>Enter User Id:</label>
            <input
              type="number"
              className="form-control"
              id="createdByUserId"
              placeholder="Enter Your User Id"
              required
              value={this.state.createdByUserId}
              onChange={(event) =>
                this.setState({ createdByUserId: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <div className="alert-danger">{this.state.startDateError}</div>
            <label>Select Start Date:</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              required
              value={this.state.startDate}
              onChange={(event) =>
                this.setState({ startDate: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <div className="alert-danger">{this.state.endDateError}</div>
            <label>Select End Date:</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              required
              value={this.state.endDate}
              onChange={(event) =>
                this.setState({ endDate: event.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-success" onClick={this.saveSchedule}>
            Save
          </button>
          <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>
            Cancel
          </button>
        </form>
        )
    }
}

export default UpdateTrainingSchedule
