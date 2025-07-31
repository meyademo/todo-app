import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/todos`)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = async (task) => {
    const res = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id) => {
    const res = await fetch(`${API_URL}/todos/${id}`, { method: 'PUT' });
    const updated = await res.json();
    setTodos(todos.map(t => (t.id === id ? updated : t)));
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
