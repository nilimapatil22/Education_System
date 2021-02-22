
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";
import axios from 'axios'
class ListOfTrainingSchedule extends Component {
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
                        className="btn btn-primary mr-2" to={"/trainingschedule/createschedule"}>Create Schedule
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
                                    <th> Student Id </th>
                                    <th> Start Date </th>
                                    <th> End Date</th>
                                    <th> Actions</th>
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
                                                    to={`/trainingschedule/viewschedule/${schedule.scheduleId}`}>View
                                                </Link>
                                                <Link
                                                    className="btn btn-outline-primary mr-2"
                                                    to={`/trainingschedule/modifyschedule/${schedule.scheduleId}`}>Modify
                                                </Link>
                                                {/* <Link
                                                    className="btn btn-danger"
                                                    to={`/trainingschedule/removeschedule/${schedule.scheduleId}`}>Remove
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

export default ListOfTrainingSchedule