import React, { useState } from 'react';

const CreateTestForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [formData, setFormData] = useState({
        name: '',
        course: '',
        description: '',
        syllabus: '',
        test_type: 'aptitude',
        duration: '',
        total_marks: '',
        date: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/test/create/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Test created successfully!');
            } else {
                setMessage('Failed to create test.');
            }
        } catch (error) {
            setMessage('An error occurred.');
        }
    };

    return (
        <form className="styled-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Test Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Course:</label>
                <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
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
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Syllabus:</label>
                <textarea
                    name="syllabus"
                    value={formData.syllabus}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Test Type:</label>
                <select
                    name="test_type"
                    value={formData.test_type}
                    onChange={handleChange}
                >
                    <option value="aptitude">Aptitude</option>
                    <option value="core">Core</option>
                </select>
            </div>
            <div className="form-group">
                <label>Duration (minutes):</label>
                <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Total Marks:</label>
                <input
                    type="number"
                    name="total_marks"
                    value={formData.total_marks}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="form-button" type="submit">Create Test</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreateTestForm;
