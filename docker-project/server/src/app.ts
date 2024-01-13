import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const users = [
  { id: '1', firstName: 'first1', lastName: 'last1' },
  { id: '2', firstName: 'first2', lastName: 'last2' },
  { id: '3', firstName: 'first3', lastName: 'last3' },
  { id: '4', firstName: 'first4', lastName: 'last4' },
  { id: '5', firstName: 'first5', lastName: 'last5' },
];

app.use(cors());

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
