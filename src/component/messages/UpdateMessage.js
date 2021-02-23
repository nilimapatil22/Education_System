import React, { Component } from 'react'
import axios from "axios"
 class UpdateMessage extends Component {
    constructor(props){
        super(props);
        this.state={
            messageId:this.props.match.params.messageId,
            message:"",
            studentId:"",
            createdByUserId:"",
            createdDate:"",
            messageError:"",
            studentIdError:"",
            userIdError:"",
            dateError:"",
            messageData:[]
        }
        this.saveMessage=this.saveMessage.bind(this);
    }
    
componentDidMount(){
    axios.put(`http://localhost:7171/api/getMessage/${this.state.messageId}`).then((res)=>{
        let messageData=res.data;
        this.setState=({
          message:messageData.message,
          studentId:messageData.studentId,
          createdByUserId:messageData.createdByUserId,
          createdDate:messageData.createdDate
        });
    });
 }

 saveMessage= async(e)=>{
        //e.preventDefault();
        let messageData={messageId:this.state.messageId,
                        message:this.state.message, 
                        studentId:this.state.studentId, 
                        createdByUserId:this.state.createdByUserId,
                        createdDate:this.state.createdDate,
                         }
            console.log("message="+JSON.stringify(messageData))

           await axios.put("http://localhost:7171/api/updateMessage",messageData).then(responce=>{
           
        })
        this.props.history.push('/login/messages');
    }

    cancel(){
        this.props.history.push('/login/messages');
    }
    render() {
        return (
            <div>
                <div>
             
              <h1>
          <span className="badge badge-dark">Message List</span>
        </h1>
        <form onSubmit={this.saveMessage}>
        
        <div className="form-group">
          <div className="alert-danger">{this.state.studentIdError}</div>
          <label>Enter Student Id</label>
          <input
            type="number"
            className="form-control"
            id="studentId"
            placeholder="Enter student Id"
            defaultValue={this.state.studentId}
            onChange={(event) =>
              this.setState({ studentId: event.target.value })
            }
          />
           </div>

          <div className="form-group">
          <div className="alert-danger">{this.state.messageError}</div>
          <label>Enter message:</label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Enter message"
            value={this.state.message}
            onChange={(event) =>
              this.setState({ message: event.target.value })
            }
          />
           </div>

        
         
           <div className="form-group">
          <div className="alert-danger">{this.state.userIdError}</div>
          <label>Enter Your User Id:</label>
          <input
            type="number"
            className="form-control"
            id="createdByUserId"
            placeholder="Enter Your User Id"
            value={this.state.createdByUserId}
            onChange={(event) =>
              this.setState({ createdByUserId: event.target.value })
            }
          />
           </div>
    
           <div className="form-group">
              <div className="alert-danger">{this.state.dateError}</div>
              <label>Select Date:</label>
              <input
                type="date"
                className="form-control"
                id="createdDate"
                required
                value={this.state.createdDate}
                onChange={(event) =>
                  this.setState({ createdDate: event.target.value })
                }
              />
            </div>
        <button type="submit" className="btn btn-success " onClick={this.saveMessage}>
          Save 
        </button>
        <button type="submit" className="btn btn-danger " onClick={this.cancel.bind(this)}>
          Cancel
        </button>
        </form>
            </div>
            </div>
        )
    }
}
export default UpdateMessage