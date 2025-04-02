import React, { useState } from 'react';

const AddTestResultForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [formData, setFormData] = useState({
        student_username: '',
        test: '',
        score: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/testresult/add/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Test result added successfully!');
            } else {
                setMessage('Failed to add test result.');
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
                    name="student_username"
                    value={formData.student_username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Test ID:</label>
                <input
                    type="text"
                    name="test"
                    value={formData.test}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Score:</label>
                <input
                    type="number"
                    name="score"
                    value={formData.score}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="form-button" type="submit">Add Test Result</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddTestResultForm;
