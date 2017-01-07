const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: String,
  text: String,
  cuid: String,
  slug: String
});

module.exports = mongoose.model('Item', ItemSchema);
