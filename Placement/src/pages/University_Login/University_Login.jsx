import React, {useState} from "react";
import "./University_Login.css"
import {useNavigate} from "react-router-dom";

const UniversityLogin = () => {
    const [adminname, setAdminname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handelLogin = (t) => {
        t.preventDefault();
        navigate("/");
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!adminname || !password) {
            alert("All fields are required");
        }
    };

    return (
        <div>
            <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                    <div className="card-front">
                        <div className="center-wrap">
                            <div className="section text-center">
                                <h4 className="mb-4 pb-3">Log In</h4>
                                <div className="form-group">
                                    <input type="text" name="adminname" className="form-style"
                                           placeholder="Admin ID" id="adminname"
                                           autoComplete="off"
                                           value={adminname}
                                           onChange={(e) => setAdminname(e.target.value)}/>
                                    <i className="input-icon uil uil-at"></i>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="password" name="logpass" className="form-style"
                                           placeholder="Admin Password" id="logpass"
                                           autoComplete="off"
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <i className="input-icon uil uil-lock-alt"></i>
                                </div>
                                <button href="#" className="btn mt-4" onClick={handleSubmit}>submit</button>
                                <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot
                                    your password?</a></p>
                            </div>
                            <a href="/" onClick={handelLogin} className="footer-link">Student</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversityLogin;
