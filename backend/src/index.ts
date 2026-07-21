import cors from 'cors';
import express, { text } from 'express';
// import router from './routes';
const app = express();
app.use(cors());
app.use(express.json());
// app.use('/api', router);

app.get('/health', (req, res) => {
  res.json({ text: 'Acham' });
});
app.get('/text', (req, res) => {
  res.json({ text: 'Hello World' });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port http://localhost:${PORT}`);
});