import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";


class AddMessageStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "",
      studentId: "",
      createdDate: "",
      messageError: "",
      studentIdError: "",
      dateError: ""

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validate = () => {
    let flag = true;
    if (!this.state.studentId) {
      flag = false;
      this.setState({ studentIdError: "Student Id Is Required" });
    } else {
      this.setState({ studentIdError: "" });
    }
    if (this.state.message === "") {
      flag = false;
      this.setState({ messageError: "Message Is Required" });
    } else {
      this.setState({ messageError: "" });
    }
    if (!this.state.createdDate) {
      flag = false;
      this.setState({ dateError: "Date Is Required" });
    } else {
      this.setState({ dateError: "" });
    }
    return flag;
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = this.validate();
    if (!isValid) {
      return false;
    }
    let messageData = {
      studentId: this.state.studentId,
      message: this.state.message,
      createdDate: this.state.createdDate
    };
    console.log(messageData);
    await axios.post("http://localhost:7171/api/addStudentMessage", messageData)

      .then((data) => {
        alert("Message Sent!");
        this.props.history.push("/login/messagesstudent");

      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
  cancel() {
    this.props.history.push("/login/messagesstudent");
  }
  render() {
    return (
      <div className="message">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h1 className="text-center">Send Message</h1>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
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
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>
                    Cancel
            </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddMessageStudent
