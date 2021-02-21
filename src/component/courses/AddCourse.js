import axios from 'axios';
import React, { Component } from 'react'

 class AddCourse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        courseId:"",
        courseName:"",
        fee:"",
        duration:"",
        adminId:"",
         }
         this.registerCourse=this.registerCourse.bind(this);
    }

    registerCourse=async(e)=>{
      e.preventDefault()
      let courseDetails={
        courseId:this.state.courseId,
        courseName:this.state.courseName,
        fee:this.state.fee,
        duration:this.state.duration,
        adminId:this.state.adminId
      }
      console.log("Coursedata="+JSON.stringify(courseDetails))

      await axios.post("http://localhost:7171/api/Course",courseDetails)
      .then((responseData)=>{
      })
    this.props.history.push('/course');
  }
  cancel(){
    this.props.history.push('/login');
  }
    
    render() {
        return (
            <div>
                <form onSubmit={this.registerCourse}>

                <h1 className="text-center">
                  <span className="badge badge-dark">Course Register</span>
                </h1>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.courseNameError}</div>
                  <label>Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="courseName"
                    placeholder="Enter Course Name"
                    value={this.state.courseName}
                    onChange={(event) =>
                      this.setState({ courseName: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <div className="alert-danger">{this.state.feeError}</div>
                  <label>Course Fee</label>
                  <input
                    type="number"
                    className="form-control"
                    id="fee"
                    placeholder="Enter Fee"
                    value={this.state.fee}
                    onChange={(event) =>
                      this.setState({ fee: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.durationError}</div>
                  <label>Course Duration</label>
                  <input
                    type="number"
                    className="form-control"
                    id="duration"
                    placeholder="Enter Duration"
                    value={this.state.duration}
                    onChange={(event) =>
                      this.setState({ duration: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.adminIdError}</div>
                  <label>Admin Id</label>
                  <input
                    type="number"
                    className="form-control"
                    id="adminId"
                    placeholder="Enter Admin Id"
                    value={this.state.adminId}
                    onChange={(event) =>
                      this.setState({ adminId: event.target.value })
                    }
                  />
                </div>

               
                <div className="text-center"> 
                
                  <button type="submit" className="btn btn-primary"
                  onClick={this.registerCourse}>
                  Register
                  </button>
                </div>
               
              </form>
            </div>
        )
    }
}
export default AddCourse