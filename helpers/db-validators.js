const Roles = require('../models/role');
const User = require('../models/user');

const isRoleAllowed = async(role = '') => {
  const roleExists = await Roles.findOne({ role });
  if (!roleExists) {
    throw new Error(`${role} is not registered on DB`)
  };
};

const checkEmail = async (email) => {
  const emailExists = await User.findOne({ email });
  if (emailExists) throw new Error(`Email already exists`)
};

const userExistsById = async (id) => {
  const userExists = await User.findById(id);
  if (!userExists) throw new Error(`The user does not exists`)
};

module.exports = { isRoleAllowed, checkEmail, userExistsById };