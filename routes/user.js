const { Router } = require('express');
const { getUser, editUser, createUser, deleteUser, updateUser } = require('../controllers/user');
const router = Router();

router.get('/', getUser);
router.put('/:id', editUser);
router.post('/', createUser);
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;