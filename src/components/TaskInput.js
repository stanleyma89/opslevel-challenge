import React, { useState } from 'react';
import '../App.css'

const TaskInput = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !priority) return;
    if (priority < 0) return;
    addTodo(name, priority);
    setName('');
    setPriority('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="margin-right">
          <label className="label">
            <div className="container">
              Task:
            </div>
            <div className="flex">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div className="margin-right">
          <label className="label">
            <div className="container">
              Priority:
            </div>
            <div className="flex">
              <input
                type="number"
                className="input"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div className="container">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  )
}

export default TaskInput;
