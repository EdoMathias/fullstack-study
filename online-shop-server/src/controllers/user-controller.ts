import { Router } from 'express';
import db from '../db/db.json';
import { IUserService } from '../services/user-service/IUserService';

export const userRouter = (userService: IUserService) => {
  const router = Router();
  router.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
  });

  router.post('/', (req, res) => {
    const user = req.body;
    db.users.push(user);
    res.status(201).json({ msg: 'User created' });
  });

  router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userService.getUser(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: `Internal server error: ${error}` });
    }
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const userIndex = db.users.findIndex((user) => user.id === id);

    if (userIndex >= 0) {
      db.users.splice(userIndex, 1);
      res.status(200).json({ msg: `Successfully deleted user ${id}` });
    } else {
      res.status(404).json({ msg: `Could not find user ${id}` });
    }
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const user = db.users.find((user) => user.id === id);

    if (user) {
      res.status(200).json(user);
      const updatedUser = req.body;
      user.firstName = updatedUser.firstName;
      user.lastName = updatedUser.lastName;
      user.email = updatedUser.email;
    } else {
      res.status(404).json({ msg: `Could not find user ${id}` });
    }
  });

  return router;
};
