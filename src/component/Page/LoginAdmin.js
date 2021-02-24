import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
//import AdminService from './services/AdminService';
//import HomeHeader from "./HomeHeader";
//<HomeHeader />
class LoginAdmin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: "",
            password: "",
            error: false,
            errors: {}
        }
        this.loginUser = this.loginUser.bind(this);
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    loginUser = (event) => {
        event.preventDefault();

        axios.get(`http://localhost:7171/api/getUser/${this.state.userId}/${this.state.password}`)
            .then((response) => {
                if (response.data) {
                    console.log(this.state.userId)
                    console.log(this.state.password)
                    alert("LoggedIn successfully");
                    this.props.history.push("/login/mainpageadmin");
                    localStorage.setItem("isLoggedIn", true);

                } else {
                    this.setState((this.state.error = "Credentials"));
                    console.log(this.state.userId)
                    console.log(this.state.password)
                }
            })
            .catch((error) => {
                alert("Invalid credentials")
                console.log(this.state.userId)
                console.log(this.state.password)
            });

    }

    validateForm() {
        let user = {
            userId: this.state.userId,
            password: this.state.password
        };
        let errors = {};
        let formIsValid = true;

        if (!user.userId) {
            formIsValid = false;
            errors["userId"] = "*Please enter your userId.";
        }

        if (!user.password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        this.setState({
            errors: errors,
        });
        return formIsValid;
    }

    render() {

        return (

            <div class="body login">
                <form class="form-signin card col-md-6 offset-md-3 offset-md-3" method="get">
                    <h1 class="h3 mb-3 font-weight-normal"><b>Login</b></h1>

                    <label>User Id</label>
                    <input type="number"
                        placeholder="Enter User Id"
                        name="userId"
                        value={this.state.userId}
                        class="form-control"
                        onChange={this.handleChange} />

                    <br />

                    <label>Password</label>
                    <input type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        class="form-control"
                        onChange={this.handleChange}
                        placeholder="Enter Password" />

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
              </label>
                    </div>

                    <button type="submit" onClick={this.loginUser}
                        className="btn btn-lg btn-primary btn-block" >Sign in</button>

                    <i>You don't have as account?<a href="/registeradmin">SignUp</a></i>
                    {/* <p className="forgot-password ">
                        Forgot <a href="#">password?</a>
                    </p> */}


                </form>
            </div>
        );
    }
}
export default LoginAdmin;