import React, { useState } from 'react';
import MenteeOverview from './components/MenteeOverview';
import TaskList from './components/TaskList';
import MentorFeedback from './components/MentorFeedback';
import UpcomingSessions from './components/UpcomingSessions';
import { tasks as taskData, feedback, sessions } from './Data/mockData';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState(taskData);

  const markComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = "Completed";
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(t => t.status === "Completed").length;

  return (
    <div>
      <MenteeOverview
        mentee="Gowre Preya"
        mentor="Anand Raj"
        completedTasks={completedTasks}
        totalTasks={tasks.length}
      />
      <TaskList tasks={tasks} markComplete={markComplete} />
      <MentorFeedback feedback={feedback} />
      <UpcomingSessions sessions={sessions} />
    </div>
  );
}

export default App;
