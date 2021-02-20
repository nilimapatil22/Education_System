import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1 className="text-center">
                  <span className="badge badge-dark">Register</span>
                </h1>
                <div className="form-group mr2">
                  <div className="alert-danger">{this.state.firstNameError}</div>
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
                  <div className="alert-danger">{this.state.emailError}</div>
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
                <button type="submit" className="btn btn-primary">
                  Register
                </button> 
                <br/><i>Already have an account?<a href="/">SignIn</a></i></div>
               
              </form>
            </div>
        )
    }
}
