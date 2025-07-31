// backend/index.js
const express = require('express');
const cors = require('cors');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
