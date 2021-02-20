import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {
    return(
    <div className="py-4">
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Course Id</th>
            <th scope="col">Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{this.coursecourseId}</td>
              <td>{this.courseName}</td>
              <td>
                <Link
                  className="btn btn-primary mr-2"
                  to={`/courses/view/`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/courses/modify/`}
                >
                  Modify
                </Link>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/courses/delete/`}
                >
                  Delete
                </Link>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Home;
