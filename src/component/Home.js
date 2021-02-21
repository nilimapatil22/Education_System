import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EnrollCourse from './courses/EnrollCourse';
import Navbar from './layout/Navbar';
import About from './Page/About'
import Contact from './Page/Contact'
import Login from './Page/Login';
import MainPage from './Page/MainPage';
import Registration from './Page/Registration';
import AddPayment from './payments/AddPayment';
import ChooseCourse from './courses/ChooseCourse';
import ViewCourse from './courses/ViewCourse';
import ViewTrainer from './trainers/ViewTrainer';
import ListOfAllCourses from './courses/ListOfAllCourses';
import ListOfTrainer from './trainers/ListOfTrainer';
import AddCourse from './courses/AddCourse';
import AddTrainer from './trainers/AddTrainer';

 class Home extends Component {
    render() {
        return (
            <div className="payment">
            <Router>
              <Navbar/>
             
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/register" component={Registration}></Route>
             <Route exact path="/login/enroll" component={MainPage}></Route>
             <Route exact path="/login/enroll/payment/" component={AddPayment}></Route>
             {/* <Route exact path="/login/enroll/payment/course" component={AddCourse}></Route> */}
             <Route exact path="/enrollcourse" component={EnrollCourse}></Route>
             <Route exact path="/chooseCourse/:courseId" component={ChooseCourse}></Route>
             <Route exact path ="/viewCourse" component={ViewCourse}></Route>
             <Route exact path="/viewTrainer/:trainerId" component={ViewTrainer}></Route>
             <Route exact path="/listofcourse" component={ListOfAllCourses}></Route>
             <Route exact path="/viewcourse/:courseId" component={ViewCourse}></Route>
             <Route exact path="/listoftrainer" component={ListOfTrainer}></Route>
             <Route exact path="/addcourse" component={AddCourse}></Route>
             <Route exact path="/addtrainer" component={AddTrainer}></Route>
            </Router>
          </div>
        )
    }
}
export default Home;
