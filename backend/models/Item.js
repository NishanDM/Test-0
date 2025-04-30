const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  image: String, // path to the uploaded image
  description: String,
  price: Number,
  warranty: Number,
});

module.exports = mongoose.model('Item', itemSchema);
