const { Router } = require('express');
const { check } = require('express-validator');
const Roles = require('../models/role');
const { getUser, editUser, createUser, deleteUser, updateUser } = require('../controllers/user');
const fieldValidator = require('../middlewares/field-validator');
const router = Router();

router.get('/', getUser);
router.put('/:id', editUser);
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password must contain more than 6 characters').isLength({ min: 6 }),
    check('role').custom(async(role = '') => {
      const roleExists = await Roles.findOne({ role });
      if (!roleExists) {
        throw new Error(`${role} is not registered on DB`)
      }
    }),
    fieldValidator
  ],
  createUser
);
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;