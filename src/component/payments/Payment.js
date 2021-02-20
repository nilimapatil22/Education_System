import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddPayment from "./component/payments/AddPayment";
export default class Payment extends Component {
    state = {};
    render() {
        return (
            <div className="container">
        <Router>
         
          <Switch>
           
            <Route exact path="/student/makepayment" component={AddPayment} />
   
            
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </div>
        )
    }
}
