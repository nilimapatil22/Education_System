import React, { Component } from "react";
import axios from "axios";
class DeleteCourse extends Component {
  state = {};
  componentDidMount() {
    axios
      .delete(
        `http://localhost:7171/api/deleteCourse/${this.props.match.params.courseId}`
      )
      .then(
        (result) => {
          alert("Course is deleted!");
          this.props.history.push("/listofcourse");
        },
        (error) => {
          alert("Course is not deleted.");
        }
      );
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default DeleteCourse;
