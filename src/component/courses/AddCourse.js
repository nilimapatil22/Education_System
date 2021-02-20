import React, { Component } from 'react'

export default class AddCourse extends Component {
    render() {
        return (
            <div className="payment">
                <form>
            <div>
                    <h1>Enroll To Course</h1>
                <div className="root-div"><br/>
                  

                    <div className="mb-3 add-course">
                        <input type="text"  className="form-control" id="courseName" placeholder="Course Name" />
                    </div>

                    <div className="mb-3 add-course">
                        <input type="number"  className="form-control" id="coursefee" placeholder="Course fee" />
                    </div>

                    <div className="mb-3 add-course">
                        <input type="number"  className="form-control" id="courseduration" placeholder="Course Duration" />
                    </div>

                    <div className="mb-3 add-course">
                        <input type="number"  className="form-control" id="adminid" placeholder="Admin ID" />
                    </div>

                   <button type="button"  className="btn btn-primary add-button">Enroll</button><i>          </i>
                    <button type="button"  className="btn btn-primary add-button">Change Course</button>
                    <form method="get" action="/login/enroll"><button type="submit" className="btn btn-primary float-right">
                          Back
                    </button></form>
                    
                </div>

                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    {this.props.returnedMessage}
                </div>

            </div>
            </form>
            </div>
        )
    }
}
