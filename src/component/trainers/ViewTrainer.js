import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
class ViewTrainer extends Component {
    constructor(props)
    {
    super(props); 
    this.state={AllTrainerData:[],errMsg:""}
    console.log("In  ShowAllTrainer constructor executed"); 
    }
    componentDidMount(){
        console.log("In  ShowAllTrainer componentDidMount executed");
        axios.get("http://localhost:7171/api/getAllTrainers")
    .then(
           (responseData)=>{
           console.log(" Retrived from json "+responseData.data);
           this.setState({AllTrainerData:responseData.data});
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
                <h2><center>***Trainer Data***</center></h2>
                <table border="2">
                <thead>
                <tr>
                   <td>TRAINER_ID</td>
                   <td>TRAINER_NAME</td>
                   <td>PHONE_NO</td>
                   <td>EMAIL</td>
                </tr>
                </thead>
                <tbody>
                {this.state.AllTrainerData.map(function(trainer, key){
                return (
                    <tr key={key}>
                        <td>{trainer.trainerId}</td>
                        <td>{trainer.trainerName}</td>
                        <td>{trainer.trainerPhoneNo}</td>
                        <td>{trainer.trainerEmail}</td>
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

export default ViewTrainer
