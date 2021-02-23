import axios from 'axios';
import React, { Component } from 'react'

 class RegistrationAdmin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        userId:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:"",
        address:"",
        roleType:[],
        firstNameError:"",
        lastNameError:"",
        emailError:"",
        passwordError:"",
        phoneNumberError:"",
        addressError:"",
        roleTypeError:""
         }
         this.registerUser=this.registerUser.bind(this);
         this.cancel=this.cancel.bind(this);
    }

    validate=()=>{
      let flag=true;
     //validation of firstname
     if(this.state.firstName===""){
      flag=false;
       this.setState({firstNameError:"Student's first Name is required"});
     } 
     else if(!/[A-Z]{1}[a-z]/.test(this.state.firstName)){
       this.setState({firstNameError:"first letter should be capital"})
     }
     else{
       this.setState({firstNameError:""});
    }
   
     //validation of lastname
     if(this.state.lastName===""){
       flag=false;
        this.setState({lastNameError:"Student's last Name is required"});
      } 
      else if(!/[A-Z]{1}[a-z]/.test(this.state.lastName)){
        this.setState({lastNameError:"first letter should be capital"})
      }
      else{
        this.setState({lastNameError:""});
     }
    
   //validation of email
  if(this.state.email===""){
       flag=false;
      this.setState({emailError : "Email is required"})
    }
    else if(!/\S+@\S+\.\S+/.test(this.state.email)){
        this.setState({emailError : "Email address is invalid"})
    }
   else{
     this.setState({emailError:""})
   }
   
   //validation of phone number
   if(!this.state.phoneNumber){
   flag=false;
   this.setState({phoneNumberError:"Phone number is required"});
   }
   else{
     this.setState({phoneNumberError:""});
   }

 //validation of address
 if(this.state.address===""){
   flag=false;
   this.setState({addressError:"address is required"});
 }
 else{
   this.setState({addressError:""});
 }
 
 //validation of roleType
 if(this.state.roleType===""){
    flag=false;
    this.setState({roleTypeError:"roletype is required"});
  }
  else if(this.state.roleType!="admin")
  {
    this.setState({roleTypeError:"you are not authorized"})
  }
  else{
    this.setState({roleTypeError:""});
  }
 
  //validation of password
  if(this.state.password===""){
   flag=false;
   this.setState({passwordError:"password is required"});
 }
 else if(this.state.password.length<8||this.state.password.length>20)
 {
   this.setState({passwordError:"Password is invalid"})
 }
 else{
   this.setState({passwordError:""});
 }
return flag;
  }

    registerUser=async(e)=>{
      e.preventDefault()
      let isValid = this.validate();
    if (!isValid) {
      return false;
    }

      let userDetails={
        userId:this.state.userId,firstName:this.state.firstName,
        lastName:this.state.lastName,email:this.state.email,
        password:this.state.password, phoneNumber:this.state.phoneNumber,
        address:this.state.address,roleType:this.state.roleType
      }
      console.log("Admindata="+JSON.stringify(userDetails))

      await axios.post("http://localhost:7171/api/add",userDetails)
      .then((responseData)=>{
      })
    this.props.history.push('/loginadmin');
  }
  cancel(){
    this.props.history.push('/');
  }

    
    render() {
        return (
            <div>
                <form onSubmit={this.registerUser}>

                <h1 className="text-center">
                  <span className="badge badge-dark">Register</span>
                </h1>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.firstNameError}</div>
                  <label>User First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter First Name"
                    value={this.state.firstName}
                    onChange={(event) =>
                      this.setState({ firstName: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <div className="alert-danger">{this.state.lastNameError}</div>
                  <label>User Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter Last Name"
                    value={this.state.lastName}
                    onChange={(event) =>
                      this.setState({ lastName: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.emailError}</div>
                  <label>Email</label>
                  <input
                    type="text"
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
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.phoneNumberError}</div>
                  <label>Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Enter Phone Number"
                    value={this.state.phoneNumber}
                    onChange={(event) =>
                      this.setState({ phoneNumber: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.addressError}</div>
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter Address"
                    value={this.state.address}
                    onChange={(event) =>
                      this.setState({ address: event.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <div className="alert-danger">{this.state.roleTypeError}</div>
                  <label>Role Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="roleType"
                    placeholder="Enter Role Type"
                    value={this.state.roleType}
                    onChange={(event) =>
                      this.setState({ roleType: event.target.value })
                    }
                  />
                </div>
                
                 
                <div className="text-center"> 
                
                  <button type="submit" className="btn btn-primary"
                  onClick={this.registerUser}>
                  Register
                  </button>

                  <button type="submit" className="btn btn-danger"
                  onClick={this.cancel}>
                    Cancel
                  </button>
      
                <br/><i>Already have an account?<a href="/loginadmin">SignIn</a></i></div>
               
              </form>
            </div>
        )
    }
}
export default RegistrationAdmin