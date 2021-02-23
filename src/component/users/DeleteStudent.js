import axios from 'axios';
import React, { Component } from 'react'
 
class DeleteStudent extends Component {
     state={
 
     };
 
    componentDidMount(){
      axios.delete(`http://localhost:7171/api/deleteStudent/${this.props.match.params.userId}`)
      .then((result)=>{
          alert("User Deleted Successfully");
          this.props.history.push("/login/listofallstudents");
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
 
export default DeleteStudent;