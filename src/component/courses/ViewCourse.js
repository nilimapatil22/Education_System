import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
class ViewCourse extends Component {
    constructor(props)
    {
    super(props); 
    this.state={AllCourseData:[],errMsg:""}
    console.log("In  ShowAllCourseComponent constructor executed"); 
    }
    componentDidMount(){
        console.log("In  ShowAllEmpComponent componentDidMount executed");
        axios.get("http://localhost:7171/api/getAllCourses")
    .then(
           (responseData)=>{
           console.log(" Retrived from json "+responseData.data);
           this.setState({AllCourseData:responseData.data});
         } 
    )
    .catch(
            (errorResponce)=>{ 
            console.log(" Error in Fetching the data "+
            errorResponce);}
        );
    }
    render() {
        return (
                <div>
                <h2><center>***Course Data***</center></h2>
                <table border="2">
                <thead>
                <tr>
                   <td>COURSE_ID</td>
                   <td>COURSE_NAME</td>
                   <td>COURSE_FEE</td>
                   <td>COURSE_DURATION</td>
                   <td>COURSE_ENROLL</td>
                </tr>
                </thead>
                <tbody>
                {this.state.AllCourseData.map(function(course, key){
                return (
                    <tr key={key}>
                        <td>{course.courseId}</td>
                        <td>{course.courseName}</td>
                        <td>{course.fee}</td>
                        <td>{course.duration}</td>
                        <td>
                            <Link 
                                className="btn btn-primary mr-2"
                                       to={"/"}>View</Link>
                           <Link 
                           className="btn btn-primary mr-2" 
                                      to={"/updateCourse"}>Modify </Link>

                          <Link
                           className="btn btn-danger"
                                     to={"/"}>Delete</Link>
                     </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
</div>
        )
    }
}

export default ViewCourse
