import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EnrollCourse from './courses/EnrollCourse';
import Navbar from './layout/Navbar';
import About from './Page/About'
import Contact from './Page/Contact'
import RegistrationStudent from './Page/RegistrationStudent';
import RegistrationAdmin from './Page/RegistrationAdmin';
import DeleteCourse from './courses/DeleteCourse';

import ListOfScheduleStudent from './training schedule/ListOfScheduleStudent';
import ListOfMessagesStudent from './messages/ListOfMessagesStudent';
import ListOfMessages from './messages/ListOfMessages';
import MainPageStudent from './Page/MainPageStudent';
import MainPageAdmin from './Page/MainPageAdmin';
import ViewMessage from './messages/ViewMessage';
import ViewTrainingSchedule from './training schedule/ViewTrainingSchedule';
import ViewTrainingScheduleStudent from './training schedule/ViewTrainingScheduleStudent';
import UpdateMessage from './messages/UpdateMessage';
import UpdateTrainingSchedule from './training schedule/UpdateTrainingSchedule';
import AddMessage from './messages/AddMessage';
import AddMessageStudent from './messages/AddMessageStudent';
import AddTrainingSchedule from './training schedule/AddTrainingSchedule';
import ListOfTrainingSchedule from './training schedule/ListOfTrainingSchedule';
import DeleteTrainingSchedule from './training schedule/DeleteTrainingSchedule';
import ViewMessageStudent from './messages/ViewMessageStudent';
import DeleteMessage from './messages/DeleteMessage';
import LoginStudent from './Page/LoginStudent';
import LoginAdmin from './Page/LoginAdmin';
import Welcome from './Page/Welcome';
import UpdateCourse from './courses/UpdateCourse';
import UpdateTrainer from './trainers/UpdateTrainer';
import DeleteTrainer from './trainers/DeleteTrainer';
import ViewPayment from './payments/ViewPayment';
import ViewPaymentStudent from './payments/ViewPaymentStudent';
import ListOfPayment from './payments/ListOfPayment';
import ListOfPaymentStudent from './payments/ListOfPaymentStudent';
import AddPayment from './payments/AddPayment';

import StudentProgressView from './progress details/StudentProgressView';
import ViewProgressDetails from './progress details/ViewProgressDetails';
import DetailviewProgress from './progress details/DetailViewProgress';
import StudentViewProgressDetails from './progress details/StudentViewProgressDetails';
import UpdateProgressDetails from './progress details/UpdateProgressDetails';
import DeleteProgressDetails from './progress details/DeleteProgressDetails';
import PreviousProgressDetails from './progress details/PreviousProgressDetails';
import AddProgressDetails from './progress details/AddProgressDetails';
import ListOfAllStudent from './users/ListOfAllStudent';
import ListOfAllAdmin from './users/ListOfAllAdmin';
import ViewStudent from './users/ViewStudent';
import ViewAdmin from './users/ViewAdmin';
import UpdateAdmin from './users/UpdateStudent';
import UpdateStudent from './users/UpdateStudent';
import DeleteStudent from './users/DeleteStudent';
import DeleteAdmin from './users/DeleteAdmin';

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
              <Route exact path="/" component={Welcome}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/loginstudent" component={LoginStudent}></Route>
              <Route exact path ="/loginadmin" component={LoginAdmin}></Route>
              <Route exact path="/registerstudent" component={RegistrationStudent}></Route>
              <Route exact path="/registeradmin" component={RegistrationAdmin}></Route>
              <Route exact path="/login/mainpagestudent" component={MainPageStudent}></Route>
              <Route exact path="/login/mainpageadmin" component={MainPageAdmin}></Route>
 
             <Route exact path="/enrollcourse" component={EnrollCourse}></Route>
             <Route exact path="/choosecourse/:courseId" component={ChooseCourse}></Route>
            <Route exact path="/listofcourse" component={ListOfAllCourses}></Route>
             <Route exact path="/removecourse/:courseId" component={DeleteCourse}></Route>
             <Route exact path="/viewcourse/:courseId" component={ViewCourse}></Route>
             <Route exact path="/registercourse" component={AddCourse}></Route>
             {/* <Route exact path="/updatecourse" component={UpdateCourse}></Route> */}
             <Route exact path="/modifycourse/:courseId" component={UpdateCourse}></Route>

             <Route exact path="/listoftrainer" component={ListOfTrainer}></Route>
             <Route exact path="/viewtrainer/:trainerId" component={ViewTrainer}></Route>
             <Route exact path="/registertrainer" component={AddTrainer}></Route>
             <Route exact path="/modifytrainer/:trainerId" component={UpdateTrainer}></Route>
             <Route exact path="/removetrainer/:trainerId" component={DeleteTrainer}></Route>

             <Route exact path ="/login/listofallstudents" component={ListOfAllStudent}></Route>
             <Route exact path ="/login/listofalladmin" component={ListOfAllAdmin}></Route>
             <Route exact path ="/modifystudent/:userId" component={UpdateStudent}></Route>
             <Route exact path ="/modifyadmin/:userId" component={UpdateAdmin}></Route>
             <Route exact path="/viewstudent/:userId" component={ViewStudent}></Route>
             <Route exact path="/viewadmin/:userId" component={ViewAdmin}></Route>
             <Route exact path="/removestudent/:userId" component={DeleteStudent}></Route>
             <Route exact path="/removeadmin/:userId" component={DeleteAdmin}></Route>

             <Route exact path="/login/listofpayment" component={ListOfPayment}></Route>
             <Route exact path="/login/listofpaymentstudent" component={ListOfPaymentStudent}></Route>
             <Route exact path="/viewpayment/:paymentId" component={ViewPayment}></Route>
             <Route exact path="/viewpaymentstudent/:paymentId" component={ViewPaymentStudent}></Route>
             <Route exact path="/makepayment" component={AddPayment}></Route>

             <Route exact path="/login/listofprogress" component = {ViewProgressDetails}></Route>
             <Route exact path="/login/listofprogressstudent" component = {StudentProgressView}></Route>
             <Route exact path="/viewprogress/:gradeId" component ={DetailviewProgress}></Route>
             <Route exact path ="/viewprogressstudent/:gradeId" component={StudentViewProgressDetails}></Route>
             <Route exact path ="/modifyprogress/:gradeId" component={UpdateProgressDetails}></Route>
             <Route exact path ="/removeprogress/:gradeId" component={DeleteProgressDetails}></Route>
             <Route exact path ="/createprogress" component={AddProgressDetails}></Route>
             <Route exact path ="/viewpreviousprogress" component={PreviousProgressDetails}></Route>

             

             <Route exact path="/login/trainingschedulestudent" component={ListOfScheduleStudent}></Route>
             <Route exact path ="/login/trainingschedule" component={ListOfTrainingSchedule}></Route>
             <Route exact path="/trainingschedule/modifyschedule/:scheduleId" component={UpdateTrainingSchedule}></Route>
             <Route exact path="/trainingschedule/createschedule" component={AddTrainingSchedule}></Route>
             <Route exact path="/trainingschedule/removeschedule/:scheduleId" component={DeleteTrainingSchedule}></Route>
             <Route exact path="/trainingschedule/viewschedule/:scheduleId" component={ViewTrainingSchedule}></Route>
             <Route exact path="/trainingschedule/viewscheduleStudent/:scheduleId" component={ViewTrainingScheduleStudent}></Route>

             <Route exact path="/login/messagesstudent" component={ListOfMessagesStudent}></Route>
             <Route exact path="/login/messages" component={ListOfMessages}></Route>
             <Route exact path = "/messages/viewmessage/:messageId" component={ViewMessage}></Route>
             <Route exact path = "/messages/viewmessageStudent/:messageId" component={ViewMessageStudent}></Route>
             <Route exact path="/message/sendmessage" component={AddMessage}></Route>
             <Route exact path="/message/sendmessagestudent" component={AddMessageStudent}></Route>
             <Route exact path="/message/removemessage/:messageId" component={DeleteMessage}></Route>
            <Route exact path = "/messages/modifymessage/:messageId" component={UpdateMessage}></Route>

             {/* <Route exact path="/login/enroll/payment/" component={AddPayment}></Route> */}
             {/* <Route exact path="/login/enroll/payment/course" component={AddCourse}></Route> */}
             {/* <Route exact path="/enrollcourse" component={EnrollCourse}></Route>
             <Route exact path="/chooseCourse/:courseId" component={ChooseCourse}></Route>
             <Route exact path ="/viewCourse" component={ViewCourse}></Route>
             <Route exact path="/viewTrainer/:trainerId" component={ViewTrainer}></Route>
             <Route exact path="/listofcourse" component={ListOfAllCourses}></Route>
             <Route exact path="/viewcourse/:courseId" component={ViewCourse}></Route>
             <Route exact path="/listoftrainer" component={ListOfTrainer}></Route>
             <Route exact path="/addcourse" component={AddCourse}></Route>
             <Route exact path="/addtrainer" component={AddTrainer}></Route> */}

            </Router>
          </div>
        )
    }
}
export default Home;
