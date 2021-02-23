import React, { Component } from 'react'
import axios from "axios"
 class UpdateCourse extends Component {
    constructor(props){
        super(props);
        this.state={
            courseId:this.props.match.params.courseId,
            courseName:"",
            fee:"",
            duration:"",
            adminId:"",
            courseIdError: "",
            courseNameError: "",
            feeError: "",
            durationError: "",
            adminIdError:"",
            courseData:[]
        }
        this.saveCourse=this.saveCourse.bind(this);
    }
    
componentDidMount(){
    axios.put(`http://localhost:7171/api/getCourse/${this.state.courseId}`).then((res)=>{
        let courseData=res.data;
        this.setState=({
            courseName:courseData.courseName,
            fee:courseData.fee,
            duration:courseData.duration,
            adminId:courseData.adminId
        });
    });
 }

    saveCourse= async(e)=>{
        e.preventDefault();
        let CourseData={courseId:this.state.courseId,
                        courseName:this.state.courseName, 
                        fee:this.state.fee, 
                        duration:this.state.duration,
                        adminId:this.state.adminId,
                         }
            console.log("course="+JSON.stringify(CourseData))

           await axios.put("http://localhost:7171/api/updateCourse",CourseData).then(responce=>{
           
        })
        this.props.history.push('/listofcourse');
    }

    cancel(){
        this.props.history.push('/listofcourse');
    }
    render() {
        return (
            <div>
                <div className="payment">
             
              <h1>
          <span className="badge badge-dark">Course List</span>
        </h1>
        <form onSubmit={this.saveCourse}>
        
        <div className="form-group">
          <div className="alert-danger">{this.state.courseNameError}</div>
          <label>Enter Course Name</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            placeholder="Enter CourseName"
            value={this.state.courseName}
            onChange={(event) =>
              this.setState({ courseName: event.target.value })
            }
          />
           </div>
                    
          <br></br>

          <div className="form-group">
          <div className="alert-danger">{this.state.feeError}</div>
          <label>Enter fee(INR)</label>
          <input
            type="number"
            className="form-control"
            id="fee"
            placeholder="Enter fee"
            value={this.state.fee}
            onChange={(event) =>
              this.setState({ fee: event.target.value })
            }
          />
           </div>

        
         
           <div className="form-group">
          <div className="alert-danger">{this.state.durationError}</div>
          <label>Enter duration(days)</label>
          <input
            type="number"
            className="form-control"
            id="duration"
            placeholder="Enter duration"
            value={this.state.duration}
            onChange={(event) =>
              this.setState({ duration: event.target.value })
            }
          />
           </div>
    
        <div className="form-group">
          <label>Enter your Id</label>
        <input type="Number"
                    className="form-control"
                    value={this.state.adminId}
                    placeholder="Enter Admin Id"
                    onChange={(event) =>
                    this.setState({ adminId: event.target.value })
                }/>
                   
          </div>
        <button type="submit" className="btn btn-primary " onClick={this.saveCourse}>
          Save Course
        </button><button type="submit" className="btn btn-danger " onClick={this.cancel.bind(this)}>
          Cancel
        </button>
        </form>
            </div>
            </div>
        )
    }
}
export default UpdateCourse