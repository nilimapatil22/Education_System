import React, { Component } from 'react'
import TrainerService from '../services/TrainerService'

class UpdateTrainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            trainerId : '',
             trainerName : '',
             phoneNo : '',
             email:'',
             courseName:''
        }
        this.changeTrainerNameHandler=this.changeTrainerNameHandler.bind(this)
        this.changePhoneNoHandler=this.changePhoneNoHandler.bind(this)
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.changeCourseDataHandler=this.changeCourseDataHandler.bind(this)
        this.updateTrainer = this.updateTrainer.bind(this)
    }
    changeTrainerNameHandler = (event) => {
        this.setState({
            trainerName : event.target.value
        })
    }
    changePhoneNoHandler = (event) => {
        this.setState({
            phoneNo : event.target.value
        })
    }
    changeEmailHandler = (event) => {
      this.setState({
          email : event.target.value
      })
  }
  changeCourseDataHandler=(event)=>{
      this.setState({
          courseName:event.target.value
      })
  }
    componentDidMount(){
        TrainerService.getTrainerById(this.props.match.params.trainerId).then((dataResponse) => {
            const trainer = dataResponse.data
            this.setState({
               trainerId : trainer.trainerId,
                trainerName : trainer.trainerName,
                phoneNo : trainer.phoneNo,
                email:trainer.email,
                courseName:trainer.courseName

            })
        })
    }
    updateTrainer = (event) => {
        event.preventDefault()
        const trainerDetails = {
           trainerId : this.state.trainerId,
           trainerName: this.state.trainerName,
           phoneNo: this.state.phoneNo,
           email: this.state.email,
           courseName : this.state.courseName
        }
        TrainerService.updateTrainer(trainerDetails,this.state.trainerId).then(dataResponse =>{
            this.props.history.push('/listoftrainer')
        }) 
        alert(`Trainer ${this.state.trainerId} is updated succesfully`)
        console.log(trainerDetails)
    }
    cancel(){
        this.props.history.push('/listoftrainer')
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h1 className = "text-center">Update Trainer</h1>
                            <div className = "card-body">
                                <form onSubmit = {this.updateTrainer}>
                                    <div className = "form-group">
                                        <label>Trainer Name: </label>
                                        <input placeholder = "Trainer Name"  name = "Trainer Name" className = "form-control" value = {this.state.trainerName} onChange = {this.changeTrainerNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Trainer Phone Number: </label>
                                        <input placeholder = "Trainer Phone Number"  name = "Phone Number" className = "form-control" value = {this.state.phoneNo} onChange = {this.changePhoneNoHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Trainer Email: </label>
                                        <input placeholder = "Trainer Email"  name = "Trainer Email" className = "form-control" value = {this.state.email} onChange = {this.changeEmailHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label>Course Name: </label>
                                        <input placeholder = "Course Name"  name = "Course Name" className = "form-control" value = {this.state.courseName} onChange = {this.changeCourseDataHandler}/>
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

export default UpdateTrainer


