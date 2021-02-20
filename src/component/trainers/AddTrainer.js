import axios from 'axios';
import React from 'react';

class AddCourse extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            TrainerName:"",
            TrainerFee:"",
            courseDuration:"",
            courseObj:{ "courseId": 0, "courseName": "", "courseFee": "", "courseDuration":""}
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    // handleChange(event)
    // {
    //     const {name, value, type, checked}=event.target;
    //     if(type==="checkbox")
    //     {
    //         this.setState({[name]:event.target.checked})
    //     }
    //     else{
    //         console.log("......"+[event.target.name]);
    //         this.setState({[event.target.name]:event.target.value});
    //     }


    // }
    handleSubmit(event)
    {
        let tempCourseObj={"courseId":this.state.courseId,
                         "courseName":this.state.courseName,
                          "courseFee":this.state.courseFee,
                          "courseDuration":this.state.courseDuration
                        }
            console.log("u entered....."+tempCourseObj);


            axios.post("http://localhost:7171/api/Course", tempCourseObj)
            .then(
                (responseData)=>{console.log("Data added"+responseData.data.message)}
            )
            .catch((errorData)=>{console.log("Error while adding")})

    }
    render()
    {
        return(<div>
            <h4>Enter Course details here</h4>
            <form onSubmit={this.handleSubmit}>

               Course Name :<input type="text" name="courseName" 
                       onChange={this.handleChange}/><br />

                Course Fee :<input type="text" name="courseFee" 
                        onChange={this.handleChange}/><br />

                Course Duration<input type="text" name="courseDuration"
                         onChange={this.handleChange}/><br />

                <button type="submit">Add Course</button>
                
            </form>
        </div>);
    }
}
export default AddCourse