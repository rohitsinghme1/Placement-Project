import React from 'react';
import './Notifications.css'; // Import CSS for styling

const Notifications = () => {
    const notifications = [
        { id: 1, message: "New placement opportunity available!", link: "https://example.com/placement" },
        { id: 2, message: "Your profile has been updated successfully." },
        { id: 3, message: "Don't forget to complete your assessment.", link: "https://example.com/assessment" },
    ];

    return (
        <div className="notifications-container">
            <h3 className="notifications-title">Notifications</h3>
            <ul className="notifications-list">
                {notifications.map((notification) => (
                    <li key={notification.id} className="notification-item">
                        {notification.link ? (
                            <a href={notification.link} target="_blank" rel="noopener noreferrer">
                                {notification.message}
                            </a>
                        ) : (
                            notification.message
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
