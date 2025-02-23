import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import StudentLogin from "./Pages/Student_Login/Student_Login.jsx";
import UniversityLogin from "./Pages/University_Login/University_Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
        <div>
            <Router>
                <Routes>
                    <Route path ="/" element={<StudentLogin />} />
                    <Route path ="/University_Login" element={<UniversityLogin />} />
                </Routes>
            </Router>
        </div>
    </>
  )
}

export default App
