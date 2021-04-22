const getUser = (req, res) => {
  res.json({
    msg: 'GET user /api',
  });
};
const editUser = (req, res) => {
  res.json({
    msg: 'PUT user /api',
  });
};
const createUser = (req, res) => {
  res.json({
    msg: 'POST user /api',
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