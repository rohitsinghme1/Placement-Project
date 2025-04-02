import React, { useState } from 'react';

const LoginForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/user/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Login successful!');
            } else {
                setMessage('Invalid credentials.');
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
            <button className="form-button" type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default LoginForm;
