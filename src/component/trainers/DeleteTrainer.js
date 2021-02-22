import axios from 'axios';
import React, { Component } from 'react'

class DeleteTrainer extends Component {
     state={};

    componentDidMount(){
      axios.delete(`http://localhost:7171/api/deleteTrainer/${this.props.match.params.trainerId}`)
      .then((result)=>{
          alert("Trainer Deleted Successfully");
          this.props.history.push("/listoftrainer");
      },
      (error)=>{
          alert("Trainer not deleted")
      }
      );
   
    }
    
    render() {
        return (
            <p>Processing</p>
        )
    }
}

export default DeleteTrainer;