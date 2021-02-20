import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddCourse from './courses/AddCourse';
import Navbar from './layout/Navbar';
import About from './Page/About'
import Contact from './Page/Contact'
import Login from './Page/Login';
import MainPage from './Page/MainPage';
import Registration from './Page/Registration';
import AddPayment from './payments/AddPayment';

 class Home extends Component {
    render() {
        return (
            <div className="container">
            <Router>
              <Navbar/>
             
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/register" component={Registration}></Route>
             <Route exact path="/login/enroll" component={MainPage}></Route>
             <Route exact path="/login/enroll/payment/" component={AddPayment}></Route>
             <Route exact path="/login/enroll/payment/course" component={AddCourse}></Route>
            </Router>
          </div>
        )
    }
}
export default Home;
