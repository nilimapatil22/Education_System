import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";


class AddMessageStudent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:"",
            studentId:"",
            createdByUserId:"",
            createdDate:"",
            messageError:"",
            studentIdError:"",
            userIdError:"",
            dateError:""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
     handleSubmit = async (event) => {
         event.preventDefault();
    
         let messageData = {
           studentId: this.state.studentId,
           message:this.state.message,
           createdByUserId: this.state.createdByUserId,
           createdDate: this.state.createdDate
         };
         console.log(messageData);
         await axios.post("http://localhost:7171/api/addStudentMessage",messageData)
         
         .then((data) => {
          alert("Message Sent!");
          this.props.history.push("/login/messagesstudent");

         })
         .catch((error) => {
           alert(error.response.data.message);});
     }
    cancel(){
      this.props.history.push("/login/messagesstudent");
  }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>
              <span className="badge badge-dark">Send Message</span>
            </h1>
            <div className="form-group mr2">
              <div className="alert-danger">{this.state.studentIdError}</div>
              <label>Enter Student Id</label>
              <input
                type="text"
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
              <div className="alert-danger">{this.state.messageError}</div>
              <label>Enter Message:</label>
              <input
                type="text"
                className="form-control"
                id="message"
                placeholder="Enter Message"
                required
                value={this.state.message}
                onChange={(event) =>
                  this.setState({ message: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <div className="alert-danger">{this.state.userIdError}</div>
              <label>Enter Your User Id</label>
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
              <div className="alert-danger">{this.state.dateError}</div>
              <label>Select Date:</label>
              <input
                type="date"
                className="form-control"
                id="createdDate"
                required
                value={this.state.createdDate}
                onChange={(event) =>
                  this.setState({ createdDate: event.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-success">
              Send
            </button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>
              Cancel
            </button>
          </form>
        )
    }
}

export default AddMessageStudent
