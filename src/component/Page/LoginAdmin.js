import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class LoginAdmin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    
    handleSubmit(){
        this.props.history.push('/login/mainpageadmin');
    }
    render() {
        return (
            <form className="payment"  onSubmit={this.handleSubmit}>
            <Router>
            <h3 className="text-center">Sign In</h3>

        <div className="form-group ">
            <label>User ID</label>
            <input type="number" className="form-control" placeholder="Enter user id" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary btn-lg" onSubmit={this.handleSubmit}>Login</button><br></br>
        <i>You dont have account?<a href="/registeradmin">SignUp</a></i></div>

        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
                    </Router>
                </form>
                )
            }
        }
export default LoginAdmin
