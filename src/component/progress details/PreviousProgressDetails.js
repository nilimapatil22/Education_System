import React, { Component } from 'react'
import axios from "axios"
import { NavLink, Link } from "react-router-dom";
export default class PreviousProgressDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  grade:"",
            //  date:"",
            //  student:"",
            //  admin:"",
            //  courseId:""
            progressdata:[]
        }
    }
   
    componentDidMount(){
        axios.get("http://localhost:7171/api/getStudentAllPreviousProgressDetails").then(responce=> {
            this.setState({
                progressdata:responce.data
            });
        })
    }
    render() {
        return (
            <div>
                <h1 >Previous Progress Report Card</h1>
                <div className = "row">  
                    <Link 
                        className="btn btn-primary mr-2" align ="right" to={"/login/listofprogressstudent"}>Go Back
                    </Link>              
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Progress Id</th>
                                <th>Grade</th>
                                <th>Date</th>
                                <th>CourseID</th>
                                <th>Actions</th>
                                {/* <th>Admin ID</th> */}
                                {/* <th>student ID</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.progressdata.map(
                                    progressdata=>
                                    <tr key={progressdata.gradeId}>
                                        <td>{progressdata.gradeId}</td>
                                        <td>{progressdata.grade}</td>
                                        <td>{progressdata.date}</td>
                                        <td>{progressdata.courseId}</td>
                                        <td>
                                                    <Link 
                                                        className="btn btn-primary mr-2" 
                                                        to={`/viewprogressstudent/${progressdata.gradeId}`}>View
                                                    </Link>
                     
                                       </td>
                                    </tr>    
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}