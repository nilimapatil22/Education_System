import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

class ListOfTrainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                AllTrainerData:[],errMsg:""
        }
    }



     componentDidMount(){
     axios.get("http://localhost:7171/api/getAllTrainers")
     .then((responseData)=>
     {
         console.log("Retrieved from json"+responseData.data);
         this.setState({AllTrainerData:responseData.data});
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
                        className="btn btn-primary mr-2"
                         to={"/registertrainer"}>Add Trainer
                    </Link>  
                    <Link 
                        className="btn btn-primary mr-2"
                         to={"/login/mainpageadmin"}>Go Back
                    </Link>                
                </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Trainer Id</th>
                                    <th> Trainer Name </th>
                                    {/* <th>  Trainer PhoneNo </th>
                                    <th>  Trainer Email </th> */}
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.AllTrainerData.map(function(trainer,key)
                                    {
                                        return(
                                            <tr key={key}>
                                                <td>{trainer.trainerId}</td>
                                                <td>{trainer.trainerName}</td>
                                                {/* <td>{trainer.phoneNo}</td>
                                                <td>{trainer.email}</td> */}
                                                <td>
                                                <Link 
                                                    className="btn btn-primary mr-2" 
                                                    to={`/viewtrainer/${trainer.trainerId}`}>View
                                                </Link>

                                                <Link 
                                                    className="btn btn-primary mr-2" 

                                                    to={`/modifytrainer/${trainer.trainerId}`}>Modify
                                                </Link>
{/* 
                                               <Link
                                                    className="btn btn-danger"
                                                    to={`/removetrainer/${trainer.trainerId}`}>Remove
                                                </Link> */}


                                               <Link
                                                    className="btn btn-danger"
                                                    to={"/"}>Delete
                                                </Link>

                 
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

export default ListOfTrainer