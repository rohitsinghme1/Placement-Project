import React, { useState } from 'react';

const CreatePlacementForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [formData, setFormData] = useState({
        student: '',
        company: '',
        package: '',
        job_role: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/placement/createplacements/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Placement created successfully!');
            } else {
                setMessage('Failed to create placement.');
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
                <label>Company:</label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Package:</label>
                <input
                    type="number"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Job Role:</label>
                <input
                    type="text"
                    name="job_role"
                    value={formData.job_role}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="form-button" type="submit">Create Placement</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreatePlacementForm;
