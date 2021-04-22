const { Router } = require('express');
const { getUser, editUser, deleteUser, updateUser } = require('../controllers/user');
const router = Router();

router.get('/', getUser);
router.put('/', editUser);
router.post('/', (req, res) => {
  res.json({
    msg: 'POST user /api',
  });
});
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;