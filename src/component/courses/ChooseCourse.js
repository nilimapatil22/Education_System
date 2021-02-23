import React from 'react';
import axios from "axios";

class ChooseCourse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            course:{
                courseId:"",
                courseName:"",
                courseFee:"",
                courseDuration:""
            }

        }
    }
    componentDidMount()
    {
        console.log(`${this.props.match.params.id}`)
        axios.get(`http://localhost:7171/api/getCourse/${this.props.match.params.id}`)
        .then(
            (response)=>{
                console.log("Fetch data"+response.data);
                this.setState({
                    course:response.data
                })
            }
        )
        .catch(
            (errorResponse)=>{
                console.log("Error in adding the data"+errorResponse);
            }
        );
    }
    render()
    {
        return(
            <div>
            <h4>Student enroll the course</h4>
            <form onSubmit={this.handleSubmit}>
            <table>
                <tbody>
                <tr key={this.state.course.courseId}>
                        <td>{this.state.course.courseId}</td>
                        <td>{this.state.course.courseName}</td>
                        <td>{this.state.course.fee}</td>
                        <td>{this.state.course.duration}</td>
                </tr>
                </tbody>
            </table>
               Student Id :<input type="number" name="studentId" 
                       onChange={this.handleChange}/><br />

                <button type="submit">Register</button>
                
            </form>
        </div>
        )
    }
}
export default ChooseCourse