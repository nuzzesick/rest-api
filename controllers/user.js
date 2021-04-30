const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const getUser = (req, res) => {
  const { name = 'no name', age, apikey } = req.query;
  res.json({
    msg: 'GET user /api',
    name,
    age,
    apikey
  });
};
const editUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json({
    msg: 'PUT user /api',
    id,
  });
};
const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });
  // Verify if email exists
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({
      msg: 'Email already exists'
    });
  }
  // Encrypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  //Save on DB
  await user.save();
  res.json({
    user,
  });
};
const deleteUser = (req, res) => {
  res.json({
    msg: 'DELETE user /api',
  });
};
const updateUser = (req, res) => {
  res.json({
    msg: 'PATCH user /api',
  });
};

module.exports = {
  getUser, editUser, createUser, deleteUser, updateUser,
};