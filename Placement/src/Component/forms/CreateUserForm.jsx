import React, { useState } from 'react';

const CreateUserForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        role: 'student',
        course_pursuing: '',
        first_name: '',
        last_name: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/user/createuser/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('User created successfully!');
            } else {
                setMessage('Failed to create user.');
            }
        } catch (error) {
            setMessage('An error occurred.');
        }
    };

    return (
        <form className="styled-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Role:</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div className="form-group">
                <label>Course Pursuing:</label>
                <select
                    name="course_pursuing"
                    value={formData.course_pursuing}
                    onChange={handleChange}
                    required={formData.role === 'student'}
                    disabled={formData.role === 'admin'}
                >
                    <option value="">Select a course</option>
                    <option value="computer_science">Computer Science</option>
                    <option value="data_science">Data Science</option>
                    <option value="business_management">Business Management</option>
                    <option value="mechanical_engineering">Mechanical Engineering</option>
                    <option value="electrical_engineering">Electrical Engineering</option>
                    <option value="civil_engineering">Civil Engineering</option>
                    <option value="biotechnology">Biotechnology</option>
                    <option value="economics">Economics</option>
                </select>
            </div>
            <div className="form-group">
                <label>First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="form-button" type="submit">Create User</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreateUserForm;
