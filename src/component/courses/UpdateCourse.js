import React, { Component } from 'react'
import CourseService from '../services/CourseService'

class UpdateCourse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            courseId : '',
             courseName : '',
             fee : '',
             duration:''
        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this)
        this.changeFeeHandler = this.changeFeeHandler.bind(this)
        this.changeDurationHandler=this.changeDurationHandler.bind(this)
        this.updateCourse = this.updateCourse.bind(this)
    }
    changeCourseNameHandler = (event) => {
        this.setState({
            courseName : event.target.value
        })
    }
    changeFeeHandler = (event) => {
        this.setState({
            fee : event.target.value
        })
    }
    changeDurationHandler = (event) => {
      this.setState({
          duration : event.target.value
      })
  }
    componentDidMount(){
        CourseService.getCourseById(this.props.match.params.courseId).then((dataResponse) => {
            const course = dataResponse.data
            this.setState({
               courseId : course.courseId,
                courseName : course.courseName,
                fee : course.fee,
                duration:course.duration

            })
        })
    }
    updateCourse = (event) => {
        event.preventDefault()
        const courseDetails = {
           courseId : this.state.courseId,
            courseName : this.state.courseName,
            fee : this.state.fee,
            duration:this.state.duration
        }
        CourseService.updateCourse(courseDetails,this.state.courseId).then(dataResponse =>{
            this.props.history.push('/listofcourse')
        }) 
        alert(`Course ${this.state.courseId} is updated succesfully`)
        console.log(courseDetails)
    }
    cancel(){
        this.props.history.push('/listofcourse')
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h1 className = "text-center">Update Course</h1>
                            <div className = "card-body">
                                <form onSubmit = {this.updateCourse}>
                                    <div className = "form-group">
                                        <label>Course Name: </label>
                                        <input placeholder = "Course Name"  name = "Course Name" className = "form-control" value = {this.state.courseName} onChange = {this.changeCourseNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Course Fee: </label>
                                        <input placeholder = "Course fee"  name = "Course Fee" className = "form-control" value = {this.state.fee} onChange = {this.changeFeeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Course Duration: </label>
                                        <input placeholder = "Course Duration"  name = "Course Duration" className = "form-control" value = {this.state.duration} onChange = {this.changeDurationHandler}/>
                                    </div>
                                    <button className = "btn btn-success"  type = "submit">Update</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft : "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateCourse
