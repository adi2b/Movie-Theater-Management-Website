const Subscription = require('../models/subscriptionModel');

const getSubscriptions = () =>
{
  return Subscription.find({})
}

const getSubscription = (id) =>
{
  return Subscription.findById(id)
}

const addSubscription = async (newSubscription) =>
{
  const subscription = new Subscription(newSubscription);
  await subscription.save();
  return subscription._id
}

const updateSubscription = async (id,subscription) =>
{
  await Subscription.findByIdAndUpdate(id, subscription)

  return 'Updated succeeded'
}

const deleteSubscription = async (id) =>
{
  await Subscription.findByIdAndDelete(id)

  return 'Deleted succeeded'
}

module.exports = {getSubscriptions, getSubscription, addSubscription, updateSubscription, deleteSubscription}