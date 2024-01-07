import express, { Request, Response, NextFunction } from 'express';
import db from './db.json';
import { error } from 'console';

const app = express();
const port = 3000;
app.use(express.json());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${new Date().toLocaleTimeString()}: ${req.method} -> ${req.url}`
  );
  next();
};

// app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/products', (req, res) => {
  const params = req.query; // get all params
  const { edo } = req.query; // get value of specific param
  console.log(edo);
  res.send(`Params: ${JSON.stringify(params)}`);
});

/*
app.all('/users', (req, res, next) => {
  console.log(`${new Date().toLocaleTimeString()}: ${req.url}`);
  next();
});
*/

app.get('/users', logger, (req, res) => {
  res.status(200).json(db.users);
});

app.get('/users/last', (req, res) => {
  const user = db.users.slice(-1);
  if (user) {
    res.status(200).json(user[0]);
  } else {
    res.status(404).json({ error: 'user not found' });
  }
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

//--- Homework ---///
/*
// get all products
app.get('/products', (req, res) => {
  res.send(db.products);
});

// get product by id
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = db.products.find((product) => product.id.toString() === id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: 'product not found' });
  }
});

// add new product
app.post('/products', (req, res) => {
  const product = req.body;
  db.products.push(product);
  res.status(201).json({ msg: 'Created product' });
});

// Change product by id
app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  let product = db.products.find((product) => product.id.toString() === id);

  if (product) {
    const updatedProduct = req.body;
    product.title = updatedProduct.title;
    product.price = updatedProduct.price;
    product.description = updatedProduct.description;
    product.category = updatedProduct.category;
    product.image = updatedProduct.image;
    product.rating = updatedProduct.rating;
    res.status(200).json({ msg: `changed product ${product.id}` });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// delete product
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  let productIndex = db.products.findIndex(
    (product) => product.id.toString() === id
  );

  if (productIndex >= 0) {
    db.products.splice(productIndex, 1);
    res.status(200).json({ msg: `Successfully deleted product ${id}` });
  } else {
    res.status(404).json({ msg: `Product not found` });
  }
});
*/
