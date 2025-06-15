import React from 'react';
import '../styles/App.css';

const TaskList = ({ tasks, markComplete }) => {
  return (
    <div className="card">
      <h2>Task List</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <p><strong>{task.title}</strong></p>
          <p>Status: {task.status}</p>
          <p>Deadline: {task.deadline}</p>
          {task.status !== "Completed" && (
            <button onClick={() => markComplete(index)}>Mark as Complete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
