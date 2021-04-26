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
const createUser = (req, res) => {
  const { body: { name, age } } = req;
  res.json({
    msg: 'POST user /api',
    name,
    age,
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