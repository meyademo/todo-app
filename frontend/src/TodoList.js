import React from 'react';

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ marginBottom: 10 }}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.task}
          </span>
          <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 10 }}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
