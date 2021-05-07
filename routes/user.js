const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, editUser, createUser, deleteUser, updateUser } = require('../controllers/user');
const { isRoleAllowed, checkEmail, userExistsById } = require('../helpers/db-validators');
const fieldValidator = require('../middlewares/field-validator');
const router = Router();

router.get('/', getUsers);
router.put('/:id', [
  check('id', 'Is not a valid ID').isMongoId(),
  check('id').custom(userExistsById),
  check('role').custom(isRoleAllowed),
  fieldValidator
], editUser);
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email').custom(checkEmail),
    check('password', 'Password must contain more than 6 characters').isLength({ min: 6 }),
    check('role').custom(isRoleAllowed),
    fieldValidator
  ],
  createUser
);
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;