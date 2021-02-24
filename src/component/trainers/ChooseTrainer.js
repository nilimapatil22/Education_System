import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import axios from 'axios';
class ChooseTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = { AllTrainerData: [], errMsg: "" }
        this.ChooseTrainer = this.choosetrainer.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:7171/api/getAllTrainers")
            .then(
                (responseData) => {
                    //    console.log(" Retrived from json "+responseData.data);
                    this.setState({ AllTrainerData: responseData.data });
                }
            )
            .catch(
                (errorResponce) => {
                    console.log(" Error in Fetching the data " +
                        errorResponce);
                }
            );
    }

    choosetrainer() {
        this.props.history.push('/registertrainer');
    }
    render() {
        return (
            <div className="enrolltrainer">
                <form className=" card col-md-8 offset-md-2 offset-md-2 text-center">

                    <h2><center>Trainer Data</center></h2>
                    <div>
                        <table border="2" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    {/* <td>TRAINER_ID</td> */}
                                    <td>TRAINER_NAME</td>
                                    <td>PHONENO</td>
                                    <td>EMAIL</td>
                                    <td>COURSE_NAME</td>
                                    <td>TRAINER_REGISTER</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.AllTrainerData.map(function (trainer, key) {
                                    return (
                                        <tr key={key}>
                                            {/* <td>{trainer.trainerId}</td> */}
                                            <td>{trainer.trainerName}</td>
                                            <td>{trainer.phoneNo}</td>
                                            <td>{trainer.email}</td>
                                            <td>{trainer.courseName}</td>

                                            <td><Link to={`/enrolltrainer/${trainer.trainerId}`}>Register</Link></td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Link
                            className="btn btn-primary mr-2" to={"/login/mainpagestudent"}>Go Back
                    </Link></div>

                </form>
            </div>
        )
    }
}

export default ChooseTrainer
