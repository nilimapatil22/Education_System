import React, { Component } from 'react'
import UserService from '../service/UserService'
// import CourseService from '../services/CourseService'

class UpdateStudent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                   userId:'',
                   firstName:'',
                   lastName:'',
                   email:'',
                   password:'',
                   phoneNumber:'',
                   address:'',
                   //roleType:''
                
        }
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this)
        this.changelastNameHandler = this.changelastNameHandler.bind(this)
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.changePasswordHandler=this.changePasswordHandler.bind(this)
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this)
        this.changeAddressHandler=this.changeAddressHandler.bind(this)
        //this.changeRoleTypeHandler=this.changeRoleTypeHandler.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }
    changefirstNameHandler = (event) => {
        this.setState({
            firstName : event.target.value
        })
    }
    changelastNameHandler = (event) => {
        this.setState({
            lastName : event.target.value
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
changePhoneNumberHandler= (event) => {
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

    componentDidMount(){
        UserService.getUser(this.props.match.params.userId).then((dataResponse) => {
            const user = dataResponse.data
            this.setState({
                userId : user.userId,
                firstName : user.firstName,
                lastName : user.lastName,
                email:user.email,
                password:user.password,
                phoneNumber:user.phoneNumber,
                address:user.address,
                // roleType:user.roleType

            })
        })
    }
    updateUser = (event) => {
        event.preventDefault()
        const userDetails = {
            userId : this.state.userId,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email:this.state.email,
            password:this.state.password,
            phoneNumber:this.state.phoneNumber,
            address:this.state.address,
            // roleType:this.state.roleType
        }
        UserService.updateUser(userDetails,this.state.userId).then(dataResponse =>{
            this.props.history.push('/login/listofallstudents')
        }) 
        alert(`User ${this.state.userId} is updated succesfully`)
        console.log(userDetails)
    }
    cancel(){
        this.props.history.push('/login/listofallstudents')
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h1 className = "text-center">Modify User</h1>
                            <div className = "card-body">
                                <form onSubmit = {this.updateUser}>
                                    <div className = "form-group">
                                        <label>First Name: </label>
                                        <input placeholder = "First Name"  name = "First Name" className = "form-control" value = {this.state.firstName} onChange = {this.changefirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Last Name: </label>
                                        <input placeholder = "Last Name"  name = "Last Name" className = "form-control" value = {this.state.lastName} onChange = {this.changelastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email: </label>
                                        <input placeholder = "Email"  name = "Email" className = "form-control" value = {this.state.email} onChange = {this.changeEmailHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label>Password: </label>
                                        <input placeholder = "Password"  name = "Password" className = "form-control" value = {this.state.password} onChange = {this.changePasswordHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label>Phone Number: </label>
                                        <input placeholder = "Phone Number"  name = "Phone Number" className = "form-control" value = {this.state.phoneNumber} onChange = {this.changePhoneNumberHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label>Address: </label>
                                        <input placeholder = "Address"  name = "Address" className = "form-control" value = {this.state.address} onChange = {this.changeAddressHandler}/>
                                    </div>

                                    {/* <div className = "form-group">
                                        <label>Role Type: </label>
                                        <input placeholder = "Role Type"  name = "RoleType" className = "form-control" value = {this.state.roleType} onChange = {this.changeRoleTypeHandler}/>
                                    </div> */}

                                    <button className = "btn btn-success"  type = "submit">Modify</button>
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

export default UpdateStudent





// import React, { Component } from 'react'
// import axios from "axios"
//  class UpdateStudent extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             userId:this.props.match.params.userId,
//             firstName:"",
//             lastName:"",
//             email:"",
//             password:"",
//             phoneNumber:"",
//             address:"",
//             roleType: "",
//             firstNameError: "",
//             lastNameError: "",
//             emailError: "",
//             passwordError:"",
//             phoneNumberError:"",
//             addressError:"",
//             roleTypeError:"",
//             userData:[]
//         }
//         this.saveUser=this.saveUser.bind(this);
//     }
    
// componentDidMount(){
//     axios.put(`http://localhost:7171/api/getUser/${this.state.userId}`).then((res)=>{
//         let userdata=res.data;
//         this.setState=({
//             firstName:userdata.firstName,
//             lastName:userdata.lastName,
//             email:userdata.email,
//             password:userdata.password,
//             phoneNumber:userdata.phoneNumber,
//             roleType: userdata.roleType,
//             address:userdata.address
//         });
//     });
//  }

//     saveUser= async(e)=>{
//         e.preventDefault();
//         let UserData={userId:this.state.userId,
//             firstName: this.state.firstName,
//             lastName: this.state.lastName,
//             email: this.state.email,
//             password:this.state.password,
//             phoneNumber:this.state.phoneNumber,
//             address:this.state.address,
//             roleType:this.state.roleType
//                          }
//             console.log("user="+JSON.stringify(UserData))

//            await axios.put("http://localhost:7171/api/updateUser",UserData).then(responce=>{
           
//         })
//         this.props.history.push('/login/listofallstudents');
//     }
//     // changeGrade=(event)=>{
//     //     this.setState({
//     //         grade:event.target.value
//     //     })
//     // }
//     // changeDate=(event)=>{
//     //     this.setState({
//     //         date:event.target.value
//     //     })
//     // }
//     // changeCourseId=(event)=>{
//     //     this.setState({
//     //         courseId:this.target.value
//     //     })
//     // }
//     cancel(){
//         this.props.history.push('/login/listofallstudents');
//     }
//     render() {
//         return (
//             <div>
//                 <div className="payment">
             
//               <h1>
//           <span className="badge badge-dark">User List</span>
//         </h1>
//         <form onSubmit={this.saveUser}>
        
//         <div className="form-group">
//           <div className="alert-danger">{this.state.firstNameError}</div>
//           <input
//             type="text"
//             className="form-control"
//             id="firstName"
//             placeholder="Enter firstName"
//             value={this.state.firstName}
//             onChange={(event) =>
//               this.setState({ firstName: event.target.value })
//             }
//           />
//            </div>
                    
//           <br></br>

//           <div className="form-group">
//           <div className="alert-danger">{this.state.lastNameError}</div>
//           <input
//             type="text"
//             className="form-control"
//             id="lastName"
//             placeholder="Enter Lastname"
//             value={this.state.lastName}
//             onChange={(event) =>
//               this.setState({lastName: event.target.value })
//             }
//           />
//            </div>

        
         
//            <div className="form-group">
//           <div className="alert-danger">{this.state.emailError}</div>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter Email"
//             value={this.state.email}
//             onChange={(event) =>
//               this.setState({ email: event.target.value })
//             }
//           />
//            </div>
    
//         <div className="form-group">
//         <div className="alert-danger">{this.state.passwordError}</div>
//         <input type="password"
//                     className="form-control"
//                     value={this.state.password}
//                     placeholder="Enter Password"
//                     onChange={(event) =>
//                     this.setState({ password: event.target.value })
//                 }/>
//                 </div>

//         <div className="form-group">
//           <div className="alert-danger">{this.state.phoneNumberError}</div>
//           <input
//             type="Number"
//             className="form-control"
//             id="phone number"
//             placeholder="Enter Phone Number"
//             value={this.state.phoneNumber}
//             onChange={(event) =>
//               this.setState({ phoneNumber: event.target.value })
//             }
//           />
//            </div>

//            <div className="form-group">
//           <div className="alert-danger">{this.state.addressError}</div>
//           <input
//             type="text"
//             className="form-control"
//             id="address"
//             placeholder="Enter address"
//             value={this.state.address}
//             onChange={(event) =>
//               this.setState({ address: event.target.value })
//             }
//           />
//            </div>
                   
          
//           <div className="form-group">
//           <div className="alert-danger">{this.state.roleTypeError}</div>
//           <input
//             type="text"
//             className="form-control"
//             id="roleType"
//             placeholder="Enter role type"
//             value={this.state.roleType}
//             onChange={(event) =>
//               this.setState({ roleType: event.target.value })
//             }
//           />
//            </div>
                   
      
//         <button type="submit" className="btn btn-primary " onClick={this.saveUser}>
//           Save 
//         </button><button type="submit" className="btn btn-danger " onClick={this.cancel.bind(this)}>
//           Cancel
//         </button>
//         </form>
//             </div>
//             </div>
//         )
//     }
// }
// export default UpdateStudent