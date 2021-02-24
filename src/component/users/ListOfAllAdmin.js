import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

class ListOfAllAdmin extends Component {
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
                    <span className="badge badge-dark">List Of Users</span>
                </h1>
                <br></br>
                <div className="row ">
                    <Link
                        className="btn btn-primary mr-2"
                        to={"/login/mainpageadmin"}>Go Back
                    </Link>
                </div>
                <div className="row card col-md-8 offset-md-2 offset-md-2">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>

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

                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>


                                            <td>
                                                <Link
                                                    className="btn btn-primary mr-2"
                                                    to={`/viewadmin/${user.userId}`}>View
                                                </Link>

                                                <Link
                                                    className="btn btn-primary mr-2"
                                                    to={`/modifyadmin/${user.userId}`}>Modify
                                                </Link>

                                                {/* <Link
                                                    className="btn btn-danger"
                                                    to={`/removeadmin/${user.userId}`}>Delete
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

export default ListOfAllAdmin;