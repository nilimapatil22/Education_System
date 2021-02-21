import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
class ViewTrainer extends Component {
  state = {
    trainer: {
    
    }
  };
  componentDidMount() {
     axios
       .get(
         ` http://localhost:7171/api/getTrainer/${this.props.match.params.trainerId}`
       )
       .then((result) => {
         this.setState({
          trainer: result.data,
         });
       });
   }

  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark">View Trainer</span>
        </h1>
        <div className = "row">
                    <Link 
                        className="btn btn-primary mr-2"
                         to={"/listoftrainer"}>Go Back
                    </Link>                 
                </div>

        <table className="table table-bordered">
          <tr>
            <td>Trainer Id</td>
            <th>{this.state.trainer.trainerId}</th>
          </tr>
          <tr>
            <td>Trainer Name</td>
            <th>{this.state.trainer.trainerName}</th>
          </tr>
          <tr>
            <td>Trainer PhoneNo</td>
            <th>{this.state.trainer.phoneNo}</th>
          </tr>
          <tr>
            <td>Trainer Email</td>
            <th>{this.state.trainer.email}</th>
          </tr>
          
        </table>
      </div>
    );
  }
}

export default ViewTrainer;




