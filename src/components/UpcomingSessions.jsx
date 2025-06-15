import React from 'react';
import '../styles/App.css';

const UpcomingSessions = ({ sessions }) => {
  return (
    <div className="card">
      <h2>Upcoming Sessions</h2>
      <ul>
        {sessions.slice(0, 3).map((session, index) => (
          <li key={index}>
            <strong>{session.title}</strong><br />
            <span className="small-text">{session.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSessions;
