// backend/index.js
import express, { json } from 'express';
import cors from 'cors';
import todosRouter from './routes/todos';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use('/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
