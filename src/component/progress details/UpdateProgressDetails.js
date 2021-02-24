import React, { Component } from 'react'
import ProgressService from '../Service/ProgressService'

class UpdateProgressDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gradeId: '',
            grade: '',
            date: '',
            courseId: '',
            studentId: '',
            adminId: ''
        }
        this.changegradeHandler = this.changegradeHandler.bind(this)
        this.changecourseIdHandler = this.changecourseIdHandler.bind(this)
        this.changestudentIdHandler = this.changestudentIdHandler.bind(this)
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.updateProgress = this.updateProgress.bind(this)
    }
    changegradeHandler = (event) => {
        this.setState({
            grade: event.target.value
        })
    }
    changeDateHandler = (event) => {
        this.setState({
            date: event.target.value
        })
    }
    changecourseIdHandler = (event) => {
        this.setState({
            courseId: event.target.value
        })
    }
    changestudentIdHandler = (event) => {
        this.setState({
            studentId: event.target.value
        })
    }
    changeadminIdHandler = (event) => {
        this.setState({
            adminId: event.target.value
        })
    }
    componentDidMount() {
        ProgressService.getProgressById(this.props.match.params.gradeId).then((dataResponse) => {
            const progress = dataResponse.data
            this.setState({
                gradeId: progress.gradeId,
                grade: progress.grade,
                date: progress.date,
                courseId: progress.courseId,
                studentId: progress.studentId,
                adminId: progress.adminId

            })
        })
    }
    updateProgress = (event) => {
        event.preventDefault()
        const progressDetails = {
            gradeId: this.state.gradeId,
            grade: this.state.grade,
            date: this.state.date,
            courseId: this.state.courseId,
            adminId: this.state.adminId,
            studentId: this.state.studentId
        }
        ProgressService.updateProgress(progressDetails, this.state.gradeId).then(dataResponse => {
            this.props.history.push('/login/listofprogress')
        })
        alert(`progress ${this.state.gradeId} is updated succesfully`)
        console.log(progressDetails)
    }
    cancel() {
        this.props.history.push('/login/listofprogress')
    }
    render() {
        return (
            <div className="progress ">
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h1 className="text-center">Update Progress</h1>
                            <div className="card-body">
                                <form onSubmit={this.updateProgress}>
                                    <div className="form-group">
                                        <label>Grade : </label>
                                        <select
                                            className="form-control"
                                            name="Grade"
                                            value={this.state.grade}
                                            required
                                            placeholder="Grade"
                                            onChange={(event) =>
                                                this.setState({ grade: event.target.value })
                                            }>
                                            <option>Select Grade</option>
                                            <option key="A+" value="A+">A+</option>
                                            <option key="A" value="A">A</option>
                                            <option key="B+" value="B+">B+</option>
                                            <option key="B" value="B">B</option>
                                            <option key="C+" value="C+">C+</option>
                                            <option key="C" value="C">C</option>
                                            <option key="D" value="D">D</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Date : </label>
                                        <input type="date" placeholder="Date" name="Date " required className="form-control" value={this.state.date} onChange={this.changeDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Course ID: </label>
                                        <input placeholder="Course Id" name="Course Id" required className="form-control" value={this.state.courseId} onChange={this.changecourseIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>StudentId : </label>
                                        <input placeholder="Student Id" name="Student Id" required className="form-control" value={this.state.studentId} onChange={this.changestudentIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Admin Id: </label>
                                        <input placeholder="Admin Id" name="Admin Id" required className="form-control" value={this.state.adminId} onChange={this.changeadminIdHandler} />
                                    </div>
                                   <div className="text-center">
                                   <button className="btn btn-success" type="submit">Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateProgressDetails






// import React, { Component } from 'react'
// import axios from "axios"
// export default class UpdateProgressDetails extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             gradeId:this.props.match.params.gradeId,
//             grade:"",
//             date:"",
//             studentId:"",
//             adminId:"",
//             courseId:"",
//             //paymentIdError: "",
//             progressIdError: "",
//             gradeError: "",
//             dateError: "",
//             studentIdError: "",
//             adminIdError:"",
//             courseIdError:"",
//             studentData:[]

//            // ProgressData:{"gradeId":0,"grade": 0,"date": "","courseId": 0,"studentId": ""}
//         }
//         this.saveProgress=this.saveProgress.bind(this);
//     }

// componentDidMount(){
//     axios.put(`http://localhost:7171/api/getProgressDetailsById/${this.state.gradeId}`).then((res)=>{
//         let gradedata=res.data;
//         this.setState=({
//             grade:gradedata.fee,
//             data:gradedata.date,
//             courseId:gradedata.courseId,
//             studentId:gradedata.studentId

//         });
//     });
//  }

//     saveProgress= async(e)=>{
//         e.preventDefault();
//         let ProgressData={gradeId:this.state.gradeId,
//                         grade:this.state.grade, 
//                         date:this.state.date, 
//                         courseId:this.state.courseId,
//                         adminId:this.state.adminId,
//                         studentId:this.state.studentId
//                          }
//             console.log("progress="+JSON.stringify(ProgressData))

//            await axios.put("http://localhost:7171/api/updateGrade",ProgressData).then(responce=>{

//         })
//         this.props.history.push('/login/listofprogress');
//     }
//     // changeGrade=(event)=>{
//     //     this.setState({
//     //         grade:event.target.value
//     //     })
//     // }
//     // changeDate=(event)=>{
//     //     this.setState({
//     //         date:event.target.value
//     //     })
//     // }
//     // changeCourseId=(event)=>{
//     //     this.setState({
//     //         courseId:this.target.value
//     //     })
//     // }
//     cancel(){
//         this.props.history.push('/login/listofprogress');
//     }
//     render() {
//         return (
//             <div>
//                 <div className="payment">

//               <h1>
//           <span className="badge badge-dark">Report Card</span>
//         </h1>
//         <form onSubmit={this.saveProgress}>

//         <div className="form-group">
//           <div className="alert-danger">{this.state.gradeError}</div>
//           <select
//                     className="form-control"
//                     value={this.state.grade}
//                     placeholder="Choose Student Id"
//                     onChange={(event) =>
//                     this.setState({ grade: event.target.value })
//                 }>
//                     <option>Select Grade</option>
//                     <option key="A+" value="A+">A+</option>
//                     <option key="A" value="A">A</option>
//                     <option key="B+" value="B+">B+</option>
//                     <option key="B" value="B">B</option>
//                     <option key="C+" value="C+">C+</option>
//                     <option key="C" value="C">C</option>
//                     <option key="D" value="D">D</option>

//           </select>
//           <br></br>

//           <div className="form-group">
//           <div className="alert-danger">{this.state.dateError}</div>
//           <input
//             type="date"
//             className="form-control"
//             id="amount"
//             placeholder="Enter amount"
//             value={this.state.date}
//             onChange={(event) =>
//               this.setState({ date: event.target.value })
//             }
//           />
//            </div>



//           <div className="form-group">
//           <input
//             type="Number"
//             className="form-control"
//             id="amount"
//             placeholder="Enter courseId"
//             value={this.state.courseId}
//             onChange={(event) =>
//               this.setState({ courseId: event.target.value })
//             }
//           />
//           </div>
//           <div className="form-group">
//            <input
//             type="Number"
//             className="form-control"
//             id="amount"
//             placeholder="Enter StudentId"
//             value={this.state.studentId}
//             onChange={(event) =>
//               this.setState({ studentId: event.target.value })
//             }
//           />
//           </div>



//            </div>
//         <div className="form-group">
//         <input type="Number"
//                     className="form-control"
//                     value={this.state.adminId}
//                     placeholder="Enter Admin Id"
//                     onChange={(event) =>
//                     this.setState({ adminId: event.target.value })
//                 }/>

//           </div>
//         <button type="submit" className="btn btn-primary " onClick={this.saveProgress}>
//           Submit Report
//         </button><button type="submit" className="btn btn-danger " onClick={this.cancel.bind(this)}>
//           Cancel
//         </button>
//         </form>
//             </div>
//             </div>
//         )
//     }
// }
