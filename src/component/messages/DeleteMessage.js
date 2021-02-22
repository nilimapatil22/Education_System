import axios from 'axios';
import React, { Component } from 'react'
 
class DeleteMessage extends Component {
     state={
 
     };
 
    componentDidMount(){
      axios.delete(`http://localhost:7171/api/deleteMessage/${this.props.match.params.messageId}`)
      .then((result)=>{
          alert("Message Deleted!");
          this.props.history.push("/login/messages");
      },
      (error)=>{
          alert("Message not deleted")
      }
      );
   
    }
    
    render() {
        return (
            <p>Processing</p>
        )
    }
}
 
export default DeleteMessage;