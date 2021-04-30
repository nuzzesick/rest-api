const { Router } = require('express');
const { check } = require('express-validator');
const { getUser, editUser, createUser, deleteUser, updateUser } = require('../controllers/user');
const router = Router();

router.get('/', getUser);
router.put('/:id', editUser);
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contain more than 6 characters').isLength({ min: 6 }),
    check('role', 'Invalid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  ],
  createUser
);
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;