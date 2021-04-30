const Roles = require('../models/role');

const isRoleAllowed = async(role = '') => {
  const roleExists = await Roles.findOne({ role });
  if (!roleExists) {
    throw new Error(`${role} is not registered on DB`)
  };
};

module.exports = { isRoleAllowed };