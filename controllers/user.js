const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const getUsers = async (req, res) => {
  // const { name = 'no name', age, apikey } = req.query;
  const { limit = 5, from = 0 } = req.query;
  const query = { status: true }; // Return only users with status = true
  const [ total, users ] = await Promise.all([
    User.countDocuments(query),
    User.find(query)
      .skip(Number(from))
      .limit(Number(limit))
  ])
  res.json({
    total,
    users,
  });
};
const editUser = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, email, ...rest } = req.body;
  if (password) {
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, rest);
  res.json({
    user,
  });
};
const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });
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
  getUsers, editUser, createUser, deleteUser, updateUser,
};