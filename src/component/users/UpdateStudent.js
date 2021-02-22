import React, { Component } from 'react'
import axios from "axios"
 class UpdateStudent extends Component {
    constructor(props){
        super(props);
        this.state={
            userId:this.props.match.params.userId,
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            phoneNumber:"",
            address:"",
            roleType: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError:"",
            phoneNumberError:"",
            addressError:"",
            roleTypeError:"",
            userData:[]
        }
        this.saveUser=this.saveUser.bind(this);
    }
    
componentDidMount(){
    axios.put(`http://localhost:7171/api/getUser/${this.state.userId}`).then((res)=>{
        let userdata=res.data;
        this.setState=({
            firstName:userdata.firstName,
            lastName:userdata.lastName,
            email:userdata.email,
            password:userdata.password,
            phoneNumber:userdata.phoneNumber,
            roleType: userdata.roleType,
            address:userdata.address
        });
    });
 }

    saveUser= async(e)=>{
        e.preventDefault();
        let UserData={userId:this.state.userId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password:this.state.password,
            phoneNumber:this.state.phoneNumber,
            address:this.state.address,
            roleType:this.state.roleType
                         }
            console.log("user="+JSON.stringify(UserData))

           await axios.put("http://localhost:7171/api/updateUser",UserData).then(responce=>{
           
        })
        this.props.history.push('/login/listofallstudents');
    }
    // changeGrade=(event)=>{
    //     this.setState({
    //         grade:event.target.value
    //     })
    // }
    // changeDate=(event)=>{
    //     this.setState({
    //         date:event.target.value
    //     })
    // }
    // changeCourseId=(event)=>{
    //     this.setState({
    //         courseId:this.target.value
    //     })
    // }
    cancel(){
        this.props.history.push('/login/listofallstudents');
    }
    render() {
        return (
            <div>
                <div className="payment">
             
              <h1>
          <span className="badge badge-dark">User List</span>
        </h1>
        <form onSubmit={this.saveUser}>
        
        <div className="form-group">
          <div className="alert-danger">{this.state.firstNameError}</div>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter firstName"
            value={this.state.firstName}
            onChange={(event) =>
              this.setState({ firstName: event.target.value })
            }
          />
           </div>
                    
          <br></br>

          <div className="form-group">
          <div className="alert-danger">{this.state.lastNameError}</div>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter Lastname"
            value={this.state.lastName}
            onChange={(event) =>
              this.setState({lastName: event.target.value })
            }
          />
           </div>

        
         
           <div className="form-group">
          <div className="alert-danger">{this.state.emailError}</div>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={(event) =>
              this.setState({ email: event.target.value })
            }
          />
           </div>
    
        <div className="form-group">
        <div className="alert-danger">{this.state.passwordError}</div>
        <input type="password"
                    className="form-control"
                    value={this.state.password}
                    placeholder="Enter Password"
                    onChange={(event) =>
                    this.setState({ password: event.target.value })
                }/>
                </div>

        <div className="form-group">
          <div className="alert-danger">{this.state.phoneNumberError}</div>
          <input
            type="Number"
            className="form-control"
            id="phone number"
            placeholder="Enter Phone Number"
            value={this.state.phoneNumber}
            onChange={(event) =>
              this.setState({ phoneNumber: event.target.value })
            }
          />
           </div>

           <div className="form-group">
          <div className="alert-danger">{this.state.addressError}</div>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={this.state.address}
            onChange={(event) =>
              this.setState({ address: event.target.value })
            }
          />
           </div>
                   
          
          <div className="form-group">
          <div className="alert-danger">{this.state.roleTypeError}</div>
          <input
            type="text"
            className="form-control"
            id="roleType"
            placeholder="Enter role type"
            value={this.state.roleType}
            onChange={(event) =>
              this.setState({ roleType: event.target.value })
            }
          />
           </div>
                   
      
        <button type="submit" className="btn btn-primary " onClick={this.saveUser}>
          Save 
        </button><button type="submit" className="btn btn-danger " onClick={this.cancel.bind(this)}>
          Cancel
        </button>
        </form>
            </div>
            </div>
        )
    }
}
export default UpdateStudent