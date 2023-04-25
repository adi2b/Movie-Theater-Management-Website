const Member = require('../models/memberModel');

const getMembers = () =>
{
  return Member.find({})
}

const getMember = (id) =>
{
  return Member.findById(id)
}

const addMember = async (newMember) =>
{
  const member = new Member(newMember);
  await member.save();
  return member._id
}

const updateMember = async (id,member) =>
{
  await Member.findByIdAndUpdate(id, member)

  return 'Updated succeeded'
}

const deleteMember = async (id) =>
{
  await Member.findByIdAndDelete(id)

  return 'Deleted succeeded'
}

module.exports = {getMembers, getMember,addMember,updateMember,deleteMember}