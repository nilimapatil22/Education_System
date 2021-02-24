import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

class ListOfAllStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            AllStudentData: [], errMsg: ""
        }
    }



    componentDidMount() {
        axios.get("http://localhost:7171/api/getAllStudent")
            .then((responseData) => {
                console.log("Retrieved from json" + responseData.data);
                this.setState({ AllStudentData: responseData.data });
            })
            .catch((errorResponce) => {
                console.log("Error in Fetching the data" + errorResponce);
            })
    }



    render() {
        return (
            <div className="list">
                <h1>
                    <span className="badge badge-dark">List of Users</span>
                </h1>
                <br></br>
                <div className="row">
                    <Link
                        className="btn btn-primary mr-2"
                        to={"/login/mainpagestudent"}>Go Back
                    </Link>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                {/* <th>userId</th> */}
                                <th> First Name </th>
                                <th>  Last Name </th>
                                <th>  Email </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.AllStudentData.map(function (user, key) {
                                    return (
                                        <tr key={key}>
                                            {/* <td>{user.userId}</td> */}
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>


                                            <td>
                                                <Link
                                                    className="btn btn-primary mr-2"
                                                    to={`/viewstudent/${user.userId}`}>View
                                                </Link>

                                                {/* <Link 
                                                    className="btn btn-primary mr-2" 
                                                    to={`/modifystudent/${user.userId}`}>Modify
                                                </Link> */}

                                                {/* <Link
                                                    className="btn btn-danger"
                                                    to={`/removestudent/${user.userId}`}>Delete
                                                </Link> */}

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListOfAllStudent