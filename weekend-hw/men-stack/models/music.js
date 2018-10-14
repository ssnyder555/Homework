const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  artiest: {type: String, required: true},
  genre: {type: String},
  goodWithBass: {type: Boolean},
  image: {type: String}
});

module.exports = mongoose.model('Music', musicSchema);
