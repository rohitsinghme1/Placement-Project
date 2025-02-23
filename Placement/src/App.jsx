import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import StudentLogin from "./pages/Login/Student_Login.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UniversityLogin from "./pages/University_Login/University_Login.jsx";
function App() {

  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<StudentLogin />} />
              <Route path ="/University_Login" element={<UniversityLogin />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
