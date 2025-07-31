import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
