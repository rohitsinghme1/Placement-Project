import React, { useState } from 'react';

const AddInternshipForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [formData, setFormData] = useState({
        student: '',
        company_name: '',
        role: '',
        start_date: '',
        end_date: '',
        description: '',
        certificate_provided: false,
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/internship/add/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Internship added successfully!');
            } else {
                setMessage('Failed to add internship.');
            }
        } catch (error) {
            setMessage('An error occurred.');
        }
    };

    return (
        <form className="styled-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Student Username:</label>
                <input
                    type="text"
                    name="student"
                    value={formData.student}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Company Name:</label>
                <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Role:</label>
                <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Start Date:</label>
                <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>End Date:</label>
                <input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        name="certificate_provided"
                        checked={formData.certificate_provided}
                        onChange={handleChange}
                    />
                    Certificate Provided
                </label>
            </div>
            <button className="form-button" type="submit">Add Internship</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddInternshipForm;
