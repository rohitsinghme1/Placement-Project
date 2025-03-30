import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
// import StudentLogin from "./pages/Login/Student_Login.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import UniversityLogin from "./pages/University_Login/University_Login.jsx";

function App() {

  return (
    <div>
        <Dashboard />
    </div>
  )
}

export default App
