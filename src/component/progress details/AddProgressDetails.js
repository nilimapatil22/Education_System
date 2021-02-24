import React, { Component } from 'react'
import axios from "axios"
export default class AddProgressDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressId: "",
      grade: "",
      date: "",
      studentId: "",
      adminId: "",
      courseId: "",
      //paymentIdError: "",
      progressIdError: "",
      gradeError: "",
      dateError: "",
      studentIdError: "",
      adminIdError: "",
      courseIdError: "",
      ProgressData: {}


    }
    this.saveProgress = this.saveProgress.bind(this);
  }

  validate = () => {
    let flag = true;
    if (!this.state.studentId) {
      flag = false;
      this.setState({ studentIdError: "Student Id Is Required" });
    } else {
      this.setState({ studentIdError: "" });
    }

    if (!this.state.date) {
      flag = false;
      this.setState({ dateError: "Date Is Required" });
    } else {
      this.setState({ dateError: "" });
    }
    if (!this.state.progressId) {
      flag = false;
      this.setState({ progressIdError: "progressId Is Required" });
    } else {
      this.setState({ progressIdError: "" });
    }
    if (!this.state.grade) {
      flag = false;
      this.setState({ gradeError: "Grade Is Required" });
    } else {
      this.setState({ gradeError: "" });
    }
    if (!this.state.courseId) {
      flag = false;
      this.setState({ courseIdError: "courseId Is Required" });
    } else {
      this.setState({ courseIdError: "" });
    }
    if (!this.state.adminId) {
      flag = false;
      this.setState({ adminIdError: "adminId Is Required" });
    } else {
      this.setState({ adminIdError: "" });
    }
    return flag;
  }
  saveProgress = async (event) => {
    event.preventDefault();
    let isValid = this.validate();
    if (!isValid) {
      return false;
    }

    let ProgressData = {
      gradeId: this.state.gradeId,
      grade: this.state.grade,
      date: this.state.date,
      courseId: this.state.courseId,
      adminId: this.state.adminId,
      studentId: this.state.studentId
    }
    console.log("progress=" + JSON.stringify(ProgressData))

    await axios.post("http://localhost:7171/api/addProgressDetails", ProgressData).then(responce => {
      this.props.history.push('/login/listofprogress');
    }).catch((error) => {
      alert(error.response.data.message);
    });
    // this.props.history.push('/login/listofprogress');
  }

  cancel() {
    this.props.history.push('/login/listofprogress');
  }
  render() {
    return (
      <div className="progress color">
        <div className="col-md-6 offset-md-3 offset-md-3">

          <h1>
            <span className="badge badge-dark">Report Card</span>
          </h1>
          <form onSubmit={this.saveProgress}>

            <div className="form-group">
              <div className="alert-danger">{this.state.gradeError}</div>
              <select
                className="form-control"
                value={this.state.grade}

                placeholder="Choose Student Id"
                required
                onChange={(event) =>
                  this.setState({ grade: event.target.value })
                }>
                <option>Select Grade</option>
                <option key="A+" value="A+">A+</option>
                <option key="A" value="A">A</option>
                <option key="B+" value="B+">B+</option>
                <option key="B" value="B">B</option>
                <option key="C+" value="C+">C+</option>
                <option key="C" value="C">C</option>
                <option key="D" value="D">D</option>

              </select></div>
            <br></br>

            <div className="form-group">
              <div className="alert-danger">{this.state.dateError}</div>
              <input
                type="date"
                className="form-control"

                placeholder="Enter Date"

                value={this.state.date}
                required
                onChange={(event) =>
                  this.setState({ date: event.target.value })
                }
              />
            </div>



            <div className="form-group">
              <div className="alert-danger">{this.state.courseIdError}</div>
              <input
                type="Number"
                className="form-control"
                id="courseId"

                placeholder="Enter courseId"
                required
                value={this.state.courseId}
                onChange={(event) =>
                  this.setState({ courseId: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <div className="alert-danger">{this.state.studentIdError}</div>
              <input
                type="Number"
                className="form-control"

                placeholder="Enter StudentId"
                required
                value={this.state.studentId}
                onChange={(event) =>
                  this.setState({ studentId: event.target.value })
                }
              />
            </div>

            <div className="form-group">
              <div className="alert-danger">{this.state.adminIdError}</div>
              <input type="Number"
                className="form-control"
                value={this.state.adminId}

                placeholder="Enter Admin Id"
                required
                onChange={(event) =>
                  this.setState({ adminId: event.target.value })
                } />

            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" onClick={this.saveProgress}>
                Submit Report
        </button><button type="submit" className="btn btn-danger" onClick={this.cancel.bind(this)}>
                Cancel
        </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


