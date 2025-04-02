import React, { useState } from 'react';

const EditPlacementForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [placementId, setPlacementId] = useState('');
    const [formData, setFormData] = useState({
        company: '',
        package: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/placement/edit/${placementId}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage('Placement updated successfully!');
            } else {
                setMessage('Failed to update placement.');
            }
        } catch (error) {
            setMessage('An error occurred.');
        }
    };

    return (
        <form className="styled-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Placement ID:</label>
                <input
                    type="text"
                    value={placementId}
                    onChange={(e) => setPlacementId(e.target.value)}
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
            <button className="form-button" type="submit">Edit Placement</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default EditPlacementForm;
