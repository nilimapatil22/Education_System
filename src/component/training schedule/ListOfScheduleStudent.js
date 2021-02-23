
import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

class ListOfScheduleStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                schedules: []
        }
    }



    componentDidMount(){
        axios.get("http://localhost:7171/api/getAllSchedules")
        .then(res => {
             this.setState({ schedules: res.data
            });
        })
        .catch((error) =>{
            alert(JSON.stringify("error: " + error));
        })
     }



    render() {
        return (
            <div>
                 <h2 className="text-center">Training Schedule List</h2>
                 <div className = "row">
                    <Link 
                        className="btn btn-primary mr-2" to={"/login/mainpagestudent"}>Go Back
                    </Link>
               
                </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Student Id </th>
                                    <th> Start Date </th>
                                    <th> End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.schedules.map(
                                         schedule => 
                                         <tr key = {schedule.scheduleId}>
                                              <td> {schedule.studentId} </td>   
                                              <td> {schedule.startDate}</td>
                                              <td> {schedule.endDate}</td>
                                             
                                             <td>
                                                <Link 
                                                    className="btn btn-primary mr-2" 
                                                    to={`/trainingschedule/viewschedulestudent/${schedule.scheduleId}`}>View
                                                </Link>
                 
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

export default ListOfScheduleStudent