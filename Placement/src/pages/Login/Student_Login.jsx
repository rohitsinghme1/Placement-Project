import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Student_login.css"

const StudentLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handelLogin = (t) => {
        t.preventDefault();
        navigate("/University_Login");
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password || !email) {
            alert("All fields are required");
        }
    };

    return (
        <div>


            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <div className="form-group">
                                                        <input type="email" name="logemail" className="form-style"
                                                               placeholder="Your Email" id="logemail"
                                                               autoComplete="off"
                                                               value={email}
                                                               onChange={(e) => setEmail(e.target.value)}/>
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style"
                                                               placeholder="Your Password" id="logpass"
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
                                                <a href="/University_Login" onClick={handelLogin} className="footer-link">University</a>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="logname" className="form-style"
                                                               placeholder="Your Full Name" id="logname"
                                                               autoComplete="off"
                                                               value={username}
                                                               onChange={(e) => setUsername(e.target.value)}/>
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="logemail" className="form-style"
                                                               placeholder="Your Email" id="logemail"
                                                               autoComplete="off"
                                                               value={email}
                                                               onChange={(e) =>setEmail(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style"
                                                               placeholder="Your Password" id="logpass"
                                                               autoComplete="off"
                                                               value={password}
                                                               onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <button href="#" className="btn mt-4" onClick={handleSubmit} >submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;
