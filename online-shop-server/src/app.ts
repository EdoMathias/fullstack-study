import express from 'express';
import { userRouter } from './controllers/user-controller';
import userLocaldbService from './services/user-localdb-service';

const port = 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

//---New way---//
app.use('/api/users', userRouter(userLocaldbService));

//---Old way---//
// app.get('/users', (req, res) => {
//   res.status(200).json({ status: res.status });
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
