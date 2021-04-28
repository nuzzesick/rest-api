const { Router } = require('express');
const { check } = require('express-validator');
const { getUser, editUser, createUser, deleteUser, updateUser } = require('../controllers/user');
const router = Router();

router.get('/', getUser);
router.put('/:id', editUser);
router.post(
  '/',
  [
    check('email', 'Email is not valid').isEmail(),
  ],
  createUser
);
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;