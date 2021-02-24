import React from 'react';
import axios from "axios";

class ChooseCourse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course: {
                courseId: "",
                courseName: "",
                courseFee: "",
                courseDuration: "",
                studentId: ""
            }

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        axios.get(`http://localhost:7171/api/getCourse/${this.props.match.params.courseId}`)
            .then(
                (response) => {
                    console.log("Fetch data" + response.data);
                    this.setState({
                        course: response.data
                    })
                }
            )
            .catch(
                (errorResponse) => {
                    console.log("Error in adding the data" + errorResponse);
                }
            );
    }
    handleSubmit() {
        axios.post(`http://localhost:7171/api/enrollcourse/${this.state.studentId}`, this.state.course)
            .then(
                (response) => {
                    console.log("Fetch data" + response.data);
                    alert("Enroll Sucessfully");

                }

            )
        this.props.history.push('/makepayment');
    }
    render() {
        return (
            <div className="enroll">
                <div className="container card-body text-center form-group card col-md-6 offset-md-3 offset-md-3">
                    <h4>Student enroll the course</h4>
                    <form >
                        <table>
                            {/* <tbody>
                <tr key={this.state.course.courseId}>
                        <td>{this.state.course.courseId}</td>
                        <td>{this.state.course.courseName}</td>
                        <td>{this.state.course.fee}</td>
                        <td>{this.state.course.duration}</td>
                </tr>
                </tbody> */}
                        </table>
               Student Id :<input type="number" name="studentId" required onChange={(event) =>
                            this.setState({ studentId: event.target.value })
                        }
                        />
                        <div>
                            <button type="submit" onClick={this.handleSubmit}>Register</button>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}
export default ChooseCourse