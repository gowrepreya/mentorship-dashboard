import React from 'react';
import '../styles/App.css';

const MenteeOverview = ({ mentee, mentor, completedTasks, totalTasks }) => {
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <div className="card">
      <h2>Mentee Overview</h2>
      <p>Mentee: <strong>{mentee}</strong></p>
      <p>Mentor: <strong>{mentor}</strong></p>
      <div>
        <p>Progress</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MenteeOverview;
