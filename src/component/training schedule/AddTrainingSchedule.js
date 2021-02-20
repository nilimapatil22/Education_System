import axios from 'axios';
import React, { Component } from 'react';

class AddTrainingSchedule extends Component {
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
            endDateError:""

        }
    }
    
    // handleSubmit = async (event) => {
    //     event.preventDefault();
    
    //     let message = {
    //       studentId: this.state.studentId,
    //       messageValue:this.state.messageValue,
    //       createdByUserId: this.state.createdByUserId,
    //       createdDate: this.state.createdDate
    //     };
    //     console.log(message);
    //     await 
    //     MessageService.addMessage(message)
    //     .then((data) => {})
    //     .catch((error) => {
    //       alert(error.response.data.message);});
    //     this.props.history.push("/");
    // }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>
              <span className="badge badge-dark">Create Training Schedule</span>
            </h1>
            <div className="form-group mr2">
              <div className="alert-danger">{this.state.studentIdError}</div>
               <label>Choose Student Id:</label>
               <select
                    className="form-control"
                    value={this.state.studentId}
                    placeholder="Choose Student Id"
                    onChange={(event) =>
                    this.setState({ studentId: event.target.value })
                }>
                    <option>Dropdown List Student</option>
                {/* {this.state.students.map((student) => (
                    <option key={student.value} value={student.value}>
                      {student.display}
                    </option>
                  ))} */}
                </select>
        
                </div>
            <div className="form-group">
              <div className="alert-danger">{this.state.courseIdError}</div>
              <label>Choose Course Id:</label>
               <select
                    className="form-control"
                    value={this.state.courseId}
                    placeholder="Choose Course Id"
                    onChange={(event) =>
                    this.setState({ courseId: event.target.value })
                }>
                    <option>Drop Down List Course</option>
                {/* {this.state.students.map((student) => (
                    <option key={student.value} value={student.value}>
                      {student.display}
                    </option>
                  ))} */}
                </select>
            </div>
            <div className="form-group">
              <div className="alert-danger">{this.state.trainerIdError}</div>
              <label>Choose Trainer Id:</label>
               <select
                    className="form-control"
                    value={this.state.trainerId}
                    placeholder="Choose Trainer Id"
                    onChange={(event) =>
                    this.setState({ trainerId: event.target.value })
                }>
                    <option>Drop Down List Trainer</option>
                {/* {this.state.students.map((student) => (
                    <option key={student.value} value={student.value}>
                      {student.display}
                    </option>
                  ))} */}
                </select>
            </div>
            <div className="form-group">
              <div className="alert-danger">{this.state.userIdError}</div>
              <label>Enter User Id:</label>
              <input
                type="text"
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
            <button type="submit" className="btn btn-success">
              Create
            </button>
          </form>
        )
    }
}

export default AddTrainingSchedule
