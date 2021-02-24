import React, { Component } from 'react'
export default class Contact extends Component {
  render() {
    return (
      <div className="contact color">
        <h1 className="text-center">Contact Us</h1>
        <h5 className="text-center">We would love to answer any questions and hear any comments you might have!</h5>
        <div>

          <table className="table table-bordered table-striped">
            <tr>
              <div>

              </div>
              <td>
                <div class="col-6">
                  <p>Nilima Patil</p>
                  <p><u>nilimapatil221998@gmail.com</u></p>
                </div>
              </td>


              <td>
                <div class="col-6">
                  <p>Priyanka Pawar</p>
                  <p><u>priyankapawar7910@gmail.com</u></p>
                </div>
              </td>

            </tr>
          </table>

          <table className="table table-bordered table-striped">
            <tr>
              <td>
                <div class="col-6">
                  <p>Prajakta Girase</p>
                  <p><u>prajaktagirase99@gmail.com</u></p>
                </div>
              </td>
              <td>
                <div class="col-6">
                  <p>Madhuri Shelar</p>
                  <p><u>madhurishelar1998@gmail.com</u></p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}