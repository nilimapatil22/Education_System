
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';

class ListOfMessages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }



    componentDidMount() {
        axios.get("http://localhost:7171/api/getAllMessages")
            .then(res => {
                this.setState({
                    messages: res.data
                });
            })
            .catch((error) => {
                alert(JSON.stringify("error: " + error));
            })
    }



    render() {
        return (
            <div className="listMessage">
                <h2 className="text-center">Messages List</h2>
                <div className="row">
                    <Link
                        className="btn btn-primary mr-2" to={"/message/sendmessage"}>Send Message
                    </Link>
                    <Link
                        className="btn btn-primary mr-2" align="right" to={"/login/mainpageadmin"}>Go Back
                    </Link>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                {/* <th> Student Id </th> */}
                                <th> Message </th>
                                <th> Date </th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.messages.map(
                                    message =>
                                        <tr key={message.messageId}>
                                            {/* <td> {message.studentId} </td>    */}
                                            <td> {message.message}</td>
                                            <td> {message.createdDate}</td>


                                            <td>
                                                <Link
                                                    className="btn btn-primary mr-2"
                                                    to={`/messages/viewmessage/${message.messageId}`}>View
                                                </Link>
                                                {/* <Link
                                                    className="btn btn-outline-primary mr-2"
                                                    to={`/messages/modifymessage/${message.messageId}`}>Modify
                                                </Link> */}
                                                {/* <Link
                                                    className="btn btn-danger"
                                                    to={`/message/removemessage/${message.messageId}`}>Remove
                                                </Link> */}

                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListOfMessages