import React, { useState } from 'react';

const ViewUserForm = () => {
    const SERVER_IP = '127.0.0.1';
    const SERVER_PORT = '8000';

    const [username, setUsername] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://${SERVER_IP}:${SERVER_PORT}/api/user/view/${username}/`);
            if (response.ok) {
                const data = await response.json();
                setUserDetails(data);
                setMessage('');
            } else {
                setMessage('User not found.');
                setUserDetails(null);
            }
        } catch (error) {
            setMessage('An error occurred.');
            setUserDetails(null);
        }
    };

    return (
        <div className="form-container">
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
                <button className="form-button" type="submit">View User</button>
            </form>
            {message && <p>{message}</p>}
            {userDetails && (
                <div>
                    <h3>User Details</h3>
                    <p>Username: {userDetails.username}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>First Name: {userDetails.first_name}</p>
                    <p>Last Name: {userDetails.last_name}</p>
                </div>
            )}
        </div>
    );
};

export default ViewUserForm;
