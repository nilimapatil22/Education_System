import React, { Component } from 'react'
import axios from 'axios'
export default class RegisterTrainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trainer: {
                trainerId: "",
                trainerName: "",
                studentId: "",
                courseName: "",
                studentId: ""
            },

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }




    componentDidMount() {

        axios.get(`http://localhost:7171/api/getTrainer/${this.props.match.params.trainerId}`)
            .then(
                (response) => {
                    console.log("Fetch data" + response.data);
                    this.setState({
                        trainer: response.data,
                        studentId: this.state.studentId

                    })
                }
            )
            .catch(
                (errorResponse) => {
                    console.log("Error in adding the data" + errorResponse);
                }
            );
    }


    handleChange = (event) => {
        this.setState({ studentId: event.target.value });
    }
    handleSubmit() {
        axios.post(`http://localhost:7171/api/ChooseTrainer/${this.state.studentId}`, this.state.trainer)
            .then(
                (response) => {
                    console.log("Fetch data" + response.data);
                    alert("Enroll Sucessfully");

                }
            )
        this.props.history.push('/choosetrainer');
    }

    render() {
        return (
            <div className="enrolltrainer">
                <div className="container card-body text-center form-group card col-md-6 offset-md-3 offset-md-3">
                    <h4>Choose Trainer</h4>
                    <form >
                        Student Id :<input type="number" required name="studentId" onChange={(event) =>
                            this.setState({ studentId: event.target.value })
                        }
                        /><br />
                        <div>
                            <button type="submit" onClick={this.handleSubmit}>Add Trainer</button>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}
