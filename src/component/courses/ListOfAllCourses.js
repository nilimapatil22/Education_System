import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

class ListOfAllCourses extends Component {
    constructor(props) {
        super(props)

        this.state = {
                AllCourseData:[],errMsg:""
        }
    }



     componentDidMount(){
     axios.get("http://localhost:7171/api/getAllCourses")
     .then((responseData)=>
     {
         console.log("Retrieved from json"+responseData.data);
         this.setState({AllCourseData:responseData.data});
     })
     .catch((errorResponce)=>{
         console.log("Error in Fetching the data"+errorResponce);
     })
    }



    render() {
        return (
            <div>
                 <h2 className="text-center">List of All Course</h2>
                 <br></br>
                 <div className = "row">
                    <Link 
                        className="btn btn-primary mr-2" to={"/registercourse"}>Add Course
                    </Link> 
                    <Link 
                        className="btn btn-primary mr-2"  to={"/login/mainpageadmin"}>Go Back
                    </Link>                 
                </div>
                
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>course Id</th>
                                    <th> Course Name </th>
                                    {/* <th>  Course Fee </th>
                                    <th>  Course Duration </th> */}
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.AllCourseData.map(function(course,key)
                                    {
                                        return(
                                            <tr key={key}>
                                                <td>{course.courseId}</td>
                                                <td>{course.courseName}</td>
                                                {/* <td>{course.fee}</td>
                                                <td>{course.duration}</td> */}
                                                <td>
                                                <Link 
                                                    className="btn btn-primary mr-2" 
                                                    to={`/viewcourse/${course.courseId}`}>View
                                                </Link>

                                                <Link 
                                                    className="btn btn-primary mr-2" 
                                                    to={`/modifycourse/${course.courseId}`}>Modify
                                                </Link>

                                               {/* <Link
                                                    className="btn btn-danger"
                                                    to={`/removecourse/${course.courseId}`}>Delete
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

export default ListOfAllCourses