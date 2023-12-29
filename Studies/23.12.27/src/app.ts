import express from 'express';
import db from './db.json';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/users', (req, res) => {
  res.status(200).json(db.users);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = db.users.find((user) => user.id === id);
  console.log(user);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'user not found' });
  }
});

app.post('/users', (req, res) => {
  console.log(req.body);

  const user = req.body;
  db.users.push(user);

  res.status(201).json({ msg: 'Created' });
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = db.users.find((user) => user.id === id);

  if (user) {
    res.status(200).json(user);
    const updatedUser = req.body;
    user.firstName = updatedUser.firstName;
    user.lastName = updatedUser.lastName;
    user.email = updatedUser.email;
  } else {
    res.status(404).json({ error: 'user not found' });
  }

  res.status(201).json({ msg: 'Created' });
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const userIndex = db.users.findIndex((user) => user.id === id);

  if (userIndex >= 0) {
    db.users.splice(userIndex, 1);
    res.status(200).json({ msg: 'deleted user' });
  } else {
    res.status(404).json({ error: 'user not found' });
  }

  res.status(201).json({ msg: 'Created' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
