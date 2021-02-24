import React, { Component } from 'react'
import UserService from '../Service/UserService'
// import CourseService from '../services/CourseService'

class UpdateAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            address: '',
            //roleType:''

        }
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this)
        this.changelastNameHandler = this.changelastNameHandler.bind(this)
        this.changeEmailHandler = this.changeEmailHandler.bind(this)
        this.changePasswordHandler = this.changePasswordHandler.bind(this)
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this)
        this.changeAddressHandler = this.changeAddressHandler.bind(this)
        //this.changeRoleTypeHandler=this.changeRoleTypeHandler.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }
    changefirstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    changelastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    changeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    changePasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    changePhoneNumberHandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    changeAddressHandler = (event) => {

        this.setState({
            address: event.target.value
        })
    }

    // changeRoleTypeHandler = (event) => {

    //   this.setState({
    //       roleType: event.target.value
    //   })
    // }

    componentDidMount() {
        UserService.getUser(this.props.match.params.userId).then((dataResponse) => {
            const user = dataResponse.data
            this.setState({
                userId: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                phoneNumber: user.phoneNumber,
                address: user.address,
                // roleType:user.roleType

            })
        })
    }
    updateUser = (event) => {
        event.preventDefault()
        const userDetails = {
            userId: this.state.userId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            // roleType:this.state.roleType
        }
        UserService.updateUser(userDetails, this.state.userId).then(dataResponse => {
            this.props.history.push('/login/listofalladmin')
        })
        alert(`User ${this.state.userId} is updated succesfully`)
        //this.props.history.push('/login/listofalladmin')
        console.log(userDetails)
    }
    cancel() {
        this.props.history.push('/login/listofalladmin')
    }
    render() {
        return (
            <div className="signupform">
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h1 className="text-center">Modify User</h1>
                            <div className="card-body">
                                <form onSubmit={this.updateUser}>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="First Name" required className="form-control" value={this.state.firstName} onChange={this.changefirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="Last Name" required className="form-control" value={this.state.lastName} onChange={this.changelastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="Email" name="Email" required className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input placeholder="Password" name="Password" required className="form-control" value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone Number: </label>
                                        <input placeholder="Phone Number" name="Phone Number" className="form-control" value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder="Address" name="Address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>

                                    {/* <div className = "form-group">
                                        <label>Role Type: </label>
                                        <input placeholder = "Role Type"  name = "RoleType" className = "form-control" value = {this.state.roleType} onChange = {this.changeRoleTypeHandler}/>
                                    </div> */}

                                    <button className="btn btn-success" type="submit">Modify</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateAdmin





