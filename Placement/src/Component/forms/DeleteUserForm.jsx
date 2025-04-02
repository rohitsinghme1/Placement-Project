import React, { useState } from 'react';

const DeleteUserForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/user/delete/${username}/`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setMessage('User deleted successfully!');
            } else {
                setMessage('Failed to delete user.');
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <button className="form-button" type="submit">Delete User</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default DeleteUserForm;
