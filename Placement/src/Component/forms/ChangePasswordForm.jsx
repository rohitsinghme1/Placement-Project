import React, { useState } from 'react';

const ChangePasswordForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [formData, setFormData] = useState({
        old_password: '',
        new_password: '',
        confirm_password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.new_password !== formData.confirm_password) {
            setMessage('New password and confirm password do not match.');
            return;
        }
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/user/change_password/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    old_password: formData.old_password,
                    new_password: formData.new_password,
                }),
            });
            if (response.ok) {
                setMessage('Password changed successfully!');
            } else {
                setMessage('Failed to change password.');
            }
        } catch (error) {
            setMessage('An error occurred.');
        }
    };

    return (
        <form className="styled-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Old Password:</label>
                <input
                    type="password"
                    name="old_password"
                    value={formData.old_password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>New Password:</label>
                <input
                    type="password"
                    name="new_password"
                    value={formData.new_password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="form-button" type="submit">Change Password</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ChangePasswordForm;
