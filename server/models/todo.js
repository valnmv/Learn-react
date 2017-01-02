const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  id: String,
  text: String,
  completed: Boolean,
  cuid: String,
  slug: String
});

module.exports = mongoose.model('Todo', TodoSchema);
