import React, { Component } from "react";
import axios from "axios";
class DeleteTrainingSchedule extends Component {
  state = {};
  componentDidMount() {
    axios
      .delete(
        `http://localhost:7171/api/deleteSchedule/${this.props.match.params.scheduleId}`
      )
      .then(
        (result) => {
          alert("Schedule is deleted!");
          this.props.history.push("/login/trainingschedule");
        },
        (error) => {
          alert("Schedule is not deleted.");
        }
      );
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default DeleteTrainingSchedule;
