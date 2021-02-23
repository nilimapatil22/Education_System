import axios from 'axios';
import React, { Component } from 'react'
 
class DeleteProgressDetails extends Component {
     state={
 
     };
 
    componentDidMount(){
      axios.delete(`http://localhost:7171/api/deleteProgressDetails/${this.props.match.params.gradeId}`)
      .then((result)=>{
          alert("User Deleted Successfully");
          this.props.history.push("/login/listofprogress");
      },
      (error)=>{
          alert("user not deleted")
      }
      );
   
    }
    
    render() {
        return (
            <p>Processing</p>
        )
    }
}
 
export default DeleteProgressDetails;