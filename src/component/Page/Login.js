import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from './Registration';
export default class Login extends Component {
    render() {
        return (
            <form className="payment">
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

        <div className="form-group">
            <label>Role Type(student/admin)</label>
            <select>
                <option name="admin" value="admin">Admin</option>
                <option name="student" value="student">Student</option>
            </select>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary btn-lg">Login</button><br></br>
        <i>You dont have account?<a href="/register">SignUp</a></i></div>

        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
                    </Router>
                </form>
                )
            }
        }
