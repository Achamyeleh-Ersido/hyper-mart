import cors from 'cors';
import express from 'express';
// import router from './routes';
const app = express();
app.use(cors());
app.use(express.json());
// app.use('/api', router);

app.get('/health', (req, res) => {
  res.json({ status: 'OKAY' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port http://localhost:${PORT}`);
});