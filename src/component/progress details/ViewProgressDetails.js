import React, { Component } from 'react'
import axios from "axios"
import { NavLink, Link } from "react-router-dom";
export default class ProgressDetails extends Component {
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
    editgrade(gradeId){
        this.props.history.push(`/modifyprogress/${gradeId}`);
        
        }
    componentDidMount(){
        axios.get("http://localhost:7171/api/getAllPreviousProgressDetails").then(responce=> {
            this.setState({
                progressdata:responce.data
            });
        })
    }
    render() {
        return (
            <div>
                <h1 >Report Card</h1>
                <div className = "row">
                    <Link 
                        className="btn btn-primary mr-2" to={"/createprogress"}>Add Progress 
                    </Link> 
                    <Link 
                        className="btn btn-primary mr-2"  to={"/login/mainpageadmin"}>Go Back
                    </Link>                 
                </div>
                
                 <br></br>
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
                                                        to={`/viewprogress/${progressdata.gradeId}`}>View
                                                    </Link>
    
                                                    <Link
                                                        className="btn btn-primary mr-2" 
                                                       onClick={()=>this.editgrade(progressdata.gradeId)}>Modify
                                                    </Link>
    
                                                   {/* <Link
                                                        className="btn btn-danger"
                                                        to={`/removeprogress/${progressdata.gradeId}`}>Delete
                                                    </Link> */}
                     
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