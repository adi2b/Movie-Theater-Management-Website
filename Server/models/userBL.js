const User = require('../models/userModel');

const getUsers = () =>
{
  return User.find({})
}

const getUser = (id) =>
{
  return User.findById(id)
}

const addUser = async (newUser) =>
{
  const user = new User(newUser);
  await user.save();
  return user._id
}

const updateUser = async (id,user) =>
{
  await User.findByIdAndUpdate(id, user)

  return 'Updated succeeded'
}

const deleteUser = async (id) =>
{
  await User.findByIdAndDelete(id)

  return 'Deleted succeeded'
}

module.exports = {getUsers, getUser, addUser, updateUser, deleteUser}