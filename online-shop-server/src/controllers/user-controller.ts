import { Router } from 'express';
import db from '../db/db.json';
import { IUserService } from '../services/user-service/IUserService';

export const userRouter = (userService: IUserService) => {
  const router = Router();
  router.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
  });

  router.post('/', async (req, res) => {
    try {
      const user = req.body;
      await userService.createUser(user);
      res.status(201).json({ msg: 'User created' });
    } catch (error) {
      res.status(500).json({ msg: `Internal server error: ${error}` });
    }
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

  router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
      await userService.deleteUser(id);
      res.status(200).json({ msg: `Successfully deleted user ${id}` });
    } catch (error) {
      res.status(404).json({ msg: `Could not find user ${id}` });
    }
  });

  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const user = db.users.find((user) => user.id === id);

    try {
      if (user) {
        res.status(200).json(user);
        const currentUser = req.body;
        await userService.editUser(currentUser);
      }
    } catch (error) {
      res.status(500).json({ message: `Internal server error: ${error}` });
    }
  });

  return router;
};
