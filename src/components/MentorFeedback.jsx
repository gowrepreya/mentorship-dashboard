import React from 'react';
import '../styles/App.css';

const MentorFeedback = ({ feedback }) => {
  return (
    <div className="card">
      <h2>Mentor Feedback</h2>
      {feedback.slice(0, 3).map((item, idx) => (
        <div key={idx}>
          <p className="small-text">{item.date}</p>
          <p>{item.comment}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MentorFeedback;
