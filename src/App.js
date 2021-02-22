import logo from './logo.svg';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from "./component/layout/Navbar"
import Home from "./component/Home"
import './Style/style.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (

    <div className="container">
      <Home/>
    {/* <Login></Login> */}

    </div>
  );
}

export default App;
