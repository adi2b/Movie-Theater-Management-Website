const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name : String,
  premiereYear : Number,
  generes: [String],
  image: String
});

module.exports = mongoose.model('movies',MovieSchema);