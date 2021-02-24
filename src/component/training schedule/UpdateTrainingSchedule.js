import React, { Component } from 'react';
import axios from 'axios';
import TrainingScheduleService from '../Service/TrainingScheduleService';

class UpdateTrainingSchedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: [],
      trainers: [],
      scheduleId: "",
      courseName: "",
      studentId: "",
      trainerName: "",
      startDate: "",
      endDate: "",
      courseNameError: "",
      trainerNameError: "",
      startDateError: "",
      studentIdError: "",
      endDateError: "",
      //scheduleData:[]
    }
    this.updateSchedule = this.updateSchedule.bind(this);
    this.changeStudentIdHandler = this.changeStudentIdHandler.bind(this)
    // this.changeCourseIdHandler = this.changeCourseIdHandler.bind(this)
    // this.changeTrainerIdHandler = this.changeTrainerIdHandler.bind(this)
    this.changeStartDateHandler = this.changeStartDateHandler.bind(this)
    this.changeEndDateHandler = this.changeEndDateHandler.bind(this)
  }
  changeStudentIdHandler = (event) => {
    this.setState({
      studentId: event.target.value
    })
  }

  changeStartDateHandler = (event) => {
    this.setState({
      startDate: event.target.value
    })
  }
  changeEndDateHandler = (event) => {
    this.setState({
      endDate: event.target.value
    })
  }



  componentDidMount() {
    TrainingScheduleService.getScheduleById(this.props.match.params.scheduleId)
      .then((res) => {
        const scheduleData = res.data;
        this.setState({
          scheduleId: scheduleData.scheduleId,
          courseName: scheduleData.courseName,
          studentId: scheduleData.studentId,
          trainerName: scheduleData.trainerName,
          startDate: scheduleData.startDate,
          endDate: scheduleData.endDate

        })
      })
    axios.get("http://localhost:7171/api/getAllCourses")
      .then((res) => {
        let courseData = res.data;
        this.setState({
          courses: courseData
        })

      })
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

  updateSchedule = (e) => {
    e.preventDefault();
    // let isValid = this.validate();
    //    if (!isValid) {
    //   return false;
    // }
    const scheduleDetails = {
      scheduleId: this.state.scheduleId,
      studentId: this.state.studentId,
      courseName: this.state.courseName,
      trainerName: this.state.trainerName,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    TrainingScheduleService.updateScheduleService(scheduleDetails, this.state.scheduleId)
      .then(res => {
        this.props.history.push('/login/trainingschedule');
      })
    alert("Schedule updated!");


  }

  cancel() {
    this.props.history.push('/login/trainingschedule');
  }

  render() {
    return (
      <div className="schedule">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h1 className="text-center">Modify Schedule</h1>
              <div className="card-body">
                <form onSubmit={this.updateSchedule}>
                  <div className="form-group">
                    <label>Student Id </label>
                    <input className="form-control"
                      id="studentId"
                      required
                      placeholder="Enter Student Id"
                      value={this.state.studentId}
                      onChange={this.changeStudentIdHandler} />
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
                    <label>Start Date</label>
                    <input
                      className="form-control"
                      id="startDate"
                      required
                      placeholder="Select start date"
                      type="date"
                      value={this.state.startDate}
                      onChange={this.changeStartDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      className="form-control"
                      id="endDate"
                      required
                      placeholder="Select end date"
                      type="date"
                      value={this.state.endDate}
                      onChange={this.changeEndDateHandler}
                    />
                  </div>
                  <button className="btn btn-success" type="submit">Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default UpdateTrainingSchedule
