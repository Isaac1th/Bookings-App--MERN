import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from '../controllers/user_controller.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkAuthentication', verifyToken, (req, res, next) => {
//   res.send('hello user, your are logged in!');
// });

// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, your are logged in and you can delete your account!');
// });

// router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, your are logged in and you can delete all accounts!');
// });

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyAdmin, getAllUsers);

export default router;
