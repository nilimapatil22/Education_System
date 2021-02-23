import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class AddTrainingSchedule extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            courses:[],
            students:[],
            trainers:[],
            studentId:"",
            course:{
              courseId:"",
              courseName:"",
            },
           
            trainerId:"",
            startDate:"",
            endDate:"",
            studentIdError:"",
            courseIdError:"",
            trainerIdError:"",
            startDateError:"",
            endDateError:""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
      axios.get("http://localhost:7171/api/getAllCourses")
      .then((res) =>{
        let courseData= res.data;
        this.setState({
            courses:courseData
        })
      
      })
      axios.get("http://localhost:7171/api/getAllStudent")
      .then((res) =>{
        let studentData= res.data;
        this.setState({
            students:studentData
        })
      
      })
      axios.get("http://localhost:7171/api/getAllTrainers")
      .then((res) =>{
        let trainerData= res.data;
        this.setState({
            trainers:trainerData
        })
      
      })
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
  
     handleSubmit = async (event) => {
         event.preventDefault();
         
    let isValid = this.validate();
    if (!isValid) {
      return false;
    }

         let scheduleData = {
           studentId: this.state.studentId,
           courseId:this.state.courseId,
           trainerId:this.state.trainerId,
           startDate: this.state.startDate,
           endDate:this.state.endDate

         };
         console.log(scheduleData);
         await axios.post("http://localhost:7171/api/addSchedule",scheduleData)
         
         .then((data) => {
           alert("Schedule created!!")
         })
         
         this.props.history.push("/login/trainingschedule");
     }
    cancel(){
      this.props.history.push("/login/trainingschedule");
  }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>
              <span className="badge badge-dark">Create Training Schedule</span>
            </h1>
            <div className="drop-down">
              <div className="alert-danger">{this.state.studentIdError}</div>
              <label>Choose Student   </label>
              <select 
              onChange={(event) =>
              this.setState({ studentId: event.target.value })
            }>{
                this.state.students.map(student =>
                <option value="student.studentId">{student.firstName}</option>)
                }</select>
               
        
                </div>
                
            <div className="drop-down">
              <div className="alert-danger">{this.state.courseIdError}</div>
              <label>Choose Course   </label>
            
              <select
              onChange={(event) =>
              this.setState({ course: event.target.value ,})
            }>{
                this.state.courses.map(course =>
                <option value="course.value">{course.courseName}</option>)
                }</select>


            </div>
            <div className="drop-down">
              <div className="alert-danger">{this.state.trainerIdError}</div>
              <label>Choose Trainer  </label>
 
              <select  
              onChange={(event) =>
              this.setState({ trainerId: event.target.value })
            }>{
                this.state.trainers.map(trainer =>
                <option value="trainer.trainerId">{trainer.trainerName}</option>)
                }</select>
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
            <button type="submit" className="btn btn-success">
              Create
            </button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>
              Cancel
            </button>
          </form>
        )
    }
}

export default AddTrainingSchedule
