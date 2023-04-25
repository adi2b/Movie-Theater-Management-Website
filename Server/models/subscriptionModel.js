const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  movieID : String,
  memberID : String,
  date: String
});

module.exports = mongoose.model('subscriptions',SubscriptionSchema);