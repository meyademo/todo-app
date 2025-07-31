// backend/routes/todos.js
const express = require('express');
const router = express.Router();

let todos = [];
let id = 1;

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST new todo
router.post('/', (req, res) => {
  const { task } = req.body;
  const newTodo = { id: id++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT toggle completed
router.put('/:id', (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// DELETE a todo
router.delete('/:id', (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.status(204).end();
});

module.exports = router;
