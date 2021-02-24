import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

class AddTrainingSchedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: [],
      trainers: [],
      studentId: "",
      courseName: "",
      trainerName: "",
      startDate: "",
      endDate: "",
      error: {
        studentIdError: "",
        courseNameError: "",
        trainerNameError: "",
        startDateError: "",
        endDateError: ""
      }

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:7171/api/getAllCourses")
      .then((res) => {
        let courseData = res.data;
        this.setState({
          courses: courseData
        })

      })
    // axios.get("http://localhost:7171/api/getAllStudent")
    //   .then((res) => {
    //     let studentData = res.data;
    //     this.setState({
    //       students: studentData
    //     })

    //   })
    axios.get("http://localhost:7171/api/getAllTrainers")
      .then((res) => {
        let trainerData = res.data;
        this.setState({
          trainers: trainerData
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
    // if (!this.state.courseName) {
    //   flag = false;
    //   this.setState({ courseNameError: "Course Name Is Required" });
    // } else {
    //   this.setState({ courseNameError: "" });
    // }
    // if (!this.state.trainerName) {
    //   flag = false;
    //   this.setState({ trainerNameError: "Trainer Name Is Required" });
    // } else {
    //   this.setState({ trainerNameError: "" });
    // }
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
  handleChangeStudent = (event) => {
    event.preventDefault();
    const student = this.state.student;
    student[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ student });

  };
  handleChangeCourse = (event) => {
    event.preventDefault();
    const course = this.state.course;
    course[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ course });

  };
  handleChangeTrainer = (event) => {
    event.preventDefault();
    const trainer = this.state.trainer;
    trainer[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ trainer });

  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }

    let scheduleData = {
      studentId: this.state.studentId,
      courseName: this.state.courseName,
      trainerName: this.state.trainerName,
      startDate: this.state.startDate,
      endDate: this.state.endDate

    };
    console.log(scheduleData);
    await axios.post("http://localhost:7171/api/addSchedule", scheduleData)

      .then((data) => {
        alert("Schedule created!!")
        this.props.history.push("/login/trainingschedule");
      })


  }
  cancel() {
    this.props.history.push("/login/trainingschedule");
  }

  render() {
    return (
      <div className="schedule">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h1 className="text-center">Create Schedule</h1>
              <div className="card-body">

                <form onSubmit={this.handleSubmit}>
                  <div className="drop-down">
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

                  <div className="drop-down">
                    <div className="alert-danger">{this.state.courseNameError}</div>
                    <label>Choose Course   </label>

                    <select
                      onChange={(event) =>
                        this.setState({ courseName: event.target.value, })
                      }>{
                        this.state.courses.map(course =>
                          <option value={course.courseName}>{course.courseName}</option>)
                      }</select>


                  </div>
                  <div className="drop-down">
                    <div className="alert-danger">{this.state.trainerNameError}</div>
                    <label>Choose Trainer  </label>

                    <select
                      onChange={(event) =>
                        this.setState({ trainerName: event.target.value })
                      }>{
                        this.state.trainers.map(trainer =>
                          <option value={trainer.trainerName}>{trainer.trainerName}</option>)
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
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>
                    Cancel
            </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default AddTrainingSchedule
