const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: String,
  no: String,
  name: String,
  description: String,
  barcode: String,
  cuid: String,
  slug: String
});

module.exports = mongoose.model('Item', ItemSchema);
